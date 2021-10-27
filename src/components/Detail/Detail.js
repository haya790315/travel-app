import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { flatten } from "lodash";
import { projectFirestore } from "../../firebase/config";
import CircularProgress from "@mui/material/CircularProgress";
import { BiHeart } from "react-icons/bi";
import {FaHeart} from "react-icons/fa"
import { useAuthContext } from "../../AuthContext";

const Img = styled.div`
  background: url("https://www.his-j.com/fair/autumn/kanto/assets/common/images/bnr_autumn960.jpg") no-repeat;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  &:hover{ 
    transition: all .5s;
    transform: scale(1.1);
  }
`;

const ImgContainer = styled.div `
  position: absolute;
  display: block;
  height: 100px;
  width: 1000px;
  top: 20%;
  left: 8%;
  overflow: hidden;
  @media screen and (max-width:900px){
    width: 450px;
    
  }
`

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
  background-color: ${({ bg }) => (bg ? "#FF9501" : "#75B346")};
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

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [heartAdded, setHeartAdded] = useState(false);
  const userContext = useAuthContext();
  const detailParams = useParams();

  const [travelData, setTravelData] = useState({});

  const fetchTravelData = async () => {
    const doc = await projectFirestore
      .collection("travelPlans")
      .doc("SSbyibFF1shnfxz38lDT")
      .get();
    if (doc.data().travelData) {
      setTravelData(doc.data().travelData);
      setLoading(false);
    }
  };

  const heartList = () => {
    if (userContext.heartAdded && userContext.heartAdded.includes(`${detailParams.number}`)) {
      setHeartAdded(true);
    }
  };

  const setNewUserInformation = () => {
    const users = JSON.parse(localStorage.getItem("user"));
    const newUsers = users.map((user) => {
      const {
        account,
        password,
        birthday,
        email,
        firstName,
        gender,
        lastName,
        heartAdded,
      } = userContext;
      if (user.account === userContext.account) {
        return {
          account,
          password,
          birthday,
          email,
          firstName,
          gender,
          lastName,
          heartAdded,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem("user", JSON.stringify(newUsers));
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetchTravelData()
    } catch (error) {
      setLoading(false);
    }
    heartList();
  }, []);

  const dataDetail = flatten(Object.values(travelData));

  const data = dataDetail.find((item) => {
    if (item.id === detailParams.number) {
      return item;
    }
  });

  const heartAddButtonHandler = () => {
    if(!userContext.account) return
    if (userContext.heartAdded) {
      userContext.heartAdded.push(`${data.id}`);
    } else {
      userContext.heartAdded = [`${data.id}`];
    }
    setHeartAdded(true);
    setNewUserInformation();
  };

  const heartDeleteButtonHandler = () => {
    if(!userContext.account) return

    const newHeartList = userContext.heartAdded.filter(
      (item) => item !== data.id
    );
    userContext.heartAdded = newHeartList;
    setNewUserInformation();
    setHeartAdded(false);
  };

  const heartButtonCondition = heartAdded ? (
    <StarButton
      onClick={() => {
        heartDeleteButtonHandler();
      }}
    >
      <FaHeart/>
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
      <Img ></Img>
      </ImgContainer>
      <Container>
        <Heading>お問い合わせ番号:{data.id}</Heading>
        <Content>
          <Title>{data.title}</Title>
          <Description>
            <DescriptionLeft>
              <span>
                <h4>【出発日】</h4>
                {data.date} <h4>【人数】</h4> 2名1室
              </span>
              <MoneyPartStyled>
                <span>大人1名様</span> <p>旅行代金 {data.price}</p>
              </MoneyPartStyled>
            </DescriptionLeft>
            <DescriptionRight>
              <Button bg>空室確認</Button>
              <Button>ショッピングカートに入れます</Button>
              {heartButtonCondition}
            </DescriptionRight>
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default Detail;
