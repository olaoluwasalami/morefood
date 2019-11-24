import React, {Component} from 'react';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import Menu from './components/Menu.js';



class Morefood extends Component {

    render(){
        return(
            <div className="fluid-container">
            <Header/>    
            <Welcome/> 
            <Menu/>
                           
            </div>
        )}
}



export default Morefood;