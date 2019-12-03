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
      <Nav pullRight className="mr7 tr-ns">
      <NavItem className="f6 link dim  ph3 b pv2 mb2  helvetica pointer dib white bg-red tc ma2" eventKey={1} href="#">
       Signin   </NavItem>
      < NavItem className = "f6 link dim  ph3 pv2 mb2 b helvetica pointer dib white bg-red tc ma2"
      eventKey = {2} href = "#" > Login  </NavItem>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
            </div>
    
)

export default Header;