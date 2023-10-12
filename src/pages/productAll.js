import React from 'react'
import {useState, useEffect} from'react'
import ProductCard from '../components/productCard'
import {Container, Row, Col} from "react-bootstrap"


const ProductAll = () => {

  const [productList,setProductList]=useState([])
  const getProducts = async () =>{
    
    let url = "http://localhost:5001/products"
    let response = await fetch(url);
    let data = await response.json()
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <Container>
        <Row >
          {productList.map(data=>
            <Col lg={3}>
              <ProductCard
              data={data}
              ></ProductCard>
            </Col>)}
          
          
          
        </Row>
      </Container>  

      
    </div>
  )
}

export default ProductAll;
