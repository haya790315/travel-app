import React from 'react'
import CardWrapper from "../../components/showCard/CardWrapper"
import styled from "styled-components"
import Slider from '../../components/slider/Slider'

function home() {
  
  const CardsContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    position: relative;

    @media screen and (max-width:900){
      
    }
    
  `
  
  
  
  return (
    <CardsContainer>
      <Slider/>
      <CardWrapper/>
    </CardsContainer>
  )
}

export default home
