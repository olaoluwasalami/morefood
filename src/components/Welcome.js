import React, {Component} from 'react';
import { Container} from "semantic-ui-react";
import BackgroundSlider from "react-background-slider";
import search from '../icon/search.png';
import delivery from '../icon/delivery.png';
import food from '../icon/food.png';
import order from '../icon/order.png';
import pin from '../icon/pin.png';
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
            <input ref={this.autocompleteInput} id="autocomplete" placeholder=" Enter your delivery address" type="text"
              className = " b--light-blue form-control fl input[type=text]"
            />
            <input  type="submit" value="Find Food" className="fl ml2 bg-green white  mt3-m"/>
          </form>
        </Container>
         <div>
    <div className="justify-center-l" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex list justify-center-l  justify-center-m helvetica  pa3-ns pa5-m">
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


      </div>
    );
  }
}

export default Welcome;
