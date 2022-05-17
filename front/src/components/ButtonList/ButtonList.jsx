import React from "react";
import styled from "styled-components";
import ImageButton from "./ImageButton";
import { Link as Scroll } from "react-scroll";
import okinawaImg from "../../image/okinawa.jpg";
import hokkaidouImg from "../../image/hokkaidou.jpg";
import kyusyuuImg from "../../image/kyusyuu.jpg";
import sikokkuImg from "../../image/sikoku.jpg";
const ListWrapper = styled.div`
  width: 90%;
  left: 50%;
  margin: 0 auto;
  text-align: center;
`;
const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  height: auto;
  place-items: center;
`;

const Title = styled.h1`
  color: #494949;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 2rem;
`;


const ButtonList = () => {
  return (
    <ListWrapper id="buttonList-section">
      <Title id="top-page">国内ツアー 厳選情報</Title>
      <ImageWrapper>
        <Scroll to="okinawa-section" smooth={true} duration={600} offset={-80}>
          <ImageButton locate="沖縄" url={okinawaImg} />
        </Scroll>
        <Scroll
          to="hokkaidou-section"
          smooth={true}
          duration={1000}
          offset={-80}
        >
          <ImageButton locate="北海道" url={hokkaidouImg} />
        </Scroll>
        <Scroll
          to="kyusyuu-section"
          smooth={true}
          duration={1000}
          offset={-80}
        >
        <ImageButton locate="九州" url={kyusyuuImg} />
        </Scroll>

        <Scroll
          to="sikoku-section"
          smooth={true}
          duration={1000}
          offset={-80}
        >
        <ImageButton locate="四国" url={sikokkuImg} />
        </Scroll>
      </ImageWrapper>
    </ListWrapper>
  );
};

export default ButtonList;
