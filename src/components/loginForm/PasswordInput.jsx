import React,{useState} from "react";
import { Input, TextField, Box } from "@mui/material";
import { FormControlUnstyled } from "@mui/core";
import useInput from "./use-input";
import styled from "styled-components";
import {Link} from "react-router-dom"
const SubmitButton = styled.button`
  width: 300px;
  height: auto;
  background: linear-gradient(
    0deg,
    rgba(242, 201, 97, 1) 0%,
    rgba(245, 216, 143, 1) 55%
  );
  color: black;
  transform: translateX(8px);
  padding: 5px 10px;
  text-align: center;
  margin-top: 5px;
  outline: none;
  border: 1px solid #909090;
  cursor: pointer;
  opacity : ${({disabled})=>disabled?"0.5":"1"};
  &:hover {
    background: rgb(250, 205, 93);
  }
`;

const EmailIndicate = styled.div `
  width: 200px;
  font-size: 12px;
  color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  transform: translateX(8%);
  & p {
    font-size: 16px;
    font-weight:300;
  }
  & span {
    color:blue;
    margin-left:5px;
    cursor: pointer;
    &:hover{
      color:red;
    }
  }

`




const PasswordInput = ({toggleInputHandler,formEditHandler,editedForm}) => {
  const {value, isValid, hasError, valueChangeHandler, inputIsTouched } =
    useInput((value) => value.trim()!==""&& value.length >5);

  const label = hasError ? "パスワードが正しくありません": "パスワード";
  

  const submitButtonHandler = ()=>{

    formEditHandler((prev)=>({
      ...prev,password:value
    }))
    console.log(editedForm);
  }

  return (
    <FormControlUnstyled>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <EmailIndicate>
      <p>{editedForm.email}</p>
      <span onClick={toggleInputHandler}>変更</span>
        </EmailIndicate>
      <TextField
        required
        label={label}
        size="small"
        onChange={valueChangeHandler}
        onBlur={inputIsTouched}
        autoFocus
        error={hasError}
        type="password"
        placeholder="パスワード"
      />
      {/* <Input autoFocus/> */}
    </Box>
    <SubmitButton  disabled={!isValid} type="button" onClick={submitButtonHandler} >次に進む</SubmitButton>
  </FormControlUnstyled>
  )
}

export default PasswordInput
