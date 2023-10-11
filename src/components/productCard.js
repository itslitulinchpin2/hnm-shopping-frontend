import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
        <img src={data&& data.img}/>
        <div>{data && data.title}</div>
        <div>{data && data.price}원</div>
        <div>{(data && data.new) ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
