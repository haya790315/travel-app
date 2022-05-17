import React from "react";
import styled from "styled-components";
import okinawa from "../../image/okinawa.jpg";


const ImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
  }

  & span {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 700;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    color: #fff;
  }
`;

const Image = styled.div`
  background: url(${({url})=>(url)}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: 0.5s all ease-out;
  &:hover {
    transition: 0.5s all ease-in;
    transform: scale(1.2);
    &::before {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 19;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(231, 231, 231, 0.103) 0%,
        rgba(119, 119, 119, 0.4) 29%,
        rgba(35, 35, 35, 0.8) 100%
      );
    }
  }
`;

const ImageButton = ({locate,url}) => {
  return (
    <>
        <ImageContainer >
          <span>{locate}</span>
          <Image url={url}/>
        </ImageContainer>
    </>
  );
};

export default ImageButton;
