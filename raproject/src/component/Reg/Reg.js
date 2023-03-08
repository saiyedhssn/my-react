
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

import './Reg.css'

const Reg = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = document.getElementById("mess-show")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if (error) {
       message.innerHTML=error;
      }
      if (loading) {
        message.innerHTML="Loading...";
      }
      if (user) {
        message.innerHTML="You are Registared Successfully";
      }

    return (
        <section className='form-area'>
     <Container>
     <h1 className='text-center'>Register Here</h1>
        <Row>
          <Col lg={{span:6, offset:3}}>

          <div className='signup-inner'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   
                    value={email} 
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} 
                    />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
                      value={password} 
                      placeholder="Password" 
                      onChange={(e) => setPassword(e.target.value)}
                      />
      </Form.Group>

      <div id='mess-show'></div>

      <p>
          Already User?
          <NavLink to="/signin" className="nav-link reg-link">Sign In Here</NavLink>
      </p>
    
      <Button variant="primary" type="submit" onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register 
      </Button>
          </div>
          </Col>
        </Row>
   
     </Container>
            
        </section>
    );
};

export default Reg;