import React, {Component} from 'react';
import './Welcome.css';
import { Container} from "semantic-ui-react";
/* global google */




class Welcome extends Component {
  constructor(props){
         super(props);
         this.autocompleteInput = React.createRef();
         this.autocomplete = null;
         this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  componentDidMount(){
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, {
               "types": ["geocode"]
        });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
        }

        handlePlaceChanged() {
              //  const place = this.autocomplete.getPlace();
              //  this.props.onPlaceLoaded(place);
        
              }

  render() {
    return (
      <div className="lcome">
       <Container text>
          <h1 className="tc b white pb2 pt7">
            {" "}
            What would you like to order today ?
          </h1>
          <form className="pb6-l">
            <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter your delivery address" type="text"
              className="form-control fl"    
            />
            <input  type="submit" value="Find Food" className="fl ml2 bg-green white-90"/>
          </form>
        </Container>
      </div>
    );
  }
}

export default Welcome;
