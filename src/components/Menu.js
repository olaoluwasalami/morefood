import React from 'react';



 const mystyle = {
     borderRadius: "50%",
     width: "200px"
 };

const Menu = () => (
  <div className="pa3-l bg-silver mt3">
     < h2 className = "pa3-l helvicta fw6 tc"> Our dishes Include </h2>
     <div className='flex-l'>
         <div className="local  pa4">
              <img style={mystyle} src="https://res.cloudinary.com/yungdenzel/image/upload/v1575050845/amala_xt6q2m.jpg" alt="local"/>
            <h4 className="tc f3 fw9"> Local delicacy </h4>
         </div>
     <div className="l chinese pa4">
       <img style={mystyle} src="https://res.cloudinary.com/yungdenzel/image/upload/v1575498403/chinese_yal35q.jpg" alt="local"/>
            <h4 className = "tc f3 fw9"> chinese </h4>
         </div>
           <div className="l local pa4">
              <img style={mystyle} src= "https://res.cloudinary.com/yungdenzel/image/upload/v1575498635/pizza_g4rgbl.jpg" alt="local"/>
            <h4 className = "tc f3 fw9"> Pizza  </h4>
         </div>
           <div className="l local pa4">
              <img style={mystyle} src= "https://res.cloudinary.com/yungdenzel/image/upload/v1575499613/vegetarian.webp" alt="local"/>
            <h4 className = "tc f3 fw9"> Vegetarian </h4>
         </div>
           <div className="l local pa4">
              <img  style={mystyle} src ="https://res.cloudinary.com/yungdenzel/image/upload/v1575463455/Coconut-Currry-600x400_jy0lqy.jpg" alt="local"/>
            <h4 className ="tc f3 fw9"> Local delicacy </h4>
         </div>
      </div>
    </div>
  
    );


export default Menu;
