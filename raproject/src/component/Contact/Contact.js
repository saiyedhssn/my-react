import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-area '>
            <Container>
                <h1 className='text-center py-4'>Contact Us</h1>
                <Row>

                    <Col lg={{span:6, offset:3}}>
                        <div className='contact-inner'>
    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

    
     
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                        </div>

                    </Col>
                </Row>
            </Container>
            
            
        </div>
    );
};

export default Contact;