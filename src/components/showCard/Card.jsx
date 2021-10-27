import React from "react";
import styled from "styled-components";
import { FavoriteBorder ,Favorite} from "@mui/icons-material";
import {Link} from "react-router-dom"
import { useAuthContext} from "../../AuthContext";
const CardContainer = styled.div`
  height: 450px;
  width: 250px;
  box-shadow: 0px 0px 15px -5px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 10px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 15px 0px;
  }
`;
const Img = styled.img`
  overflow: hidden;
  object-fit: cover;
  height: 200px;
  width: 100%;
  
`;

const CardContent = styled.div`
  margin-top: 0.3rem;
`;
const CardTitle = styled.div`
  width: 95%;
  height: auto;
  font-size: 0.8rem;
  margin: 10px 15px;
  text-align: left;
  & h4 {
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }
  & span {
    font-size: 14px;
    color: #5c9df2;
  }
`;
const CardBody = styled.div`
  width: 100%;
  height: 80px;
  font-size: 0.9rem;
  padding: 10px 10px;
  color: #404040;
  text-align: left;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  & h4,
  span {
    color: #c52929;
    padding: 10px;
    font-size: 14px;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  border:none;
  outline: none;
  color:inherit;
  display: float;
`


const  Card = ({ location }) => {
  
  const auth = useAuthContext();
  
  return (
    <>
      {location.map(({ title, img, date, des, price, duration,id }) => {
        const heartAddedCondition = auth.heartAdded && auth.heartAdded.includes(id) ? <Favorite/> : <FavoriteBorder />
        
        return (
          <LinkStyled to={"/products/"+id} key={id}>
            <CardContainer >
              <CardTitle>
                <h4>{title}</h4>
                <span>{date}</span>
              </CardTitle>
              <div>
                <Img src={img} />
              </div>
              <CardContent>
                <CardBody>
                  <p>{des}</p>
                </CardBody>
              </CardContent>
              <CardFooter>
                <h4>{price}円</h4>
                <span>{duration}</span>
                <span>
                  {heartAddedCondition}
                </span>
              </CardFooter>
            </CardContainer>
          </LinkStyled>
        );
      })}
    </>
  );
}

export default Card;
