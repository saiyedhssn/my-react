import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Aboutphotoleft from '../../images/aboutphoto.jpg'
import Aboutphotoright from '../../images/aboutphoto2.jpg'
import About3 from '../../images/aboutsec3.jpg'
import Man1 from '../../images/man1.jpg';
import Man2 from '../../images/man2.jpg';
import Man3 from '../../images/man1.jpg';
import Background from '../Background/Background';
import './About.css';


const About = () => {
    return (
       
        <div className='about-area'>
             
              <Background/> 

             
             <div className="about">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='about-head text-center'>
                               <h1>Why ecommerce entrepreneurs and photographers outsource their clipping path projects to Path</h1>
                               <p>Your talent and creative energy is best spent on doing what you love — not fiddling in Photoshop for hours figuring out tedious edits.</p>
                            </div>
                        
                        </Col>

                    </Row>
                 
                </Container>
             </div>





             <div className='img-text'>

                 <Container>
             
                    <Row>
                         <Col lg={6}>

                           <div className='single-about d-flex align-items-center'>
                           <div className='about-img'>
                           <img src={Aboutphotoleft} alt=""/>
                            </div>

                          <div className='about-text'>
                               <h4>31,593</h4>
                               <p>customers have trusted us with their image edits.</p>
                          </div>

                   </div>
                  </Col>


                  <Col lg={6}>

                    <div className='single-about d-flex align-items-center'>
                        <div className='about-img'>
                           <img src={Aboutphotoright} alt=""/>
                         </div>
                         <div className='about-text'>
                           <h4>31,593</h4>
                           <p>customers have trusted us with their image edits.</p>
                         </div>
                   </div>
                  </Col>
                  </Row>
               
                  </Container>
                 </div>


                 <div className='about-sec3'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                               <div className='sec3-head'>

                               <div className='sec3-img' >
                                <img src={About3} alt=""/>

                               </div>
                               <div className='sec3-text'>
                                <h6> We don’t use automated software here. Every clipping path is carefully done by hand. We’re not finished until every item of clothing and accessory appears natural, and the colors and textures look just right.</h6>
                               </div>

                               </div>

                            </Col>
                        </Row>
                    </Container>

                 </div>

                 <div className='about-sec4'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='sec4-text text-center'>

                                    <h1>How to know if outsourced clipping path services are right for you</h1>
                                    <p>You don't have to do everything yourself. Outsourced clipping path services are ideal if you are ...</p>

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
                                        <h6><span>A freelancer or agency  </span>with tight client deadlines and tons of other deliverables to wrangle</h6>
                                    </div>
                                   </div>
                                </Col>
                                <Col lg={4}>
                                   <div className='sec4-middle'>
                                   <div className='sec4-img'>
                                        <img src={Man3} alt=""/>
                                    </div>
                                    <div className='sec4-text'>
                                        <h6><span>An ecommerce retailer who wants </span> to use their time to move the needle instead of fiddling around in Photoshop</h6>
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

export default About;