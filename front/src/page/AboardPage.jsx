import React from 'react'
import styled from "styled-components"
const Aboard = styled.div `
  margin: 0 auto;
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size: 4rem;
`
const AboardPage = () => {
  return (
    <Aboard>海外旅行ページ<br/>作成中</Aboard>
  )
}

export default AboardPage
