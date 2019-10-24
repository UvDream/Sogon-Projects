import React from 'react';
import { Button, Collapse } from 'antd';
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
                                <p>呵呵</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkReport;