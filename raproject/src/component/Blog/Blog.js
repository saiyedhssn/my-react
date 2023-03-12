import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import './Blog.css'

const Blog = ({blogg}) => {
    return (
        
            <Col lg={4}>
            
            <img w-50 src={blogg.img} alt="blog-img"/>
            <h4>{blogg.heading}</h4>
            <p>{blogg.para}</p>
            </Col>
            
       
    );
};

export default Blog;