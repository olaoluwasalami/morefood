import React from 'react';
import search from '../icon/search.png';
import delivery from '../icon/delivery.png';
import food from '../icon/food.png';
import order from '../icon/order.png';

const Works = () => (
  <div>
    <h3 className="helvetica tc f2 pt3-ns"> All you have to do is </h3>

    <div className="justify-center">
      <div className="flex-l list justify-center helvetica pa5">
        <div className="pr5 f3">
          <img className="tc" src={search} alt="search" />
          <h3 className="tc"> Search the Menu </h3>
        </div>
        <div className="pr5 f3">
          <img className="tc" src={food} alt="food" />
          <h3 className="tc"> Order </h3>
        </div>
        <div className="pr5 f3">
          <img className="tc" src={order} alt="order" />
          <h3 className="tc"> Place your add </h3>
        </div>
        <div className="pr5 f3">
          <img className="tc" src={delivery} alt="delivery" />
          <h3 className="tc"> Get delivered </h3>
        </div>
      </div>
    </div>
  </div>
);



export default Works;