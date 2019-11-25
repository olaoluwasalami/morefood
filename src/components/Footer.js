import React from 'react';

const Footer = () => (

    < div className = "bg-silver" >
    < span className = "footer pb5 pt3 flex-l helvetica tl justify-center" >
    <div className="company flex-l">
 < ul className = "list pointer">
 < h3 className = "f2"> Company </h3>
     <li> About Us</li>
     <li> Team </li>
     <li> Career </li>
 </ul>
 <div className="socialmedia flex-l">
    < ul className = "list pointer" >
         <h3 className = "f2"> Social Media </h3>
         <li>Twitter</li>
         <li> Facebook</li>
         <li> Instagram</li>
     </ul>
<div className="flex-l">
  <ul className="list">
      < h3 className = "f2"> Support < /h3>   
    <li> Customer Help </li>
    <li> Merchant help </li>
    <li>Fleet help </li>

  </ul>

</div>

    </div>
    </div>
</span>

< h5 className = "tc" >©2019  Copyright  Morefood</h5>
</div>
)

export default Footer;