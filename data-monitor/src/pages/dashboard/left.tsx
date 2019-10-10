import React from 'react';
import Card from "../../components/card/index";
import "../../styles/dashboard.less"

const DashBoardLeft = () => {
    return (
        <div className="dashboard-left">
            <div className="dashboard-left-card">
                <Card number={11} contrast={false} title={'我的积分'} total={0} />
                <Card number={12} contrast={false} title={'我的排名(部门排名)'} total={0} />
                <Card number={12} contrast={true} title={'我的审核'} total={20} />
                <Card number={12} contrast={false} title={'我的消息'} total={0} />
            </div>
        </div>
    )
}
export default DashBoardLeft;