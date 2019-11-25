import React from 'react';
import './Header.css';




const Header = () => (
    < div className = "w-100 fixed" >
     <ul id="nav">
            <div className="ml4">
                < li className ="f1-ns"> < a href = "/" > Morefood </a></li>
             </div>
               <div className="fr mr5 "> 
                 <li className="ba b--white  dim black b mh4"><a href="/">Login</a></li>
                    <li  className="ba b--white  dim black b"><a href="/">SignUp</a></li>
              
              </div>
                 </ul>
            </div>
    
)

export default Header;;
