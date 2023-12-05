// LandingPage.js
import React from 'react';
import './LandingPage.css';
import ShahmirImage from '../../Assets/ShahmirWFCU.jpg';
import { Container, Col, Row } from 'reactstrap';

function LandingPage() {
  return (
    <div className="landing-container">
        <Container>
            <Row>

                <Col className='col-6'>
                    <h1>Welcome To My Portfolio Website! My name is Muhammad Masood :) I am a Software Developer</h1>

                </Col>
                <Col className='col-6'>

                    <img src={ShahmirImage} alt="Portfolio" className="portfolio-image"/>
                    {/* You can add more content here */}
                </Col>
            </Row>

        </Container>
    </div>
  );
}

export default LandingPage;
