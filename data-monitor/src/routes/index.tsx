import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/index";
import Login from "../pages/login/index"
const AppRoutes=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/"  component={Home}></Route>
                <Route path="/login/"  component={Login}></Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes;