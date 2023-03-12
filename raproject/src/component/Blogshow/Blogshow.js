import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Blog from '../Blog/Blog';
import Bloghero from '../../images/bloghero.png';
import Button from 'react-bootstrap/esm/Button';
import './Blogshow.css'


const Blogshow = () => {
    const [blog, setblog]=useState([]);
    useEffect(()=>{

        fetch('blog.json')
        .then((res) => res.json())
        .then((data) => setblog(data))
    
      },[]);

    return (
        <div className='blogshow'>


             <div className='blog-hero py-5 '>
                <Container>
                    <Row className=' align-items-center'>
                        <Col lg={6}>
                           <div className='blog-hero-left'>
                           <h2>We publish here all update of us </h2>
                            <h5>Let us look after the edits, so you can get back to the work that needs you. </h5>
                            <p>Approve your quote and give us the green light to get started. Because a quick product shoot can easily turn into a week or more</p>
                            <Button className='btn'>More blog</Button>
                           </div>
                        </Col>
                        
                        <Col lg={6}>
                             <div className='blog-hero-right'>
                                <img src={Bloghero} alt="blog-hero"/>
                             </div>
                        </Col>
                    </Row>
                </Container>

             </div>

           <div className='blog-json'>

           <Container>
                <h1>Recent Blogs </h1>
                <Row>
                    

                    {blog.map((blogg)=>(<Blog key={(blogg.id)} blogg={blogg}></Blog>))}

                    
                   
                </Row>
            </Container>


           </div>

            <div className='blogshow-text'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='blog-text text-center'>
                            <h2>Compare to all of those</h2>
                            <p>Realistic shadows add depth to product photography. But sometimes the lighting isn’t right in the photograph, or you’re removing the background to show off your products, and you need to add shadows after the fact. That’s where shadow making services come in.

Done well, these shadows make your products look more appealing to customers, even when the effect is subtle. Especially when you’re showcasing your products against a white background, shadows will help make your products pop — instead of looking flat and lifeless.

Shadows also help when you need to distinguish your product from the background (a white dress against a white background, for example), and with creating a consistent look across all of your product images</p>

                            </div>
                           
                        </Col>
                    </Row>
                </Container>

            </div>
            
        
         
       
         
  
           
       
        </div>
    );
};

export default Blogshow;