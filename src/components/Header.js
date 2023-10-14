import React, { Component } from 'react';
import { Button, Container,  Nav, Form, Navbar } from 'react-bootstrap';
import Logo1 from "./Logo1.jpg";
import '../components/Header.css'
import "../components/RedactorBtn.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Redactor from "./Redactor"
import About from "./About"
import Contacts from './Contacts';
import HomePage from './HomePage';





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
                    <Navbar.Collapse id="responsive-navbar-nav" > 
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
                <Nav className='mr-auto'>
                        
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
        
       <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/redactor' component={Redactor} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
       </Router>
      </>
    );
  }
}
