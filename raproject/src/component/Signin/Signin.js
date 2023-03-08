
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

import './Signin.css'

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = document.getElementById("mess-show")

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error) {
       message.innerHTML=error;
      }
      if (loading) {
        message.innerHTML="Loading...";
      }
      if (user) {
        message.innerHTML="You are Sign In Successfully";
      }

    return (
        <section className='signinform-area'>
          <Container>
            <h1 className='text-center'>Sign In Here</h1>
   
       <Row>
        <Col lg={{span:6, offset:3}}>

            <div className='signin-inner'>


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
          New User?
          <NavLink to="/reg" className="nav-link reg-link">Registration Here</NavLink>
      </p>
      
    
      
     
      <Button variant="primary" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In 
      </Button>

            </div>

 
        </Col>
       </Row>
   
     </Container>
            
        </section>
    );
};

export default Signin;