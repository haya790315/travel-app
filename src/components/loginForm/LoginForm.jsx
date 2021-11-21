import React, { useState } from "react";
import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";
import EmailInput from "./AccountInput";
import PasswordInput from "./PasswordInput";
import Modal from "./Modal";
import { GrFormClose } from "react-icons/gr";

const openModal = keyframes`
  0%{
    opacity:0;
    transform: translate(-50%, -180%);

  }
  50%{
    opacity:0.3;
    transform: translate(-50%, -70%);

  }
  
  100%{
    opacity:0.7;
    transform: translate(-50%, -50%);
  }
`


const FormContainer = styled.div`
  position: absolute;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 250px;
  min-width: 400px;
  background: #fff;
  margin: auto auto;
  border: 1.2px solid #e2e2e2;
  border-radius: 4px;
  animation: ${openModal} 0.5s  linear  ;
`;

const GrFormCloseStyled = styled(GrFormClose)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 10px;
  margin-left: 40px;
`;

const LoginFormContainer = styled.form`
  position: absolute;
  top: 50%;
  transform: translate(10%, -50%);
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const SeparateLine = styled.div`
  position: absolute;
  text-align: center;
  left: 38%;
  color: #7a7a7a;
  &:after {
    position: absolute;
    top: 63%;
    left: 146%;
    height: 1px;
    background: #dadada;
    content: "";
    width: 131px;
    display: block;
  }
  &:before {
    position: absolute;
    content: "";
    width: 131px;
    display: block;
    height: 1px;
    background: #dadada;
    top: 63%;
    right: 169%;
  }
`;

const SignUpButton = styled.button`
  width: 300px;
  height: auto;
  background: #e7e7e7;
  font-weight: 600;
  transform: translateX(8px);
  padding: 5px 10px;
  text-align: center;
  margin-top: 30px;
  outline: none;
  border: 1px solid #909090;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};

  &:hover {
    background: rgb(168, 168, 168);
  }
`;

const SignUpPageLink = styled(Link)`
  color: black;
  text-decoration: none;
`;






const LoginForm = ({ closeLoginHandler }) => {
  const [accountIsEntered, setAccountIsEntered] = useState(false);
  const [form, setForm] = useState({
    account: "",
    password: "",
  });

  const toggleInputHandler = () => {
    setAccountIsEntered(!accountIsEntered);
  };

  const formEditHandler = (value) => {
        setForm(value);
  };

  const signUpButtonHandler = () => {
    closeLoginHandler();
  };
  return (
    <Modal closeLoginHandler={closeLoginHandler}>
        <FormContainer>
          <Heading>ログイン</Heading>
          <GrFormCloseStyled onClick={closeLoginHandler} />
          <LoginFormContainer>
            {accountIsEntered ? (
              <PasswordInput
                editedForm={form}
                toggleInputHandler={toggleInputHandler}
                formEditHandler={formEditHandler}
                closeLoginHandler={closeLoginHandler}
              />
            ) : (
              <EmailInput
                toggleInputHandler={toggleInputHandler}
                formEditHandler={formEditHandler}
              />
            )}
            <SeparateLine>or</SeparateLine>
            <SignUpPageLink to="/sign-up">
              <SignUpButton onClick={signUpButtonHandler}>
                アカウントを作成する
              </SignUpButton>
            </SignUpPageLink>
          </LoginFormContainer>
        </FormContainer>
    </Modal>
  );
};

export default LoginForm;
