
import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';

class NavbarPage extends Component {

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    render() {
        return (
            <Container>
                <Navbar color="light-blue lighten-4" style={{marginTop: '20px'}} light>
                    <Container>
                        <NavbarBrand>
                            FTS CQ
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
                        <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
                            <NavbarNav left>
                                <NavItem active>
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/login">Login</NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Container>
        );
    }
}

export default NavbarPage;