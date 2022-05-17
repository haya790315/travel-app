import React from "react";
import styled from "styled-components";
import Video from "./Video";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #eee;

  &:before {
    content: "";
    z-index: 8;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(165, 165, 165, 0.5);
    top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  z-index: 9;
  color: #fff;
  width: 70%;
  margin-top: 50px;
  margin-left: 20px;
  display: block;
  opacity: 0.8;
  
  & h1 {
    font-size: 4em;
    font-weight: 700;
    line-height: 75px;
    margin-bottom: 40px;
    &:after{
      content: '';
      margin-top: 10px;
      display: block;
      width: 20%;
      height: 2px;
      position: absolute;
      background-color: #dfdfdf;
      border-radius: 5px;

    }
  }

  & span {
    margin-bottom: 65px;
    font-size: 3rem;
  }
`;

const PreHomeWrapper = () => {
  return (
    <Wrapper>
        <Video />
      <Content>
        <h1>
          ワンダフル
        </h1>
          <span>ジャパン</span>
      </Content>
    </Wrapper>
  );
};

export default PreHomeWrapper;
