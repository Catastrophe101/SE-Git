import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './home.css';

class home extends Component {
  render() {
  /*  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    */
    return (
    /*  <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      */
      <div>
        <Grid>
      <div  align="centre"><Image  align="centre" src="assets/clinicaldatamanagement.jpg" className="header-image" />

<Jumbotron>
<h2>WHY CHOOSE US?</h2>
</Jumbotron>

</div>
 </Grid>
</div>
    );
  }
}

export default home;
