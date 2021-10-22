import React from "react";
import styled from "styled-components";
import { Slider, ShowCard } from "../components";
import {useAuthContext} from "../AuthContext"
const CardsContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 100px auto;
  position: relative;
`;
function Home() {
  return (
    <CardsContainer>
      <Slider />
      <ShowCard />
    </CardsContainer>
  );
}

export default Home;
