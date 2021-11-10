import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './TopNavBar.scss';

import img_logo from './../img_logo.png';

function TopNavBar() {
    return (
        <Navbar
            id="top-navbar"
            className="navbar navbar-expand-lg fixed-top navbar-dark">

            <Navbar.Brand className="navbar-brand" as={Link} to="/">
                <img src={img_logo} alt="Little Games Studio Logo" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbarSupportedContent" />

            <Navbar.Collapse id="navbarSupportedContent" className="collapse navbar-collapse">
                <Nav className="mr-auto">
                    <CustomLink
                        activeOnlyWhenExact={true}
                        to="/"
                        label="Games"
                    />
                    <CustomLink
                        to="/about"
                        label="About" />
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

function CustomLink({ label, to, activeOnlyWhenExact }) {
    let match = useMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Nav.Link as={Link} to={to} className={match ? "active" : ""}>{label}</Nav.Link>
    );
}

export default TopNavBar;
