import React, {Fragment} from 'react';
import {Container,Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="#">About</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;