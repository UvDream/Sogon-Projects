import React from 'react';
import DashBoardLeft from "./left"
import DashBoardRight from "./right"
import "../../../styles/dashboard.less"
const DashBoard = (props: any) => {
    return (
        <div className="main">
            <div className="header">
                <span className="header-title">工作台</span>
            </div>
            <div className="dashboard">
                <DashBoardLeft />
                <DashBoardRight />
            </div>
        </div>

    )
}

export default DashBoard;