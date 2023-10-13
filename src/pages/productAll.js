import React from 'react'
import {useState, useEffect} from'react'
import ProductCard from '../components/productCard'
import {Container, Row, Col} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {

  const [productList,setProductList]=useState([])
  const [query,setQuery]=useSearchParams();

  const getProducts = async () =>{
    let searchQuery=query.get('q') || ""; //쿼리가 없으면 빈문자열
    console.log("쿼리값은, ", searchQuery);
    let url = `https://my-json-server.typicode.com/itslitulinchpin2/hnm-shopping-frontend/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json()
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query])

  


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
