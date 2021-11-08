import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { flatten } from "lodash";
import CircularProgress from "@mui/material/CircularProgress";
import { BiHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useAuthContext } from "../../Contexts/AuthContext";
import { useTravelDataContext } from "../../Contexts/TravelContext";
import {useNavigate} from "react-router-dom"
import setNewUserInformation from "../../Hook/useSetNewUserInformation";

const Img = styled.div`
  background: url("https://www.his-j.com/fair/autumn/kanto/assets/common/images/bnr_autumn960.jpg")
    no-repeat;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  &:hover {
    transition: all 0.5s;
    transform: scale(1.1);
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  display: block;
  height: 100px;
  width: 1000px;
  top: 20%;
  left: 8%;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    width: 450px;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 90%;
  height: 50vh;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
`;

const Heading = styled.p`
  position: relative;
  font-size: 24px;
  top: 0;
  font-weight: 700;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.5px dotted black;
  border-left-style: none;
  border-right-style: none;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #5f61f3;
  word-wrap: normal;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const Button = styled.button`
  width: 250px;
  font-size: ${({ bg }) => (bg ? "1.2rem" : "0.8rem")};
  border-radius: 3px;
  margin-bottom: 20px;
  background-color: ${({ bg }) => (bg ? "#fca966" : "#a7fc66")};
  box-shadow: 0px 14px 11px -9px #000000;
  padding: ${({ bg }) => (bg ? "1rem 0" : "0.2rem 0")};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;

const StarButton = styled(Button)`
  background-color: #eeee;
`;

const DescriptionLeft = styled.div`
  flex: 2;
  margin-bottom: 15px;
  & h4 {
    color: #4d43db;
  }
  & input {
    outline: solid 2px #3894fd;
    background: transparent;
    border-radius: 2px;
    border: none;
    color: #3894fd;
    cursor: pointer;
  }
`;

const MoneyPartStyled = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fcf9d6;
  padding: 2rem 1rem;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    font-size: 24px;
    color: red;
  }
  & span {
    font-size: 20px;
  }
`;

const DescriptionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  `;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;

const Detail = ({openLoginHandler}) => {
  const [loading, setLoading] = useState(true);
  const [heartAdded, setHeartAdded] = useState(false);
  const [date, setDate] = useState();
  const [people, setPeople] = useState(2);
  const userContext = useAuthContext();
  const travelDataContext = useTravelDataContext();
  const detailParams = useParams();
  const [travelData, setTravelData] = useState({});
  
  
  const navigate = useNavigate();
  
  
  

  const handleHeartList = () => {
    if (
      userContext.heartAdded &&
      userContext.heartAdded.includes(`${detailParams.number}`)
    ) {
      setHeartAdded(true);
    }
  };
  
  // const setNewUserInformation = () => {
  //   const users = JSON.parse(localStorage.getItem("user"));
  //   const newUsers = users.map((user) => {
  //     const {
  //       account,
  //       password,
  //       birthday,
  //       email,
  //       firstName,
  //       gender,
  //       lastName,
  //       heartAdded,
  //       cart,
  //     } = userContext;
  //     if (user.account === userContext.account) {
  //       return {
  //         account,
  //         password,
  //         birthday,
  //         email,
  //         firstName,
  //         gender,
  //         lastName,
  //         heartAdded,
  //         cart,
  //       };
  //     } else {
  //       return user;
  //     }
  //   });
  //   localStorage.setItem("user", JSON.stringify(newUsers));
  // };
  

  
  useEffect(() => {
    setTravelData(travelDataContext.travelData);
    setLoading(travelDataContext.isLoading);
    handleHeartList();
  }, []);

  const dataDetail = flatten(Object.values(travelData));
  const data = dataDetail.find((item) => item.id === detailParams.number);

  const cartAddButtonHandler = () => {
    if (!userContext.loggedIn){
      openLoginHandler(true)
    } else{
      const prevCart = userContext.cart.filter((item) => item.id !== data.id);
      
      userContext.setUserInInfo ({...userContext,cart:[...prevCart,{ id: data.id, date: date, people: people }]})
      
      
      navigate("/cart-page")
    }
  };

  const heartAddButtonHandler = () => {
    if (!userContext.loggedIn) {
      openLoginHandler(true);

    }else{

      if (userContext.heartAdded) {
        userContext.heartAdded.push(`${data.id}`);
      } else {
        userContext.heartAdded = [`${data.id}`];
      }
      setHeartAdded(true);
      setNewUserInformation(userContext);
    }
  };

  const heartDeleteButtonHandler = () => {
    if (!userContext.loggedIn) return;

    const newHeartList = userContext.heartAdded.filter(
      (item) => item !== data.id
    );
    userContext.heartAdded = newHeartList;
    setNewUserInformation(userContext);
    setHeartAdded(false);
  };

  const heartButtonCondition = heartAdded ? (
    <StarButton
      onClick={() => {
        heartDeleteButtonHandler();
      }}
    >
      <FaHeart />
    </StarButton>
  ) : (
    <StarButton
      onClick={() => {
        heartAddButtonHandler();
      }}
    >
      お気に入り登録
      <BiHeart style={{ marginLeft: "10px" }} />
    </StarButton>
  );

  if (loading)
    return (
      <Container>
        <Spinner>
          <CircularProgress />
        </Spinner>
      </Container>
    );

  return (
    <>
      <ImgContainer>
        <Img></Img>
      </ImgContainer>
      <Container>
        <Heading>お問い合わせ番号:{data.id}</Heading>
        <Content>
          <Title>{data.title}</Title>
          <Description>
            <DescriptionLeft>
              <div>
                <h4>【出発日】</h4>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <h4>【人数】</h4>
                <input
                  type="number"
                  max="4"
                  min="1"
                  onChange={(e) => setPeople(e.target.value)}
                  value={people}
                />{" "}
                人
              </div>
              <MoneyPartStyled>
                <span>大人1名様</span> <p>旅行代金 {data.price}</p>
              </MoneyPartStyled>
            </DescriptionLeft>
            <DescriptionRight>
              <Button bg>空室確認</Button>
              <Button onClick={cartAddButtonHandler}>
                ショッピングカートに入れます
              </Button>
              {heartButtonCondition}
            </DescriptionRight>
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default Detail;
