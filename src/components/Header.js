import React from 'react';
import './Header.css';




const Header = () => (
    <div>
     <ul id="nav">
            <div className="ml4">
                <li><a href="/">Home</a></li>
             </div>
               <div className="fr mr5 "> 
                 <li className="ba b--white  dim black b mh4"><a href="/">Login</a></li>
                    <li  className="ba b--white  dim black b"><a href="/">SignUp</a></li>
              
              </div>
                 </ul>
            </div>
    
)

export default Header;;
