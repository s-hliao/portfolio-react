import React from 'react'

import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/Container.css"

export default function TopNav(){

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <div class="padding-left">
                <Navbar.Brand href="#home">Henry Liao's Portfolio</Navbar.Brand>
            </div>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ms-auto">
                        
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Me</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Research</Nav.Link>
                        <div class="padding-right">
                            <Nav.Link href="#link">Contact Me</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            

            
        
        </Navbar>
       
    );
}