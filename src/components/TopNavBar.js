import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './TopNavBar.scss';

import img_logo from './../img_logo.png';

function TopNavBar() {
    return (
        <Navbar
            id="top-navbar"
            className="navbar navbar-expand-lg fixed-top navbar-dark">

            <Navbar.Brand className="navbar-brand" href="/">
                <img src={img_logo} alt="Little Games Studio Logo" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbarSupportedContent" />

            <Navbar.Collapse id="navbarSupportedContent" className="collapse navbar-collapse">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Games</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default TopNavBar;
