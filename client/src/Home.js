import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import auth0Client from './Auth';

class Home extends Component {
    signIn = () => {
        auth0Client.signIn();
          this.props.history.replace('/');
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    };
    render() {

        return ( 
            <div className='App'>
              <header clasName="App-header">
                 <img src={logo} className="App-logo" alt="logo"/>
                 <button className="home" onClick={() => {this.signIn()}}> SignIN</button>
                 {
                     auth0Client.isAuthenticated() &&
                     <div>
                         <h1> Welcome</h1>
                         <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                         <br/>
                         <button className="btn btn-dark" onClick={() => {this.signOut()}}> SignOut</button>
                     </div>
                 }

                  </header>  
            </div>
        )
    }

}

export default Home;