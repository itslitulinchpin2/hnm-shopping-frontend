import React from 'react'
import {useState, useEffect} from'react'
import ProductCard from '../components/productCard'
import {Container, Row, Col} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'
//객체를 가져올때는 {}를 써야함.
import { productAction } from '../redux/actions/productAction'
import { useDispatch,useSelector } from 'react-redux'

const ProductAll = () => {

  const dispatch = useDispatch();

  const productList=useSelector((state)=>state.product.productList)
  const [query,setQuery]=useSearchParams();
  
  const getProducts = async () =>{
    let searchQuery=query.get('q') || ""; //쿼리가 없으면 빈문자열
    console.log("쿼리값은, ", searchQuery);
    
    //dispatch가 action을 던져 바로 리듀서로 가지 않고,
    //미들웨어를 거치도록 해야한다. 비동기 처리를 위함.
    dispatch(productAction.getProducts(searchQuery));

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
