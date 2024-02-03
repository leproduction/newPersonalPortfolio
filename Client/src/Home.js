import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import NavBarComponent from './Component/NavBar.js';
import FooterPage from './Component/Footer.js';
import ProgressiveBar from './Component/ProgressBar.js';
import ContactEmer from './Component/Contact.js';
import emailPromotionImage from './emailPromotion.png';
import checkOutImage from './checkOutCart.png';
import reviewImage from './reviewPage.png';

import { motion } from 'framer-motion';
import LandingPage from './LandingPage.js';

function Home() {

  return (
    <Container fluid align="center" className=" flex shadow px-5 py-1 rounded " style={{ background: 'rgba(189,195,199, 0.8)' }}>
      <Row>
        <NavBarComponent />
      </Row>
      <Row style={{ background: 'rgba(189,195,199, 0.3)' }} sm={1} md={1} className=" shadow mx-0 flex rounded">
      <Row className='d-flex justify-content-center align-items-center rounded mx-0'>

<script async src="https://cse.google.com/cse.js?cx=f7f7f82bdfba84775"></script>
<div style={{ background: 'rgba(189,195,199, 0.3)' }}   className="gcse-search"></div>



</Row>


      </Row>
      <Row style={{ background: 'rgba(189,195,199, 0.3)' }} sm={1} md={1} className=" shadow mx-0 my-1 p-1 flex rounded gap-1">
          <Row className='d-flex justify-content-center align-items-center rounded mx-0'>
          <h3>Hello! My name is Hau Le.</h3>
          <h5>I am a Web Developer</h5>


          </Row>
          </Row>

      <Container fluid className="d-flex justify-content-center align-items-center flex-wrap my-2">
        <Row style={{ background: 'rgba(189,195,199, 0.3)' }} align="center" xs={1} md={3} className=" shadow rounded my-1 p-1 ">
          <Col className="mx-auto">
          <motion.div whileHover={{ scale: 1.25 }}>
            <Card className='border border-light shadow p-1'>
              <a style={{ textDecoration: 'none' }} href="https://reviewpage2023.web.app/">
                {' '}
                <Card.Img  variant="top" src={reviewImage} />{' '}
              </a>
              <Card.Body>
                <Card.Title>Review Page</Card.Title>
                <Card.Text>Spearheaded the design and development of a dynamic business webpage dedicated to showcasing customer reviews</Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
          </Col>

          <Col className="mx-auto">
          <motion.div whileHover={{ scale: 1.25 }}>
            <Card  className='border border-light shadow p-1'>
              <a style={{ textDecoration: 'none' }} href="https://emailpromotionnow.vercel.app/">
                <Card.Img variant="top" src={emailPromotionImage} />
              </a>
              <Card.Body>
                <Card.Title>Email Promotion</Card.Title>
                <Card.Text className='my-1'>Led the end-to-end development of a comprehensive promotional business webpage</Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
          </Col>

          <Col className="mx-auto">
          <motion.div whileHover={{ scale: 1.25 }}>
            <Card  className='border border-light shadow p-1'>
              <a style={{ textDecoration: 'none' }} href="https://checkoutpage-blush.vercel.app/">
                <Card.Img  variant="top" src={checkOutImage} />
              </a>
              <Card.Body>
                <Card.Title>E-commerce Store</Card.Title>
                <Card.Text className='my-2'>Developed a single-page checkout website, streamlining the user's journey</Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <ProgressiveBar />

      <LandingPage/>

      <ContactEmer />
      <FooterPage />

    </Container>
  );
}

export default Home;
