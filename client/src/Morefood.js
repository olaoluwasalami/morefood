import React,{Component} from 'react';
import auth0Client from './Auth';
import NavBar from './components/NavBar.js';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';


class Morefood  extends Component {
   
        render(){
        return(

            <div className="fluid-container">
            <NavBar/>
            
            <Welcome/> 
            <About/>
            <Menu/>
            <Footer/>
                           
            </div>
         )}
};



export default Morefood;