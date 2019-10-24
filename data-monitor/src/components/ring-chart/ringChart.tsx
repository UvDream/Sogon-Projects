import React from 'react';
import "./ringChart.less"
import Donut from "./chart"

export interface RingChartProps {
    title: string,
    total: number,
    complete: number,
    color?: string
}

export interface RingChartState {

}

class RingChart extends React.Component<RingChartProps, RingChartState> {
    constructor(props: RingChartProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="ring">
                <div className="ring-title">
                    {this.props.title}
                </div>
                <div className="ring-chart">
                    <Donut total={this.props.total} complete={this.props.complete} color={this.props.color} />
                </div>
                <div className="ring-bottom">
                    <div>
                        <p>{this.props.total}</p>
                        <p>目标</p>
                    </div> 
                    <div>
                        <p>{this.props.complete}</p>
                        <p>已完成</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RingChart;