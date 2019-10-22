/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 16:40:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-21 20:35:57
 * @Description: 主界面
 * @Email: UvDream@163.com
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import DashBoard from "./daily-office/dashboard/index"
import { Layout } from 'antd';
import "../styles/index.less"
import Menus from "../components/menus/index"
// import { UserDropdown } from "../components/user-dropdown/index";
import OperationLog from "./operation-log/index"
// 通知
import Notice from "./daily-office/notice/index"
import GetNotice from "./daily-office/notice/get"
//收到的通知
import GetDetail from "./daily-office/notice/getDetail"

// 工作汇报
import WorkReport from "./daily-office/work-report/index"
// 我的积分
import MyScores from "./point-management/my-scores/index"
// 积分奖扣
import PointBonus from "./point-management/point-bonus/index"
// 积分任务
import IntegrationTask from "./point-management/integration-task/index"
// 积分审批
import PointApproval from "./point-management/integration-task/index"
// 管理任务
import ManagementTask from "./point-management/management-task/index"
// 积分排名
import PointRanking from "./point-management/point-ranking/index"
// 积分查询
import PointQuery from "./point-management/point-query/index"
// 积分奖票
import PointTicket from "./point-management/point-ticket/index"
// 核查结算
import CheckSettlement from "./point-management/check-settlement/index"
// 事件库
import EventLibrary from "./point-management/event-library/index"
// 考勤
import Attendance from "./mobile-attendance/attendance/index"
// 排班打卡
import Scheduling from "./mobile-attendance/scheduling/index"
// 成员管理
import MemberManagement from "./system-management/member-management/index"
// 积分配制
import PointPreparation from "./system-management/point-preparation/index"
// 角色权限设置
import RolePermissionSetting from "./system-management/role-permission-settings/index"
// 奖扣权限设置
import BonusPermissionSetting from "./system-management/bonus-permission-setting/index"
const { Sider, Content } = Layout;


export default class Home extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <div className="content" >
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">
                            <span className="iconfont" >&#xe600;</span>
                            <div>
                                <p>用户名</p>
                                <p>武汉法治财政</p>
                            </div>
                        </div>
                        <Menus />
                    </Sider>
                    <Layout style={{ width: "100%", overflow: "hidden" }}>
                        {/* <Header style={{ background: '#fff', width: "100%", minWidth: "800px", padding: 0, display: "flex", alignItems: "center" }}>
                             <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        <Row style={{ width: "100%", height: "64px", display: "flex", alignItems: "center" }}>
                            <Col span={12}>
                                <Breadcrumb style={{ marginLeft: "20px" }}>
                                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                                    <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                            <Col span={10}></Col>
                            <Col span={12} >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                    <Dropdown overlay={UserDropdown} >
                                        <span className="ant-dropdown-link" style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                                            <Avatar size="large" icon="user" />
                                            <div style={{ marginLeft: "10px" }}>root</div>
                                        </span>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                        </Header> */}
                        <Content
                            style={{
                                minHeight: 280,
                                background: '#f7f7f7',
                                overflowX: "hidden",
                                overflowY: "auto"
                            }}
                        >
                            <div style={{ height: "100%" }}>
                                <Route path="/main/dashboard/" component={DashBoard}></Route>
                                <Route path="/main/notice/" component={Notice}></Route>
                                <Route path="/main/getNotice/" component={GetNotice}></Route>
                                <Route path="/main/getDetail/" component={GetDetail}></Route>
                                <Route path="/main/workReport/" component={WorkReport}></Route>
                                <Route path="/main/myScores/" component={MyScores}></Route>
                                <Route path="/main/pointBonus/" component={PointBonus}></Route>
                                <Route path="/main/integrationTask/" component={IntegrationTask}></Route>
                                <Route path="/main/pointApproval/" component={PointApproval}></Route>
                                <Route path="/main/managementTask/" component={ManagementTask}></Route>
                                <Route path="/main/pointRanking/" component={PointRanking}></Route>
                                <Route path="/main/pointQuery/" component={PointQuery}></Route>
                                <Route path="/main/pointTicket/" component={PointTicket}></Route>
                                <Route path="/main/checkSettlement/" component={CheckSettlement}></Route>
                                <Route path="/main/eventLibrary/" component={EventLibrary}></Route>
                                <Route path="/main/attendance/" component={Attendance}></Route>
                                <Route path="/main/scheduling/" component={Scheduling}></Route>
                                <Route path="/main/memberManagement/" component={MemberManagement}></Route>
                                <Route path="/main/pointPreparation/" component={PointPreparation}></Route>
                                <Route path="/main/rolePermissionSetting/" component={RolePermissionSetting}></Route>
                                <Route path="/main/bonusPermissionSetting/" component={BonusPermissionSetting}></Route>
                                <Route path="/main/operationLog/" component={OperationLog}></Route>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div >
        );
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
}
