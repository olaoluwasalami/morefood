import React from 'react';
import './Welcome.css';
import { Container,Divider, Form, Grid, Segment} from "semantic-ui-react";



const Welcome = () => (
       <div className="lcome">
     < Container text>
             <h1 className="tc b white pb2 pt7"> What would you like to order today ?</h1>
      <form className = "pb6-l" >
       <input id="autocomplete" placeholder="Enter your delivery address"  type="text" className="form-control fl"/>
       <input type="submit" value="Find Food" className="fl bg-green white-90"/>
       </form>
        </Container>        
       </div>
    
);

export default Welcome;
