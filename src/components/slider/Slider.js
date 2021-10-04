import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
const ContainerSlider = styled.div`
  width: 90%;
  height: 300px;
  margin: 100px auto 0;
  position: relative;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 900px) {
    .container-slider {
      margin: 100px 10px 0;
    }
  }
`;
const Slide = styled.div`
  width: 95%;
  height: 95%;
  position: absolute;
  top: 0;
  left: 2.5%;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: opacity ease-in-out 0.7s;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
`;
const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

const KeyboardArrowRightIcon = styled(KeyboardArrowRight)`
  cursor: pointer;
  &:hover {
    transition: transform 0.6s ease-in-out;
    transform: translateX(20%);
  }
`;
const KeyboardArrowLeftIcon = styled(KeyboardArrowLeft)`
  cursor: pointer;
  &:hover {
    transition: transform  ease-in-out 0.6s;
    transform: translateX(-20%);
  }
`;

const ContainerDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #f1f1f1;
  margin: 0 5px;
  background: ${({ active }) => (active ? "#4e4e4e" : "#f1f1f1")};
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const imgData = [
    {
      id: 1,
      imgUrl: `${process.env.PUBLIC_URL}/slideImg/slide1.jpg`,
      des: "日帰り旅行特集",
    },
    {
      id: 2,
      imgUrl: `${process.env.PUBLIC_URL}/slideImg/slide2.jpg`,
      des: "紅葉特集",
    },
    {
      id: 3,
      imgUrl: `${process.env.PUBLIC_URL}/slideImg/slide3.jpg`,
      des: "国内旅行おすすめ",
    },
    {
      id: 4,
      imgUrl: `${process.env.PUBLIC_URL}/slideImg/slide4.jpg`,
      des: "国内外旅行",
    },
    {
      id: 5,
      imgUrl: `${process.env.PUBLIC_URL}/slideImg/slide5.jpg`,
      des: "年末年始・冬休み特集",
    },
  ];

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setSlideIndex((prev) => (prev !== imgData.length ? prev + 1 : 1));
    }, 5000);
    return () => clearTimeout(slideTimeout);
  }, [slideIndex, imgData.length]);

  const nextSlide = () => {
    if (slideIndex !== imgData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(imgData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index + 1);
  };

  return (
    <ContainerSlider>
      `
      {imgData.map((item, index) => {
        return (
          <Slide key={index} active={slideIndex === index + 1}>
            <Img src={item.imgUrl} alt={item.des} key={item.id} hove />
          </Slide>
        );
      })}
      <ButtonContainer hover>
        <KeyboardArrowLeftIcon onClick={prevSlide} />
        <span className="2">
          <KeyboardArrowRightIcon onClick={nextSlide} />
        </span>
      </ButtonContainer>
      <ContainerDots>
        {imgData.map((obj, index) => {
          return (
            <Dot
              key={index}
              onClick={() => {
                moveDot(index);
              }}
              active={slideIndex === index + 1}
            />
          );
        })}
      </ContainerDots>
    </ContainerSlider>
  );
}
