import React from 'react';
import search from '../icon/search.png';
import delivery from '../icon/delivery.png';
import food from '../icon/food.png';
import order from '../icon/order.png';



const Works = () => (
  <div>
    <div className="justify-center-l" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex list justify-center-l  justify-center-m helvetica pa5-l pa3-ns pa5-m">
        <div className=" pr5-l pr2-m f3-l f1-ns f1-m">
          <img className="justify-center " src={search} alt="search" />
          <h5 className="tc"> Search the Menu </h5>
        </div>
        <div className=" pr5-l pr2-m f3-l f1-ns f1-m">
          <img className="justify-center " src={food} alt="food" />
          <h5 className="tc"> Order </h5>
        </div>
        <div className="  pr5-l f3-l pr2-m f1-ns f1-m">
          <img className="justify-center" src={order} alt="order" />
          <h5 className="tc"> Place your address </h5>
        </div>
        <div className="pr5-l f3-l f1-ns pr2-m f1-m">
          <img className="justify-center " src={delivery} alt="delivery" />
          <h5 className="tc"> Get delivered </h5>
        </div>
      </div>
    </div>
  </div>
);



export default Works;