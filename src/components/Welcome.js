import React, {Component} from 'react';
import { Container} from "semantic-ui-react";
import BackgroundSlider from "react-background-slider";
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
               types: ['establishment'],
      componentRestrictions: {country: "ng"}
        });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
        }

        handlePlaceChanged() {
              //  const place = this.autocomplete.getPlace();
              //  this.props.onPlaceLoaded(place);
        
              }

  render() {
    return (
      <div>
             <BackgroundSlider
             images = {
                 ['https://res.cloudinary.com/yungdenzel/image/upload/v1574581950/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash_p6a6e0.jpg',
                 'https://res.cloudinary.com/yungdenzel/image/upload/v1575050845/amala_xt6q2m.jpg',
                 'https://res.cloudinary.com/yungdenzel/image/upload/v1575051452/rice-n-jerk-2_oer4wh.jpg'
            ]}
       duration={6} transition={0} />
                          
       <Container text>
          < h1 className = "tc b white pb2 pt7 z-5" >
            What would you like to order today ?
          </h1>
          <form className="pb6 flex-l">
            <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter your delivery address" type="text"
              className = "form-control fl"
            />
            <input  type="submit" value="Find Food" className="fl ml2 bg-green white  mt3-m"/>
          </form>
        </Container>
       
      </div>
    );
  }
}

export default Welcome;
