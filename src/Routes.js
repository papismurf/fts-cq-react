import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Questionnaire from "./components/Questionnaire";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/questionnaire" exact component={Questionnaire}/>
            </Switch>
        );
    }

}

export default Routes;