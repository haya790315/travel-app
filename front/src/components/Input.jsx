import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 1rem;
  min-width: 100px;
  height: 20px;
  border: 1px solid #eee;
  background: ${({ error, touch }) =>
    error && touch ? "#ff8282" : "transparent"};
  &:focus {
    outline: solid 2px #3894fd;
    background: transparent;
    border-radius: 2px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;

const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  validator,
  onChangeFunction,
  disabled,
}) => {
  const [touched, setTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validatorFunction = useCallback(() => {
    if (touched) {
      if (validator && validator()) {
        setErrorMessage(validator());
        return;
      }
    }
    setErrorMessage("");
  }, [touched, validator]);

  useEffect(() => {
    validatorFunction();
  }, [touched, validatorFunction]);

  const onChangeHandler = (e) => {
    onChangeFunction && onChangeFunction(e);
    validatorFunction();
  };

  return (
    <div>
      <StyledInput
        id={id}
        type={type}
        name={name}
        onChange={onChangeHandler}
        value={value}
        error={validator && validator()}
        onBlur={() => setTouched(true)}
        onFocus={() => setTouched(false)}
        touch={touched}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

export default Input;
