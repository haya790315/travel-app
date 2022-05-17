import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slider, ShowCard, ButtonList } from "../components";
import { Link as BackToTop } from "react-scroll";
const CardsContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 100px auto;
  position: relative;
`;
const PageTop = styled.div`
  width: 35px;
  height: 35px;
  position: fixed;
  cursor: pointer;
  right: 10px;
  bottom: 5px;
  background: #52a5f8;
  opacity: 0.6;
  border-radius: 50%;
  z-index: 10;
  border: 2px solid #b6b6b6;
  transform: ${({ buttonShow }) =>
    buttonShow ? "translateY(0)" : "translateY(150%)"};
  transition: ease-in transform 0.5s;
  & p {
    position: relative;
    display: block;
    width: 35px;
    height: 35px;
    text-decoration: none;
    transition: all 0.2s ease-out;
  }
  & p::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f102";
    font-size: 25px;
    color: #fff;
    position: absolute;
    width: 25px;
    height: 25px;
    top: -5px;
    bottom: 0;
    right: 2px;
    left: 0;
    margin: auto;
    text-align: center;
  }
  &:hover {
    opacity: 0.8;
    p {
      transform: translateY(-10%);
    }
  }
`;

function Home() {
  const [buttonShow, setButtonShow] = useState(false);

  
  const handleButtonShow = () => {
    const buttonElement = document.getElementById("buttonList-section");
    if (!buttonElement)   return;
    const buttonElementBottom = buttonElement.getBoundingClientRect().bottom;
    if (buttonElementBottom < 50) {
      setButtonShow(true);
    } else {
      setButtonShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleButtonShow);
    return () => {
      document.removeEventListener("scroll", handleButtonShow);
    };
  }, []);

  return (
    <>
      <Slider />
      <ButtonList />
      <BackToTop to="top-page" duration={1000} offset={-100} smooth={true}>
        <PageTop id="top-button" buttonShow={buttonShow}>
          <p/>
        </PageTop>
      </BackToTop>
      <CardsContainer>
        <ShowCard />
      </CardsContainer>
    </>
  );
}

export default Home;
