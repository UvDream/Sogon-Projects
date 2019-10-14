import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/index.less"
import Home from "../pages/index";
import Login from "../pages/login/index"
const AppRoutes = () => {
    return (
        <div className="main">
            <Router>
                <Switch>
                    <Route path="/main/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes;