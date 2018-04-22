import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Jumbotron,Grid,Row,Col,Image,Button,Well,Carousel} from 'react-bootstrap';
import './home.css';

class home extends Component {

  render() {
    const dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
  ];
    return (
      <div class="container">
        <Grid>
      <div  align="centre">
        <br />
        <br />
        <br />
        <br />
        <Carousel>
          <Carousel.Item>
            <Image align="centre" className="header-image" src="assets/clinicaldatamanagement.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Image  align="centre" className="header-image" src="assets/clinicaldatamanagement.jpg" />
          </Carousel.Item>
        </Carousel>
        <br />
<div full-width>
<Jumbotron >
<h2>WHY CHOOSE US?</h2>
<p>
<Grid>
  <Row className="show-grid">
    <Col sm={12} md={3}>
      <br />
      <Image  align="centre" src="assets/1.jpg"  thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/3.jpg"thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/6.jpg"thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/4.jpg"thumbnail/>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col sm={12} md={3}>
      <br />
      <Image  align="centre" src="assets/10.jpg"  thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/7.jpg"thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/8.jpg"thumbnail/>
    </Col>
    <Col sm={6} md={3}>
      <br />
  <Image  align="centre" src="assets/4.jpg"thumbnail/>
    </Col>
  </Row>
</Grid>
</p>
</Jumbotron>
<div>
        <br />
  <Grid>
    <Row>

      <Col sm={12} md={6}>
        <h2>About Us</h2>
         <br />
         {dummySentences.slice(0, 10).join(' ')}
       </Col>
       <Col sm={12} md={6}>
         <Image  align="centre" src="assets/g.jpg"/>
       </Col>
    </Row>
    <Row>
            <br />
      <div class="col-centered">
      <Well >
      <h2 align="center">Cost Effectiveness Analysis</h2>
      <h3 align="center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h3>
      <p>
      <Grid>
        <Row>
        <Col sm={12} md={3}>
          <br />
            <h2 align="center">First</h2>
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h4>
        </Col>

        <Col sm={6} md={3}>
          <br />
            <h2 align="center">Second</h2>
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h4>
        </Col>
        <Col sm={6} md={3}>
          <br />
            <h2 align="center">Third</h2>
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h4>
        </Col>
        <Col sm={6} md={3}>
          <br />
            <h2 align="center">Forth</h2>
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit </h4>
        </Col>
      </Row>
      </Grid>
      </p>
  </Well>
      </div>
    </Row>
  </Grid>
  <Carousel>
    <Carousel.Item>
    </Carousel.Item>
    <Image  align="centre" className="header-image" src="assets/come.png" />
    <Carousel.Item>
<Image align="centre" className="header-image" src="assets/come.png" />
  </Carousel.Item>
  </Carousel>
</div>
</div>
</div>
 </Grid>
</div>

    );
  }
}

export default home;
