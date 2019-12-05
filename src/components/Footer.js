import React from 'react';
import google from '../icon/google.png';
import store from '../icon/app-store.png';
import { Divider } from 'semantic-ui-react';




const Footer = () => (

    <div className = "bg-black-80" >
        {/* <h4 className="text-green "> MoreFood <img alt="logo" src={tray}/>  </h4> */}
   
    <div className="company footer flex-l Arial tl justify-center flex-l mt7 pt2-l pl3-l">

 <ul className = "list pointer pa5-l  silver">
 <p className = "f3 white">For Company </p>
     <li className = "f4"> About Us </li>
      <li className = "f4"> Privacy Policy </li>
     <li className ="f4"> Terms and Condition </li>
 </ul>
 <div className=" flex-l ">
    < ul className = "list pa5-l silver" >
         <p className = "white f3"> Social Media </p>
         <li className="f4"> Twitter</li>
         <li className ="f4"> Facebook </li>
         <li className = "f4" > Instagram </li>
     </ul>
<div className="flex-l">
  <ul className="list pa5-l  silver">
      <p className = "white f3"> Support </p>   
    <li className = "f4"> Customer Help </li>
    <li className = "f4"> Merchant help </li>
    <li className = "f4"> Fleet help </li>

  </ul>
  <div classname="flex-l">
      < ul className = "list pa5-l  silver" >
         <p className = "white f3" tc> Download </p>
         <li><img src={google} alt="google" width="120" className=""/> </li> 
          <li>  <img src={store} alt="apple" width="120"/> </li>
                
        </ul>
  </div>

</div>

    </div>
    </div>

<Divider /> 

< h5 className = "tc f5 silver">©2019  Copyright  Morefood</h5>
</div>
);

export default Footer;