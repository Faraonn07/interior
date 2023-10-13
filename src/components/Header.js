import React, { Component } from 'react';
import { Button, Container,  Nav, Form, Navbar } from 'react-bootstrap';
import Logo1 from "./Logo1.jpg";
import '../components/Header.css'
import "../components/RedactorBtn.css"


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar className='navbar' fixed='top' collapseOnSelect  expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Logo1}
                        height="30"
                        width="30"
                        className='d-inline-block align-top'
                        alt='Logo'
                    />   
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav "> 
                    <Nav className='mr-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/redactor">Redactor</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                <Form.Control 
                     type="text"
                     placeholder="Search"
                     className="mr-sm-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
       
      </>
    );
  }
}
