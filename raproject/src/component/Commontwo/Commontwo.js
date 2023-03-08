import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Workphoto from '../../images/work.png'
import './Commontwo.css';

const Commontwo = () => {
    return (
        <div className="main-common">


            <div className='common'>
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h1 className='text-center common-head'>Customers' Feedback</h1>
                        </Col>
                    </Row>
                    <Row>
                      
                        <Col lg={{span:6, offset:6}}>
                            <div className='common-textContent'>
                                 <h4>Getting my images edited by Path was an enjoyable and efficient experience. Your team was very responsive and pleasant throughout. I'm happy with the result and will be using your services again. “I'm so impressed by your dedication to learning. I know it wasn't easy when that technology solution you presented didn't work out.</h4>
                                <h5>Heman suti</h5>
                                <p>United State</p>
                        </div>
                        </Col>
                   

                    </Row>
                </Container>
           
            
                  

            </div>

               <div className='common-sec2'>


               <Container>
                <Row>
                    <Col lg={6}>
                        <div className='com-content'>

                            <h3>How it Works</h3>
                            <li>Request a quote for the images you need edited — we’ll get back to you within 45 minutes</li>
                            <li>Approve your quote and give us the green light to get started</li>
                            <li>Upload your images, and then let us do the rest</li>
                            <div className='content-button'><Button className="btn">Check out our process</Button></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="com-img">
                            <img src={Workphoto} alt=""/>

                        </div>

                    </Col>
                   
                </Row>
            </Container>


               </div>
             
           

        </div> 
      
            
         
    );
};

export default Commontwo;