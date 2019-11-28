import React from 'react';
import search from '../icon/search.png';
import delivery from '../icon/delivery.png';
import food from '../icon/food.png';
import order from '../icon/order.png';



const Works = () => (
  <div>
    <div className="justify-center" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex-l list justify-center helvetica pa5">
        <div className="pa3 f3">
          <img className="justify-center " src={search} alt="search" />
          <h5 className="tc"> Search the Menu </h5>
        </div>
        <div className="pa3 f3">
          <img className="justify-center " src={food} alt="food" />
          <h5 className="tc"> Order </h5>
        </div>
        <div className="pa3 f3">
          <img className="justify-center" src={order} alt="order" />
          <h5 className="tc"> Place your add </h5>
        </div>
        <div className="pa3 f3">
          <img className="justify-center " src={delivery} alt="delivery" />
          <h5 className="tc"> Get delivered </h5>
        </div>
      </div>
    </div>
  </div>
);



export default Works;