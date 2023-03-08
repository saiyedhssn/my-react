import React from 'react';
import Home2 from '../Home2/Home2';
import Product from '../Product/Product';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Commontwo from '../Commontwo/Commontwo';
import Commonpart from '../Commonpart/Commonpart';
import Background from '../Background/Background';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import './Home.css';



const Home = () => {
    return (
        <div className='home-main'>
                 <Banner/> 
                 <Hero/>    
                 <Home2/>  
                 <Product/>
                 <Commontwo/>
                 <Commonpart/>
                 <Background/>
                 <Services/>
                 <Contact/>
             
          
           
         
        </div>
        
   
    );
};

export default Home;