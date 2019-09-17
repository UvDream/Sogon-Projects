import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashBoard from "../pages/dashboard/index";
import Login from "../pages/login/index"
const AppRoutes=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={DashBoard}></Route>
                <Route path="/login"  component={Login}></Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes;