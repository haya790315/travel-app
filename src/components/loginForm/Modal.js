import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ModalStyled = styled.div`
  position: fixed;
  z-index: 30;
  height: 300px;
  width: 250px;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Backdrop = ({ closeLoginHandler }) => {
  return <BackdropStyle onClick={closeLoginHandler} />;
};

const LoginModal = (props) => {
  

  return (
    <ModalContainer>
      <ModalStyled
      >
        {props.children}
      </ModalStyled>
    </ModalContainer>
  );
};

const overlay = document.getElementById("overlay");

const Modal = ({ closeLoginHandler, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeLoginHandler={closeLoginHandler} />,
        overlay
      )}
      {ReactDOM.createPortal(<LoginModal>{children}</LoginModal>, overlay)}
    </>
  );
};

export default Modal;
