import React from 'react';
import DashBoardLeft from "./left"
import DashBoardRight from "./right"
import "../../../styles/dashboard.less"
const DashBoard = (props: any) => {
    return (
        <div className="dashboard">
            <DashBoardLeft />
            <DashBoardRight />
        </div>
    )
}

export default DashBoard;