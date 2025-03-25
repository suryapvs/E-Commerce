import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
    background-color: red;
    color: #eee;
`;

const content = (props) => {
  const [count,setCount] = useState(0);
  return (
    <>
      <HeaderStyle>{ props.body } Count is {count}</HeaderStyle>
      <button onClick={inCrease}>Increase</button>
      <button onClick={deCrease}>Decrease</button>
    </>
  )

  function inCrease() {
    console.log('Increase');
    setCount(count+1);
  }

  function deCrease() {
    console.log('Decrease');
    setCount(count-1);
  }


}


export default content
