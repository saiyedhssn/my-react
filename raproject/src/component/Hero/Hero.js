import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import hmimg from '../../images/undo11.png';
import {NavLink} from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className='home-hero'>
          <Container>
                <Row className='align-items-center section-1'>
                    <Col lg={6}>
                  <div className='home-left'>
                    <h1 >Perfect project to start up a bussiness <span>product photos</span> </h1>
                    <h3 >We are here to give you in the most complex <span className='yello'>supportive programme </span></h3>
                    <p>Get a perfect bussiness plan to help you with our services, whenever you need them. services for ecommerce businesses. </p>
                   <NavLink to="/blog"> <Button variant="danger">Learn More</Button></NavLink>
                  </div>
                    </Col>
                    <Col lg={6}>
                        <div className='img-div'>
                            <img src={hmimg} alt="hmimg"/>
                        </div>
                    </Col>
                </Row >
              
            </Container> 
         </div>
            
        </div>
    );
};

export default Hero;