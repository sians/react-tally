import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";

const Router = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Router