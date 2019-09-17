import React from 'react';
import { Route, Link } from "react-router-dom";
import DashBoard from "./dashboard/index"
import OperationLog from "./operation-log/index"
const Home: React.FC = () => {
    return (
        <div>
            这才是首页
            <Link to="/operationLog/">仪表盘</Link>
            <Route path="/" exact component={DashBoard}></Route>
            <Route path="/operationLog/" component={OperationLog}></Route>
        </div>
    );
}
export default Home;