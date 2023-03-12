import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";



const Services = () => {

  const [nservices, setService]=useState([]);

  useEffect(()=>{

    fetch('services.json')
    .then((res) => res.json())
    .then((data) => setService(data))

  },[]);

  return(
    <section className="services-area ">

     
     <Container>
      
     <h1 className='mb-5 text-center'>Our Services</h1>

     <Row>
         
       
      
     
       {nservices.map((item)=>(<Service key={(item.id)} item={item}></Service>))}

     
       
         
     </Row>
     </Container>
   
   
         
    
     
    
   

     
   

    </section>

  )
}

export default Services;



