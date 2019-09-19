/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 16:40:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-19 10:57:00
 * @Description: 主界面
 * @Email: UvDream@163.com
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import DashBoard from "./dashboard/index"
import OperationLog from "./operation-log/index"
import { Layout, Icon, Breadcrumb, Avatar } from 'antd';
import "../styles/index.less"
import Menus from "../components/menus/index"
const { Header, Sider, Content } = Layout;
export default class Home extends Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <div className="main" >
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">logo</div>
                        <Menus />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', width: "100%", position: 'fixed', padding: 0, display: "flex", alignItems: "center" }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Breadcrumb style={{ marginLeft: "20px" }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ position: "fixed", right: "20px", display: "flex", alignItems: "center" }}>
                                <Avatar size="large" icon="user" />
                                <div style={{ marginLeft: "10px" }}>root</div>
                            </div>
                        </Header>
                        <Content
                            style={{
                                minHeight: 280,
                                background: '#f7f7f7'
                            }}
                        >
                            <div style={{ margin: "74px 10px 0", background: '#fff', borderRadius: "10px", padding: "10px" }}>
                                <Route path="/" exact component={DashBoard}></Route>
                                <Route path="/operationLog/" component={OperationLog}></Route>
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
