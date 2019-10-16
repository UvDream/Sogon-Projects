import React from 'react';
import Card from "../../../components/card/index";
import "../../../styles/dashboard.less"
import RingChart from '../../../components/ring-chart/ringChart'
import { Icon, Modal, Switch, Button } from 'antd';

export interface DashBoardLeftProps {

}

export interface DashBoardLeftState {

}

class DashBoardLeft extends React.Component<DashBoardLeftProps, DashBoardLeftState> {
    state = {
        visible: false,
        list: [
            { name: "我的积分", check: true, number: 12, total: 20, contrast: false },
            { name: "我的排名", check: true, number: 12, total: 20, contrast: false },
            { name: "我的奖扣", check: true, number: 12, total: 20, contrast: false },
            { name: "我的审核", check: true, number: 12, total: 20, contrast: true },
            { name: "我的任务", check: true, number: 12, total: 20, contrast: false },
            { name: "我的消息", check: false, number: 12, total: 20, contrast: false },
            { name: "管理任务", check: false, number: 12, total: 20, contrast: false }
        ],
        arr: []
    };

    // 弹出框
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
            list: this.state.arr
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    // 切换按钮
    switchChange = (e: any, event: any) => {
        let arr = JSON.parse(JSON.stringify(this.state.list));
        arr[e].check = event;
        this.setState({
            arr: arr
        })
    }
    render() {
        return (
            <div className="dashboard-left">
                <div className="dashboard-left-setting ">
                    <div onClick={this.showModal.bind(this)}>
                        <Icon type="form" />设置工作台
                </div>
                </div>
                <div className="dashboard-left-card">

                    {
                        this.state.list.map((item) => {
                            return (
                                ((index) => {
                                    return index.check ? (<Card number={item.number} contrast={item.contrast} title={item.name} total={item.total} />) : ""
                                })(item)
                            )
                        })
                    }
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
                    width={400}
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <div className="modal-foot">
                            <div>恢复默认设置</div>
                            <div>
                                <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                                    确定
                                </Button>
                                <Button key="back" onClick={this.handleCancel.bind(this)}>
                                    取消
                                </Button>
                            </div>
                        </div>
                    ]}
                >
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div className="modal-content" key={index}>
                                    <span>{item.name}</span>
                                    <Switch defaultChecked={item.check} onChange={this.switchChange.bind(this, index)} />
                                </div>
                            )
                        })
                    }
                </Modal>
            </div>
        );
    }
}

export default DashBoardLeft;