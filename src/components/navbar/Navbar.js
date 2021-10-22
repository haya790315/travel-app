import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import {
  TravelExplore,
  DirectionsCar,
  HomeWork,
  YouTube,
} from "@mui/icons-material";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
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
    width: 100vh;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
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
    align-items: end;
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

const NavItemBtn = styled.li`
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
  border:2px dashed white;
  background-color: #236fb6;
  color:#fff;
  text-align: center;
  word-wrap:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LogoutStyled = styled.p`
  color:#fff;
  font-size: 16px;
  margin-left: 10px ;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #eeee;
  }
` 


const Navbar = ({ openLoginHandler }) => {
  const [sideMenu, setSideMenu] = useState(false);
  
  
  const {loggedIn , firstName,lastName,setLoggedIn,setUserInInfo}  = useAuthContext();
  const ins = "https://about.instagram.com/ja-jp";
  const fb = "https://www.facebook.com/";
  const yt = "https://www.youtube.com/";

  const toggleMenuHandler = () => {
    setSideMenu((prevState) => !prevState);
  };

  const loginButtonHandler = ()=>{
    setSideMenu(false);
    openLoginHandler();
  }

  const logoutButtonHandler = ()=>{
    setLoggedIn(false);
    setUserInInfo({});
  }
  
  

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

            <NavItemBtn>
              {!loggedIn ?<Button onClick={loginButtonHandler}>ログイン</Button>:<UserStyled >{firstName+lastName}</UserStyled>}
            </NavItemBtn>
            <NavIconContainer>
              {!loggedIn ?<NavIconLink to="sign-up">新規登録</NavIconLink>: <LogoutStyled onClick={logoutButtonHandler}>ログアウト</LogoutStyled>}
              <NavIcons>
                <a href={ins} rel="noreferrer" target="_blank">
                  <AiFillInstagram />
                </a>
                <a href={fb} rel="noreferrer" target="_blank">
                  <AiFillFacebook />
                </a>
                <a href={yt}>
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
