import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import tray from '../icon/tray.png';
import auth0Client from './Auth';



class NavBar extends Component {

   signIn = () => {
        auth0Client.signIn();
          this.props.history.replace('/');
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    };
    
    render() {  
return(
    < div className = "w-100 fixed">
    <Navbar bg="light" expand="lg">
<Navbar.Brand  className='helvetica pl4-l flex-inline' href="#home"> MoreFood <img  alt="logo" src={tray}/>  </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse  id="basic-navbar-nav">  
    < Nav className= "mr-auto fr">
            
    </Nav>
      <Nav pullRight className="mr7 tr-ns">
          <NavItem  eventKey={1} href="#">      
            <button className="f5 link ph3 b pv2 mb2 br2 Arial pointer dib white bg-dark tc ma2"
            onClick={() => {this.signIn()}}>Sign in</button>
         
          </NavItem>
{/*           
            <NavItem   eventKey = {2} href = "#" > <button 
          className = "f6 link dim grow ph3 pv2 mb2 b helvetica pointer dib white bg-red tc ma2"
          onClick={() => {this.signOut()}}>Log out</button> </NavItem> */}
    </Nav> 
    </Navbar.Collapse>
   </Navbar>
            </div>
    
      )}};

export default NavBar;