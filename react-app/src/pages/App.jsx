import React from 'react';
import { Layout } from 'antd';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopHeader from '../components/Header'
import Menus from '../components/Menus'
function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <Layout>
        <Header style={{ zIndex: 1, width: '100%',backgroundColor:'#fff' }}>
          <TopHeader/>
          <Menus/>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 900 }}>
            <Route path="/" exact component={Dashboard}></Route>
          </div>
        </Content>
        <Footer>
          底部
        </Footer>
      </Layout>
    </Router>
  );
}
export default App;