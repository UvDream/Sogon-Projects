import React from 'react';
import Card from "../../../components/card/index";
import "../../../styles/dashboard.less"
import RingChart from '../../../components/ring-chart/ringChart'
import { Icon, Modal } from 'antd';

export interface DashBoardLeftProps {

}

export interface DashBoardLeftState {

}

class DashBoardLeft extends React.Component<DashBoardLeftProps, DashBoardLeftState> {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className="dashboard-left">
                <div className="dashboard-left-setting ">
                    <div onClick={this.showModal.bind(this)}>
                        <Icon type="form" />设置工作台
                </div>
                </div>
                <div className="dashboard-left-card">
                    <Card number={11} contrast={false} title={'我的积分'} total={0} />
                    <Card number={12} contrast={false} title={'我的排名(部门排名)'} total={0} />
                    <Card number={12} contrast={true} title={'我的审核'} total={20} />
                    <Card number={12} contrast={false} title={'我的消息'} total={0} />
                </div>
                <div className="dashboard-left-chart">
                    <div className="dashboard-left-chart-title">
                        管理任务
                </div>
                    <div className="dashboard-left-chart-content">
                        <RingChart title={"奖分任务（周）"} total={120} complete={10} color={'red'} />
                        <RingChart title={"扣分任务（周）"} total={100} complete={0} />
                        <RingChart title={"人次任务（周）"} total={200} complete={0} />
                        <RingChart title={"比例任务（周）"} total={300} complete={150} />
                    </div>
                </div>

                {/* 弹框 */}
                <Modal
                    title="工作台模块显示设置"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default DashBoardLeft;