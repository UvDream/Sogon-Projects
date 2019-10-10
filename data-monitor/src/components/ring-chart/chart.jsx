import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Guide
} from "bizcharts";
import DataSet from "@antv/data-set";

class Donut extends React.Component {
    render() {
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
            {
                item: "未完成",
                count: 40
            },
            {
                item: "已完成",
                count: 21
            }
        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: (val) => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        };
        return (
            <div>
                <Chart
                    width={150}
                    height={150}
                    data={dv}
                    scale={cols}
                    padding={[0, 0, 0, 0]}
                    forceFit
                >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;><span style=&quot;color:#262626;font-size:0.8em&quot;>75%</span></div>"
                            alignX="middle"
                            alignY="middle"
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                    name: item,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                     
                    </Geom>
                </Chart>
            </div>
        );
    }
}

export default Donut;