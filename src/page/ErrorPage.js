import React from "react";
import styled from "styled-components";

const DataNotCaughtError = styled.div`
  display: block;
  position: absolute;
  text-align: center;
  height: 100%;
  text-align: center;
  color: red;
  font-size: 2rem;
  left: 25%;
  top: 50%;
`;

const ErrorPage = () => {
  return (
    <DataNotCaughtError>
      <p>ページを再度読み込んでください</p>
    </DataNotCaughtError>
  );
};

export default ErrorPage;
