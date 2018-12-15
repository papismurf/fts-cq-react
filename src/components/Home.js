import React, { Component }from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Client Questionnaire
                    </p>
                    <Button>
                    <Link to="/login">
                        Start Here
                    </Link>
                    </Button>
                </header>
            </div>
        )
    }
}

export default Home;