import React from 'react';
import { Route } from "react-router-dom";
import DashBoard from "./dashboard/index"
import OperationLog from "./operation-log/index"
import { Layout, Menu, Icon } from 'antd';
import "../styles/index.less"
const { Header, Sider, Content } = Layout;
const Home: React.FC = () => {
    let state = {
        collapsed: false,
    };

    return (
        <div className="main">
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Route path="/" exact component={DashBoard}></Route>
                        <Route path="/operationLog/" component={OperationLog}></Route>
                    </Content>
                </Layout>
            </Layout>
            {/* 这才是首页
            <Link to="/operationLog/">仪表盘</Link>
            <Route path="/" exact component={DashBoard}></Route>
            <Route path="/operationLog/" component={OperationLog}></Route> */}
        </div>
    );
}
export default Home;