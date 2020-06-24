import React from 'react';
import {Header} from "./main-navbar.styles";
import {withRouter} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ReactComponent as AprofundeSeLogo} from '../../../assets/icon/aprofunde-se-logo-navbar.svg';
// import Logo from '../../../assets/img/aprfds-final.png'

const MainNavBar = ({onRouteChange, pathname}) => {
    console.log(pathname);
    return (
      <Header headerAbsolute={pathname === '/' ? 'absolute' : null} >
        <Navbar>
          <div className='nav-header'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand class='brand' href="#home"><AprofundeSeLogo /></Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => onRouteChange('home') }>Início</Nav.Link>
            <Nav.Link onClick={() => onRouteChange('about') }>Sobre</Nav.Link>
            <NavDropdown  title="Tours" id="tours">
              <NavDropdown.Item  onClick={() => onRouteChange('embrenhe-se') }>Embrenhe-se</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => onRouteChange('entranhe-se') }>Entranhe-se</NavDropdown.Item>
              <NavDropdown.Item onClick={() => onRouteChange('entregue-se') }>Entregue-se</NavDropdown.Item>
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


export default withRouter(MainNavBar);