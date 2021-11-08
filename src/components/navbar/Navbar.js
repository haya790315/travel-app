import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import {
  TravelExplore,
  DirectionsCar,
  HomeWork,
  YouTube,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext";
const Nav = styled.nav`
  width: 100%;
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin-right: 60px;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
const Button = styled.button`
  border-radius: 15px;
  background: linear-gradient(
    330deg,
    rgba(9, 0, 158, 1) 0%,
    rgba(108, 108, 182, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
  white-space: nowrap;
  padding: 12px 60px;
  color: #fff;
  font-size: "20px";
  outline: none;
  cursor: pointer;
  border: none;
  opacity: 0.9;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: translateY(10%);
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    &:hover {
      transform: none;
    }
  }
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  clip-path: polygon(85% 0, 100% 51%, 85% 100%, 0% 100%, 0 48%, 0% 0%);

  & span {
    background: linear-gradient(
      90deg,
      rgba(9, 0, 158, 1) 0%,
      rgba(135, 77, 153, 1) 23%,
      rgba(221, 148, 129, 1) 49%,
      rgba(255, 175, 74, 1) 72%,
      rgba(255, 85, 51, 1) 100%
    );
    background-size: 200% auto;
    transition: 0.3s;
    &:hover {
      background-position: right center;
    }
  }
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-130%")};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: #101522;
  }
`;

const NavIconContainer = styled.div`
  display: flex;
  height: 100%;
  color: #fff;
  align-items: end;
  justify-content: space-evenly;

  @media screen and (max-width: 900px) {
    display: inline-block;
    margin-top: 50px;
  }
`;

const NavIcons = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    & a {
      text-decoration: none;
      margin: 5px;
      color: #fff;
      &:hover {
        color: #eeee;
      }
    }
  }
`;

const NavIconLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  margin-left: 5px;

  &:hover {
    color: #eee;
  }
`;

const NavItem = styled.li`
  height: 80px;

  &:hover {
    transform: translateY(15%);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    &:hover {
      /* border: none; */
      transform: none;
      color: #4b59f7;
    }
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 900px) {
    text-align: center;
    padding: 2rem;
    display: block;
    width: 100%;
    &:hover {
      color: #4b59f7;
    }
  }
`;

const UserButton = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

const UserStyled = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px dashed white;
  background-color: #236fb6;
  color: #fff;
  text-align: center;
  word-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;
const DragDownMenu = styled.ul`
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 100px;
  height: 200px;
  background-color: #e2e2e2;
  clip-path: polygon(
    70% 0,
    70% 12%,
    100% 12%,
    100% 100%,
    68% 100%,
    32% 100%,
    0 100%,
    0 12%,
    50% 12%
  );
  border-radius: 5px;
  left: ${(left) => left}px;
  top: ${(top) => top}px;
  transform: translate(-60%, -5%);
  opacity: ${({ show }) => (show ? "0.9" : "0")};
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    left: 70%;
    top: 40%;
    background: transparent;
  }
`;
const DragMenuLink = styled(Link)`
  height: 40px;
  width: 100%;
  font-weight: 700;
  align-items: center;
  cursor: pointer;
  color: #2299dd;
  text-decoration: none;
  &:hover {
    background-color: #fff;
    color: #4d4d4d;
    border-bottom: 2px solid black;
  }
  
`;

const CartLinkStyled = styled(Link)`
  text-decoration: none;
  color: #eee;
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  &::before {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    transform: translate(-110%, 100%);
    position: absolute;
  }
  &:hover {
    color: #fff;
  }
  & h2 {
    transform: translate(-15%, 40%);
    text-align: center;
  }
  & p {
    display: inline-block;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Navbar = ({ openLoginHandler }) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [showDragMenu, setShowDragMenu] = useState(false);
  const [dragMenuPosition, setDragMenuPosition] = useState({});
  const { loggedIn, firstName, lastName, setLoggedIn, setUserInInfo,cart} =  useAuthContext();
  
  
  const ins = "https://about.instagram.com/ja-jp";
  const fb = "https://www.facebook.com/";
  const yt = "https://www.youtube.com/";
  
  const toggleMenuHandler = () => {
    setSideMenu((prevState) => !prevState);
  };
  
  const loginButtonHandler = () => {
    setSideMenu(false);
    openLoginHandler();
    toggleMenuHandler();
  };
  
  
  const logoutButtonHandler = () => {
    setLoggedIn(false);
    setUserInInfo({});
    
  };



  const dragDownMenuHandler = () => {
    const userElement = document.getElementById("user_section");
    const userElementRect = userElement.getBoundingClientRect();
    const dragMenuTop = userElementRect.bottom;
    const dragMenuLeft = (userElementRect.right + userElementRect.left) / 2;
    const dragMenuRight = userElementRect.left;
    setDragMenuPosition({
      top: dragMenuTop,
      left: dragMenuLeft,
      right: dragMenuRight,
    });
  };

  const onMouseEnterEvent = () => {
    dragDownMenuHandler();
    setShowDragMenu(true);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home">
            <Logo src={logo} /> <span>Travel To</span>
          </NavLogo>
          <MobileIcon onClick={toggleMenuHandler}>
            {sideMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={sideMenu}>
            <NavItem onClick={toggleMenuHandler}>
              <NavLinks to="/home">
                <DirectionsCar style={{ marginRight: "5px" }} />
                国内旅行
              </NavLinks>
            </NavItem>
            <NavItem onClick={toggleMenuHandler}>
              <NavLinks to="/aboard">
                <TravelExplore style={{ marginRight: "5px" }} />
                海外旅行
              </NavLinks>
            </NavItem>
            <NavItem onClick={toggleMenuHandler}>
              <NavLinks to="/reservation">
                <HomeWork style={{ marginRight: "5px" }} />
                宿泊予約
              </NavLinks>
            </NavItem>

            <UserButton onClick={toggleMenuHandler}>
              {!loggedIn ? (
                <Button onClick={loginButtonHandler}>ログイン</Button>
              ) : (
                <>
                  <UserStyled
                    onMouseEnter={onMouseEnterEvent}
                    onMouseLeave={() => setShowDragMenu(false)}
                    id="user_section"
                  >
                    {firstName + lastName}
                    <DragDownMenu
                      show={showDragMenu}
                      top={dragMenuPosition.top}
                      left={dragMenuPosition.left}
                      right={dragMenuPosition.right}
                    >
                      <DragMenuLink to="/">会員情報</DragMenuLink>
                      <DragMenuLink to="/cart-page">カート</DragMenuLink>
                      <DragMenuLink to="/">ツアー日程</DragMenuLink>
                      <DragMenuLink to="/home" onClick={logoutButtonHandler}>
                        ログアウト
                      </DragMenuLink>
                    </DragDownMenu>
                  </UserStyled>
                </>
              )}
            </UserButton>
            <NavIconContainer onClick={toggleMenuHandler}>
              {!loggedIn ? (
                
                  <NavIconLink to="/sign-up">新規登録</NavIconLink>
                
              ) : (
                <CartLinkStyled to="/cart-page">
                  <h2>{cart.length}</h2> <ShoppingCartOutlined fontSize="large" />
                  <p>カート</p>
                </CartLinkStyled>
              )}
              <NavIcons>
                <a href={ins} rel="noreferrer" target="_blank">
                  <AiFillInstagram />
                </a>
                <a href={fb} rel="noreferrer" target="_blank">
                  <AiFillFacebook />
                </a>
                <a href={yt} rel="noreferrer " target="_blank">
                  <YouTube />
                </a>
              </NavIcons>
            </NavIconContainer>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
