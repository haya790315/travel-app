import React,{useState, useEffect} from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { useAuthContext } from "../../Contexts/AuthContext";
import { flatten } from "lodash";
import { useTravelDataContext } from "../../Contexts/TravelContext";
const CartWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 95%;
  top: 100px;
  margin: 0 25px;
  text-align: center;
  grid-gap: 1rem;
  background-color: #fff;
  display: grid;
  grid-template-areas:
    "header header"
    "left right";
  grid-template-columns: 70% 25%;
  grid-template-rows: 80px auto;
`;
const Title = styled.div`
  grid-area: header;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  color: #838383ec;
`;

const CartLeft = styled.div`
  grid-area: left;
  display: flex;
  flex-flow: column;
`;
const CartRight = styled.div`
  border: 1px solid #eeee;
  grid-area: right;
  grid-column: 2;
  max-height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  & p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ButtonStyled = styled.button`
  background-color: #3a3a3a;
  height: 70px;
  width: 90%;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:focus {
    opacity: 0.8;
  }
`;

const ItemsList = styled.ul`
  width: 90%;
  height: auto;
  border-radius: 5px;
  & li {
    list-style: none;
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #4b4b4bed;
    background-color: #fdf8c7eb;
  }
`;

const Cart = () => {

  const { travelData, isLoading } = useTravelDataContext();
  const { cart } = useAuthContext();
  const [cartItems,setCartItems] = useState([])
 
    useEffect (()=>{

      const travelDataFlatten = flatten(Object.values(travelData));
      
      const addedCart = flatten(cart.map((cartItem)=>{
        
      return travelDataFlatten.filter((travelItem) => cartItem.id===travelItem.id);
      }))

      setCartItems(addedCart);
    },[travelData,cart])
    
    

  

  if(isLoading){
    return <></>
  }
  
  
  return (
    <CartWrapper>
      <Title>カート</Title>
      <CartLeft>
      {cartItems.map((cartItem)=>{
            return <ItemCard cartItem={cartItem}/>
          })}
      </CartLeft>
      <CartRight>
        <span>購入ツーア</span>
        <ItemsList>
          {cartItems.map((cartItem)=>{
            return <li>{cartItem.title}</li>
          })}
        </ItemsList>
        <span>合計</span>
        <p>￥20000円</p> <ButtonStyled>購入手続きに進む</ButtonStyled>
      </CartRight>
    </CartWrapper>
  );
};

export default Cart;
