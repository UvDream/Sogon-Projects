import React from 'react';
import { Button, Collapse, Icon } from 'antd';
import "./index.less";
const { Panel } = Collapse;

export interface WorkReportProps {

}

export interface WorkReportState {

}

class WorkReport extends React.Component<WorkReportProps, WorkReportState> {
    constructor(props: WorkReportProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="work">
                <div className="header">
                    <span className="header-title">我的工作汇报</span>
                    <Button type="primary" style={{ float: "right", marginTop: "15px", marginRight: "20px" }}>发通知</Button>
                </div>
                <div className="work-content">
                    <div className="work-content-title">月报(3月)</div>
                    <div className="work-content-main">
                        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition={"right"}>
                            <Panel header={<p>头部</p>} key="1">
                                <div className="work-content-main-article">
                                    <p>文件大家看一下</p>
                                    <div className="work-content-main-article-foot">
                                        <div className="work-content-main-article-foot-time">
                                            2019-10-21 08:01
                                        </div>
                                        <div className="work-content-main-article-foot-number">
                                            奖分&#x3000; |
                                            <div style={{ margin: "0 10px" }}>
                                                <Icon type="message" style={{ marginRight: "4px" }} />
                                                1
                                            </div>
                                            <div>
                                                <Icon type="eye" style={{ marginRight: "4px" }} />
                                                11
</div>
                                        </div>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkReport;