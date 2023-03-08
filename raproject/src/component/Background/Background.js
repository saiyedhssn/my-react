import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './Background.css'

const Background = () => {
    return (
        <div className='sec-bg'>
            <Container>
                <Row>
                    <div className='inner-bg'>
                        <Col lg={12}>
                            <div className="heading-bg text-center text-light">

                            <h1>You don’t have to do everything yourself</h1>
                            <p>The amount of pictures we’re able to get back in such a short amount of time is one of the things we absolutely love about Path. We’re able to photograph all of our products and submit for editing in the same evening</p>

                            </div>
                        
                        </Col>
                    </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default Background;