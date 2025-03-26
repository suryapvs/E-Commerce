import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from './productItem';

const HeaderStyle = styled.h1`
    background-color: red;
    color: #eee;
`;

const content = (props) => {
  const [count,setCount] = useState(0);
  const [product,setProduct] = useState({name:"Samsung",price:8000})
  return (
    <>
      <HeaderStyle>{ props.body } Count is {count}</HeaderStyle>
      <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>Increase</button>
      <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>Decrease</button>
      <ProductItem product={product}/>
    </>
  )

}

export default content
