import React from "react";
import { TextField, Box } from "@mui/material";
import { FormControlUnstyled } from '@mui/base';
import useInput from "./use-input";
import styled from "styled-components";

const NextStepButton = styled.button`
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
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  &:hover {
    background: rgb(250, 205, 93);
  }
`;

const AccountInput = ({ toggleInputHandler, formEditHandler }) => {
  const { value, isValid, hasError, valueChangeHandler, inputIsTouched } =
    useInput((value)=>value.trim()!=="" && value.trim().length>=8);
  const label = hasError ? "アカウントを入力ください" : "アカウント";
  const nextButtonHandler = () => {
    toggleInputHandler();
    formEditHandler((prev) => ({ ...prev, account: value }));
  };

  return (
    <FormControlUnstyled>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "28ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label={label}
          size="small"
          onChange={valueChangeHandler}
          onBlur={inputIsTouched}
          autoFocus
          error={hasError}
          placeholder="メールアドレス"
        />
      </Box>
      <NextStepButton
        onClick={nextButtonHandler}
        type="button"
        disabled={!isValid}
      >
        次に進む
      </NextStepButton>
    </FormControlUnstyled>
  );
};

export default AccountInput;
