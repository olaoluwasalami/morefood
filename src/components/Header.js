import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import tray from '../icon/tray.png';



const Header = () => (
    < div className = "w-100 fixed">
    <Navbar bg="light" expand="lg">
<Navbar.Brand  className='helvetica pl4-l flex-inline' href="#home"> MoreFood <img  alt="logo" src={tray}/>  </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse  id="basic-navbar-nav">  
    < Nav className= "mr-auto fr">
            
    </Nav>
      <Nav pullRight>
      <NavItem eventKey={1}  className="ba br3 bg-red helvetica pa2 tc pointer dim white mh3 b "href="#">
       Signin   </NavItem>
      < NavItem className = "ba pa2 pointer bg-red helvetica br3 mh3 tc  mr7-l dim white b "
      eventKey = {2} href = "#" > Login  </NavItem>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
            </div>
    
)

export default Header;