/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 16:40:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:32:40
 * @Description: 主界面
 * @Email: UvDream@163.com
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import DashBoard from "./dashboard/index"
import { Layout, Breadcrumb, Avatar, Row, Col, Dropdown } from 'antd';
import "../styles/index.less"
import Menus from "../components/menus/index"
import { UserDropdown } from "../components/user-dropdown/index";
import OperationLog from "./operation-log/index"
// 通知
import Notice from "./notice/index"
// 工作汇报
import WorkReport from "./work-report/index"
const { Header, Sider, Content } = Layout;


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
                        <Header style={{ background: '#fff', width: "100%", minWidth: "800px", padding: 0, display: "flex", alignItems: "center" }}>
                            {/* <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            /> */}
                            <Row style={{ width: "100%", height: "64px", display: "flex", alignItems: "center" }}>
                                <Col span={12}>
                                    <Breadcrumb style={{ marginLeft: "20px" }}>
                                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                                        <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                                {/* <Col span={10}></Col> */}
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
                        </Header>
                        <Content
                            style={{
                                minHeight: 280,
                                background: '#f7f7f7',
                                overflowX: "hidden",
                                overflowY: "auto"
                            }}
                        >
                            <div style={{ height: "100%" }}>
                                <Route path="/" exact component={DashBoard}></Route>
                                <Route path="/operationLog/" component={OperationLog}></Route>
                                <Route path="/notice/" component={Notice}></Route>
                                <Route path="/workReport/" component={WorkReport}></Route>
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
