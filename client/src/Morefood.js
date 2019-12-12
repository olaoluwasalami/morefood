import React,{Component} from 'react';
import auth0Client from './Auth';
import NavBar from './components/NavBar.js';
import Welcome from './components/Welcome.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

class Morefood  extends Component {
    signIn = () => {
        auth0Client.signIn();
        this.props.history.replace('/');
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    };
   
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