import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Questionnaire from "./components/Questionnaire";
import NotFound from "./components/NotFound";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/questionnaire" exact component={Questionnaire}/>
                { /* Catch all unmatched routes */ }
                <Route component={NotFound}/>
            </Switch>
        );
    }

}

export default Routes;