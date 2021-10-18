import React from "react";
import styled from "styled-components";
import {Slider,ShowCard} from "../components";

function home() {
  const CardsContainer = styled.div`
    height: auto;
    width: 100%;
    margin: 100px auto;
    position: relative;
    
  
  `;

  return (
    <CardsContainer>
        <Slider />
      <ShowCard />
    </CardsContainer>
  );
}

export default home;
