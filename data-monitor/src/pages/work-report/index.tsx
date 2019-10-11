import React from 'react';
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
            <div>
                工作汇报
            </div>
        );
    }
}

export default WorkReport;