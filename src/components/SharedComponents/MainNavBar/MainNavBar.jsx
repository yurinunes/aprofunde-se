import React from 'react';
import {Header} from "./MainNavBarStyled";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const MainNavBar = ({onRouteChange}) => {

    return (
      <Header>
        <Navbar>
          <div className='nav-header'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">Apronfunde-se</Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => onRouteChange('home') }>Início</Nav.Link>
            <Nav.Link onClick={() => onRouteChange('about') }>Sobre</Nav.Link>
            <NavDropdown title="Tours" id="tours">
              <NavDropdown.Item href="#action/3.1">Embrenhe-se</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Entranha-se</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Entregue-se</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#day-tours">Passeios</Nav.Link>
            <Nav.Link href="#instagram">Instagram</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
    );
  };


export default MainNavBar;
