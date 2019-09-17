/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 16:40:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-17 17:15:30
 * @Description: 主界面
 * @Email: UvDream@163.com
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import DashBoard from "./dashboard/index"
import OperationLog from "./operation-log/index"
import { Layout, Icon } from 'antd';
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
                        <Header style={{ background: '#fff', width: "100%", position: 'fixed', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            {/* <Breadcrumb style={{ position: "fixed" }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb> */}
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
