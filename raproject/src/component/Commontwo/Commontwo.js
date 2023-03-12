import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
// import Workphoto from "../../images/work.png";
// import {AiFillBulb } from "react-icons/ai";

import './Commontwo.css';

const Commontwo = () => {
    return (
        <div className="main-common">


            <div className='common'>
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h1 className='text-center common-head pb-5'>Customers' Feedback</h1>
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

                {/* <div className='common-sec2'>


               <Container>
                <Row>
                    <Col lg={6}>
                       <h3>How it Works</h3>
                        <div className='com-content pt-5'>
                               
                           <div className='com-icon d-flex align-items-center pb-4'>
                           <AiFillBulb/>
                           <li>Request a quote for the images you need edited — we’ll get back to you within 45 minutes </li> 
                           </div>
                            
                           <div className='com-icon d-flex align-items-center pb-4'>
                           <AiFillBulb/>
                           <li>Approve your quote and give us the green light to get started </li> 
                           </div>
                            
                           <div className='com-icon d-flex align-items-center pb-4'>
                           <AiFillBulb/>
                           <li>Upload your images, and then let us do the rest </li> 
                           </div>
                            
                          
                            
                           
                           
                        </div>
                       
                    </Col>
                    <Col lg={6}>
                        <div className="com-img text-end">
                            <img src={Workphoto} alt="work"/>

                        </div>

                    </Col>
                   
                </Row>
            </Container>


               </div>
               */}
           

        </div> 
      
            
         
    );
};

export default Commontwo;