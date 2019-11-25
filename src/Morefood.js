import React, {Component} from 'react';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import Menu from './components/Menu.js';
import Works from './components/Works.js';
import Footer from './components/Footer.js';


class Morefood extends Component {

    render(){
        return(
            <div className="fluid-container">
            <Header/>    
            <Welcome/> 
            <Works/>
            <Menu/>
            <Footer/>
                           
            </div>
        )}
}



export default Morefood;