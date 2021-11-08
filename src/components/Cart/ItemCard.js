import React from "react";
import styled from "styled-components";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleIcon from '@mui/icons-material/People';
import { useAuthContext } from "../../Contexts/AuthContext";
import {useNavigate} from "react-router-dom"

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
  box-sizing: border-box;
  overflow: hidden;
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

const TravelId = styled.div`
  position: absolute;
    float: right;
    text-align: center;
    background-color:#fffce0eb ;
  width: 90px;
  color:#000000;
  font-weight: 600;
  font-size: 0.9rem;
`



const ItemCard = ({cartItem,deleteButtonHandler}) => {
  const {id,img,title,price} = cartItem;
  
  const authContext = useAuthContext();
  
  const {date,people} = authContext.cart.find(item=>item.id===id);

  const navigate = useNavigate();
  
  const editButtonHandler = ()=>{
    navigate(`/products/${id}`)
  }

  let  totalPrice = Number(price)*people;
  
  
  return (
    <CardWrapper key={id}>
      <ItemImg src={img}></ItemImg>
      <Main>
        <Title><FlightTakeoffIcon style={{marginRight:"5px"}}/>{title}</Title>
        <Date><EventAvailableIcon style={{marginRight:"5px"}}/>{date}</Date>
        <Member><PeopleIcon style={{marginRight:"5px"}}/>{people}</Member>
        <Price>￥{totalPrice}</Price>
      </Main>
      <RightSection>
      <ButtonStyled onClick={editButtonHandler}>変更<div/></ButtonStyled>
      <ButtonStyled onClick={()=>deleteButtonHandler(id)}>削除<div/></ButtonStyled>
      <ButtonStyled>詳細<div/></ButtonStyled>

      </RightSection>
      <TravelId>番号:{id}</TravelId>
    </CardWrapper>
  );
};

export default ItemCard;
