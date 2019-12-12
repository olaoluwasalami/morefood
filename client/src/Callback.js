import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.history.replace('/');
    }
  
    render() {
        return (
                <div>
            <p> Loading profile ... </p>
             <button className = "btn btn-dark"
        onClick = {() => {this.signOut()}} > SignOut </button> 
        </div>
        )

}}

export default withRouter(Callback);