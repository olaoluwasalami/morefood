import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';
import tray from '../icon/tray.png';



const Header = () => (
    < div className = "w-100 fixed">
    <Navbar bg="light" expand="lg">
<Navbar.Brand  className='helvetica pl4-l f2' href="#home"> MoreFood <img  alt="logo" src={tray}/>  </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse  id="basic-navbar-nav">  
    < Nav className= "mr-auto fr">
            
    </Nav>
      <Nav pullRight>
      <NavItem eventKey={1}  className="ba b--red br3 bg-red helvetica pa2 tc pointer dim white b mh4"href="#">
       Signin   </NavItem>
      < NavItem className = "ba b--red pa2 pointer helvetica br3 tc dim black b mh4"
      eventKey = {2} href = "#" > Login  </NavItem>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
            </div>
    
)

export default Header;