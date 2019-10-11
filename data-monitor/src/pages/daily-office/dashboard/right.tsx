import React from 'react';
import { Calendar } from 'antd';

const DashBoardRight = () => {
    return (
        <div className="dashboard-right">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    )
    function onPanelChange() {
    }
}
export default DashBoardRight;