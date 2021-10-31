import React from "react";
import styled from "styled-components";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleIcon from '@mui/icons-material/People';
const CardWrapper = styled.div`
  display: flex;
  border: 1px solid #eeee;
  margin-bottom: 20px;
`;

const ItemImg = styled.img`
height: 160px;
width: 160px;
object-fit: cover;
  flex:1;
`;

const Main = styled.div `
background-color: #fffce0eb;
flex:3;

`;

const Title = styled.div `
font-size:24px;
color:#6d6fe6;
margin-bottom: 10px;
margin-left: 5px;

`;

const Price = styled.div `
  font-size: 1.2rem;
  color: red;
  margin-bottom: 10px;

`;

const Date = styled.div `
  font-size: 1.2rem;
  color: blueviolet;
margin-bottom: 10px;
margin-left: 5px;

`;

const Member = styled.div`
  font-size: 1.2rem;
  color:black;
  margin-left: 5px;
`;

const RightSection = styled.div `
  flex:1;

`


const ButtonStyled = styled.div`
  flex:1;
  text-align: center;
  width:100%;
  background-color:#fdfdfdeb;
  padding:8px 10px;
  outline:none;
  text-decoration:none;
  opacity:0.7;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover{
    & div:after{
      content: "";
      height: 2px;
      width:50px;
      background-color: #cacacaed;
      display: block;
      margin: 0 auto;
      border-radius: 50%;

    }
    opacity:1;
    outline: 2px solid khaki;

  }


`;


const ItemCard = () => {
  return (
    <CardWrapper>
      <ItemImg src="https://static-buyma-com.akamaized.net/imgdata/item/200308/0052169644/397569464/210.jpg"></ItemImg>
      <Main>
        <Title><FlightTakeoffIcon style={{marginRight:"5px"}}/>沖縄旅</Title>
        <Price>￥12000円</Price>
        <Date><EventAvailableIcon style={{marginRight:"5px"}}/>2021/12/16</Date>
        <Member><PeopleIcon style={{marginRight:"5px"}}/>3人</Member>
      </Main>
      <RightSection>
      <ButtonStyled>変更<div/></ButtonStyled>
      <ButtonStyled>削除<div/></ButtonStyled>
      <ButtonStyled>詳細<div/></ButtonStyled>

      </RightSection>
    </CardWrapper>
  );
};

export default ItemCard;
