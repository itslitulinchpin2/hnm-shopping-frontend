import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({data}) => {
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/product/${data.id}`)
  }
  return (
    <div className="card" onClick={showDetail}>
        <img src={data&& data.img}/>
        <div>{data && data.title}</div>
        <div>{data && data.price}원</div>
        <div>{(data && data.new) ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
