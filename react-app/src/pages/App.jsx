import React from 'react';
import { Layout } from 'antd';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopHeader from '../components/Header'
import Menus from '../components/Menus'
import Test from './test'
function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <Layout>
        <Header style={{ zIndex: 1, width: '100%',backgroundColor:'#fff',padding:0,height:'100px' }}>
          <TopHeader/>
          <Menus/>
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 900 }}>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/test/" exact component={Test}></Route>
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