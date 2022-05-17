import React from 'react'
import styled from "styled-components"
const Reservation = styled.div `
  margin: 0 auto;
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size: 4rem;
`


const ReservationPage = () => {
  return (
    
      <Reservation>予約ページ<br/>作成中</Reservation>
    
  )
}

export default ReservationPage
