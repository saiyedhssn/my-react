import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Producta from '../../images/product1.png';

import Productc from '../../images/product3.png';
import Productd from '../../images/product4.png';

import Productf from '../../images/product6.png';
import Productg from '../../images/product7.png';
import Producth from '../../images/product8.png';
import Producti from '../../images/product9.png';
import './Product.css'

const Product = () => {
    return (
        <div className='product'>
            <Container>
                <div className="product-head py-5 text-center">
                <h1> With some Ecommerce products </h1>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="single-product">
                            <h4>Bussiness items</h4>
                            <img src={Producta} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product red">
                            <h4>Stylist shoes</h4>
                            <img src={Productg} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product green">
                            <h4>Ready products</h4>
                            <img src={Productc} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product purple">
                            <h4>Tree shirt</h4>
                            <img src={Productd} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product">
                            <h4>Best selling</h4>
                            <img src={Producta} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product chair">
                            <h4>New arrival</h4>
                            <img src={Productf} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product red">
                            <h4>Gurranted products</h4>
                            <img src={Productg} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product headphone">
                            <h4>Imported items</h4>
                            <img src={Producth} alt="product1"/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-product red">
                            <h4>Export quality</h4>
                            <img src={Producti} alt="product1"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Product;