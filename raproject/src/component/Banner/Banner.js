import Carousel from 'react-bootstrap/Carousel';

import banner1 from "../../images/about1.jpg"
import banner2 from "../../images/about2.jpg"
import banner3 from "../../images/about3.jpg"
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () =>{

    return (
        
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Let me Know you About us </h3>
            <h2>Weeding photography & event management </h2>
            <p> we know Path will come through and deliver consistent, quality imagery every time..</p>
            <NavLink to="/about"> <Button variant="secondary">More Info</Button>{' '}</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h3>Our coperative programme </h3>
            <h2>Ecommerce bussiness products exposing.</h2>
            <p> we know Path will come through and deliver consistent, quality imagery every time..</p>
            <NavLink to="/about"> <Button variant="secondary">More Info</Button>{' '}</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>Enhance your bussiness </h3>
            <h2>We’re able to photograph all of our products .</h2>
            <p> we know Path will come through and deliver consistent, quality imagery every time..</p>

            <NavLink to="/about"> <Button variant="secondary">More Info</Button>{' '}</NavLink>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    );
    
}

export default Banner;