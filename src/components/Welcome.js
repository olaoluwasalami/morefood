import React from 'react';
import './Welcome.css';
import { Container,} from "semantic-ui-react";





const Welcome = () => (
  <div>
     <div className="lcome">
     < Container text>
    < h1 className = "tc fw3 silver" > What would you like to order today ? < /h1>
   <form>
       <input id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" className="form-control fl w-80 pa2"/>
       <input type="submit" value="Find Food" className="fl pa2"/>
       </form>
       </Container>
       </div>
  </div>
  
);

export default Welcome;
