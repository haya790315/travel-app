import React, { useState } from "react";
import styled from "styled-components";
import SetAccountForm from "./SetAccountForm";
import SignUpCompletedCard from "./SignUpCompletedCard";
import UserInfoForm from "./UserInfoForm";

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1000px;
  background-color: #ffffff;
  animation: ${({ showCompleted }) =>
    showCompleted ? "fade-keyframes 2s forwards" : ""};

  @keyframes fade-keyframes {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
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
  const [showCompleted, setShowCompleted] = useState(false);
  const [formToggle, setFormToggle] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    account: "",
    password: "",
  });
  const setFormHandler = (userInfo) => {
    setForm(userInfo);
  };

  const formChangeHandler = () => {
    setFormToggle((prev) => !prev);
  };

  const formState = formToggle ?  (
    <SetAccountForm
      form={form}
      setFormHandler={setFormHandler}
      formChangeHandler={formChangeHandler}
      setShowCompleted={setShowCompleted}
    /> ):(
      <UserInfoForm
        form={form}
        setFormHandler={setFormHandler}
        formChangeHandler={formChangeHandler}
      />
    ) ;

  return (
    <>
      <FormWrapper showCompleted={showCompleted}>
        <Navbar>
          <Heading>新規登録</Heading>
        </Navbar>
        {formState}
      </FormWrapper>
      {showCompleted && <SignUpCompletedCard showCompleted={showCompleted} />}
    </>
  );
};

export default SignUpForm;
