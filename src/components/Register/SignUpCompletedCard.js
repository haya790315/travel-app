import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import {Redirect} from "react-router-dom"

const CardContainer  = styled.div `
  position: fixed;
  bottom:0;
  margin: 0 auto;
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #9e9e9eed;
  border:1px solid #ffff;
  border-radius: 10px;
  transform: ${({open})=>open ? "translateY(0)" : "translateY(100%)"};
  animation:  ${({open})=>open ? "fadeIn-keyframes 1s linear" : ""};
  @keyframes fadeIn-keyframes {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform:translateY(0);
    }
  }

`
const Heading = styled.h1 `
  font-size: 20px;
  font-weight:600;
  color: #ffff;
`
const ChangePageTitle = styled.p`
  color:#ffffff;
  font-size: 16px;
  margin-top: 5px;
  & span{
    font-size: 18px;
    color: #7bf363;
  }
`

const SignUpCompletedCard = ({open}) => {
  const [countDownNumber,setCountDownNumber] =useState(6)

  useEffect(() => {
    const pageCountDown = setInterval(()=>{
      setCountDownNumber(prev=>prev-1)
    },1000)
    return () => {
    clearInterval(pageCountDown)
    }
  }, [])

  if(countDownNumber<0){
    return <Redirect to="/home"/>
  }
  
  return (
    <CardContainer open={open}>
      <Heading>
        登録が完了しました
      </Heading>
      <ChangePageTitle><span>{countDownNumber}</span>秒以後ホームページに移動されます</ChangePageTitle>
    </CardContainer>
  )
}

export default SignUpCompletedCard
