import React,{useState} from "react";
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
  const [message,setMessage] = useState()
  fetch("http://localhost:3001/api/error")
    .then((data) => data.json())
    .then((data) => setMessage(data.message));

  return (
    <DataNotCaughtError>
      <p>{message}</p>
    </DataNotCaughtError>
  );
};

export default ErrorPage;
