import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from "../Input";

const FormContainer = styled.div`
  display: flex;
  position: absolute;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 71%;
  min-width: 600px;
  height: 600px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  overflow: hidden;
`;

const FormHeading = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f4f0;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  align-items: end;
  font-size: 1.2rem;
  justify-content: flex-start;
  & p {
    font-weight: 600;
    margin-left: 10px;
  }
`;

const FormContent = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  margin: 100px 0;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & span {
    font-size: 1rem;
  }
`;
const FormInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border-bottom: 2px solid #d4d4d4;
  font-size: 2rem;
`;

const Label = styled.label`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
`;

const MustSpan = styled.span`
  background-color: red;
  padding: 1px 4px;
  color: #fff;
  border-radius: 1px;
  margin-left: 21px;
  outline: red;
`;

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormButton = styled.button`
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(
    330deg,
    rgba(9, 0, 158, 1) 0%,
    rgba(108, 108, 182, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
  white-space: nowrap;
  padding: 10px 24px;
  color: #fff;
  text-align: center;
  font-size: "20px";
  outline: none;
  cursor: pointer;
  border: none;
  margin: 20px 10px 0 0;
`;

const SetAccountForm = ({
  form,
  setFormHandler,
  formChangeHandler,
  setShowCompleted,
}) => {
  const [accountChecker, setAccountChecker] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");

  const onChangeFunction = (name) => {
    return (e) => {
      setFormHandler((prev) => {
        return { ...prev, [name]: e.target.value };
      });
    };
  };

  const accountValidator = () => {
    if (form.account.length < 8) return "8文字以上を入力ください";
  };

  const passwordValidator = () => {
    if (form.password.length < 5) return "8文字以上を入力ください";
  };

  const checkAccountValidator = () => {
    if (accountChecker !== form.account) return "一致しません";
  };

  const checkPasswordValidator = () => {
    if (passwordChecker !== form.password) return "一致しません";
  };

  const submitButtonDisabledHandler = () => {
    if (accountChecker && passwordChecker) {
      return (
        accountChecker !== form.account || passwordChecker !== form.password
      );
    } else {
      return false;
    }
  };

  const submitHandler = () => {
    let storageArray = [];
    if (localStorage.getItem("user")) {
      const storage = JSON.parse(localStorage.getItem("user"));
      storageArray = [...storage, form];
      localStorage.setItem("user", JSON.stringify(storageArray));
    } else {
      storageArray.push(form);
      localStorage.setItem("user", JSON.stringify(storageArray));
    }
    setShowCompleted(true);
  };

  return (
    <FormContainer>
      <FormHeading>
        <RiLockPasswordLine />
        <p>アカウント / パスワード</p>
      </FormHeading>
      <FormContent >
        <FormInputs>
          <Label htmlFor="account">
            <span>アカウント</span>
            <MustSpan>必須</MustSpan>
          </Label>
          <Input
            type="text"
            id="account"
            name="account"
            placeholder="英数8文字以上"
            value={form.account}
            validator={accountValidator}
            onChangeFunction={onChangeFunction("account")}
            disabled={false}
          />
          <Label htmlFor="account-check">
            <span>アカウント</span>
            <MustSpan>確認</MustSpan>
          </Label>
          <Input
            type="text"
            id="account-check"
            name="account-check"
            disabled={!!accountValidator()}
            validator={checkAccountValidator}
            onChangeFunction={(e) => setAccountChecker(e.target.value)}
            placeholder="もう一度ご入力ください"
          />
        </FormInputs>
        <FormInputs>
          <Label htmlFor="password">
            <span>パスワード</span>
            <MustSpan>必須</MustSpan>
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="英数8文字以上"
            name="password"
            value={form.password}
            validator={passwordValidator}
            onChangeFunction={onChangeFunction("password")}
            disabled={false}
          />
          <Label htmlFor="password-check">
            <span>パスワード</span>
            <MustSpan>確認</MustSpan>
          </Label>
          <Input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="もう一度ご入力ください"
            disabled={!!passwordValidator()}
            validator={checkPasswordValidator}
            onChangeFunction={(e) => setPasswordChecker(e.target.value)}
          />
        </FormInputs>
        <FormButtonsContainer>
          <FormButton
            type="button"
            onClick={(prev) => formChangeHandler(!prev)}
          >
            <IoIosArrowBack />
            戻る
          </FormButton>
          <FormButton
            type="button"
            onClick={submitHandler}
            disabled={submitButtonDisabledHandler()}
          >
            登録する
            <IoIosArrowForward />
          </FormButton>
        </FormButtonsContainer>
      </FormContent>
    </FormContainer>
  );
};

export default SetAccountForm;
