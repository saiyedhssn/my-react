import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import photoleft from '../../images/photo.webp';
import './Home2.css';


const Home2 = () => {
    return (
        <div className="home-part2 ">
            <Container>
            <Row className="section-2 align-items-center">
                    <Col lg={6}>
                        <div className='sec-left'>
                        <img src={photoleft} alt=""/>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <div className='sec-right'>
                        <h2>We’re your assitance in weeding and conference programme aranging  and design studio</h2>
                        <h3>With the services for ecommerce businesses and pros, from product photographers to Amazon sellers to global brands.</h3>
                        <p>Because a quick product shoot can easily turn into a week or more of editing and formatting your images. Let us look after the edits, so you can get back to the work that needs you.</p>
                    </div>
                    </Col>
                    

                </Row>
            </Container> 

            
        </div>
    );
};

export default Home2;