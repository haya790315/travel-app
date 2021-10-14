import React from "react";
import styled from "styled-components";
import { MemberInformationForm } from "./Form";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1000px;
  background-color: #ffffff;
`;

const Navbar = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  width: 100vw;
  height: 60px;
  background-color: #d8d8d8;
  font-size: 1rem;
  color: blue;
`;
const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 200px;
  font-size: 2rem;
  color: #6d6d6d;

  &:before {
    content: "";
    width: 5px;
    height: 31px;
    background-color: blue;
    display: block;
    position: absolute;
    top: 15%;
    right: 100%;
    margin-right: 12px;
  }
`;

const SignUpForm = () => {
  return (
    <Wrapper>
      <Navbar>
        <Heading>新規登録</Heading>
      </Navbar>
      <MemberInformationForm />
    </Wrapper>
  );
};

export default SignUpForm;
