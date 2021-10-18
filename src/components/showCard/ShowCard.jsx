import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { travelData } from "../../Data/data";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 20px;
  width: auto;
  height: auto;
  position: relative;
  padding: 40px;
  & h1 {
    position: absolute;
    font-size: 2rem;
    color: #cca8a8;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  margin: 60px auto;
  background-color: #7899f5;
  width: 100%;
  height: auto;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  bottom: 0;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function CardWrapper() {
  return (
    <>
      <Wrapper>
        <h1>沖縄</h1>
        <Container>
          <Card location={travelData.okinawa} />
        </Container>
      </Wrapper>

      <Wrapper>
        <h1>北海道</h1>
        <Container>
          <Card location={travelData.hokaidou} />
        </Container>
      </Wrapper>
    </>
  );
}

export default CardWrapper;
