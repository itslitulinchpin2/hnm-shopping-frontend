import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  let {id} = useParams();
  const [product,setProduct]=useState(null);

  const getProductDetail = async () =>{
    let url = `https:my-json-server.typicode.com/itslitulinchpin2/hnm-shopping-frontend/products/${id}`
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
    setProduct(data);
    
  }
  
  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product&&product.img}></img>
        </Col>
        <Col>
          <div>
            {product&&product.title}
          </div>
          <div>
            {product&&product.price}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
