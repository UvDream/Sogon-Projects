import React from 'react';
import './App.less';
import Button from 'antd/es/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <span>文字</span>
      <span className="iconfont icon-gerenzhongxinxuanzhong1"></span>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
