import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { travelData } from "../../Data/data";
import {flatten} from "lodash"

const Img = styled.img``;

const Container = styled.div`
  position: absolute;
  width: 90%;
  height: 50vh;
  top: 200px;
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

const Detail = () => {
  const detailParams = useParams();

  let dataDetail = flatten(Object.values(travelData))
  
  const data = dataDetail.find((item)=>{
    if(item.id===detailParams.number){
      return item;
    }
  })

  
  
  console.log(dataDetail)
  
  return (
    <>
      <Img></Img>
      <Container>
        <Heading>お問い合わせ番号:{detailParams.number}</Heading>
        <Content>
          <Title>{data.title}</Title>
          <Description>
            <DescriptionLeft>
              <span>【出発日】 2021/11/05 ～ 2022/03/24【人数】 2名1室</span>
              <MoneyPartStyled>
                <span>大人1名様</span> <p>旅行代金 56,800円 ～ 124,800円</p>
              </MoneyPartStyled>
            </DescriptionLeft>
            <DescriptionRight>
              <Button bg>空室確認</Button>
              <Button>マイページログイン・会員登録</Button>
              <StarButton>お気に入り登録</StarButton>
            </DescriptionRight>
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default Detail;
