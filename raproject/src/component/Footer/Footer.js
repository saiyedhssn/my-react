import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Footerlogo from '../../images/logo1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area text-light  pt-4'>
            <div className='footer-content'>
                <Container>
                    <Row>
                        <Col lg={12}>
                             <div className='footer1 text-center'>
                                  <img src={Footerlogo} alt=""/>
                                  <span>Jeyo</span>
                                 
                                   <h5>Find the time </h5>
                                   

                                
                            </div>
                        </Col>
                        
                    
                              
                               
                            
                    </Row>
                </Container>
            </div>


           
           <Container>
            <Row>
                <Col lg={12}>
                <div className='footer-bottom text-center pt-3'>
                <p>Jeyo is a brand of Outsource Experts Ltd. &copy; 2023 All rights reserved.</p>
            </div>
            
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Footer;