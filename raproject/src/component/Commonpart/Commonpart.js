import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Man1 from '../../images/man1.jpg';
import Man2 from '../../images/man2.jpg';
import Man3 from '../../images/man1.jpg';
import './Commonpart.css'

const Commonpart = () => {
    return (
        <div>

               <div className='about-sec4'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='sec4-text text-center'>

                                    <h1>How to know know proper bussiness policy to apply </h1>
                                    <p>You don't have to do everything yourself. Outsourced services are ideal if you are ...</p>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div className='sec4-man pb-5'>
                        <Container>
                            <Row>
                                <Col lg={4}>
                                   <div className='sec4-middle'>
                                     <div className='sec4-img'>
                                        <img src={Man1} alt=""/>
                                     </div>
                                    <div className='sec4-text'>
                                        <h6><span>A busy professional photographer </span>with batches of edits due from a recent product photoshoot</h6>
                                    </div>
                                   </div>
                                </Col>
                                <Col lg={4}>
                                   <div className='sec4-middle'>
                                   <div className='sec4-img'>
                                        <img src={Man2} alt=""/>
                                    </div>
                                    <div className='sec4-text'>
                                        <h6><span>A professional agency  </span>with tight client deadlines and tons of other deliverables to wrangle</h6>
                                    </div>
                                   </div>
                                </Col>
                                <Col lg={4}>
                                   <div className='sec4-middle'>
                                   <div className='sec4-img'>
                                        <img src={Man3} alt=""/>
                                    </div>
                                    <div className='sec4-text'>
                                        <h6><span>An ecommerce retailer who wants </span> to use their time to move the needle instead of fiddling.</h6>
                                    </div>
                                   </div>
                                </Col>
                                
                            </Row>
                        </Container>
                    </div>

                 </div>

        </div>
    );
};

export default Commonpart;