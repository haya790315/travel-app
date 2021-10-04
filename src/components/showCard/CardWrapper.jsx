import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 60px;
  
  margin-top: 50px;
  width: 100%;
  height: 500px;
  position: relative;
  & h1 {
    position: absolute;
    font-size: 2rem;
    color: #cca8a8;
    top:0;
    left: 0;
  }
  @media screen and (max-width:900px){
    
  }

  `;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,250px);
  position: absolute;
  margin: 60px auto;
  background-color: #FAF3F0;
  width: 90%;
  height: auto;
  gap: 2rem;
  justify-content: center;
  align-content: center;
  bottom: 0;
`;

function CardWrapper() {
  return (
    <>
      <Wrapper>
          <h1>北海道</h1>
        <Container>
          <Card />
          <Card />
        </Container>
      </Wrapper>
      <Wrapper>
          <h1>北海道</h1>
        <Container>
          <Card />
          <Card />
        </Container>
      </Wrapper><Wrapper>
          <h1>北海道</h1>
        <Container>
          <Card />
          <Card />
        </Container>
      </Wrapper><Wrapper>
          <h1>北海道</h1>
        <Container>
          <Card />
          <Card />
        </Container>
      </Wrapper>
    </>
  );
}

export default CardWrapper;
