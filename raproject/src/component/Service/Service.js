import React from 'react';

import Col from 'react-bootstrap/esm/Col';



import './Service.css'

const Service = ({item}) => {
    return (
      
                          
                         <Col lg={4}>
                            <div className='single-service text-center '>
                                   <img src={item.image} className="w-50 mb-2"/>
                                   <h4>{item.title}</h4>
         
                                 <p>{item.description}</p>
                               
                               </div>
                         
                         </Col>
 
            
       
    );
};

export default Service;