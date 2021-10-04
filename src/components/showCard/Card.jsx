import React from "react";
import styled from "styled-components";
import { FavoriteBorder } from "@mui/icons-material";


const CardContainer = styled.div`
  
  height: 400px;
  width: 250px;
  box-shadow: 0px 0px 15px -5px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  background-color:#FFFFFF;
  border-radius:10px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 15px 0px;
  }
  
  

`;
const Img = styled.img`
  overflow: hidden;
  object-fit: contain;
  height: 200px;
  width: 100%;
`;

const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
`;
const CardTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 0.8rem;
  & h1{
    font-weight:600;
    text-align: center;
  }
  & span{
    font-size: 14px;
    color:#5C9DF2;
  }
`;
const CardBody = styled.div`
  width: 100%;
  height: 100px;
  font-size:0.9rem;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  color:#404040;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:10px;
  & h4,span{
    color: #c52929;
    padding: 10px;
    font-size:14px;
    ;
  }
`;

function Card() {
  const imgUrl =
    "https://mdsposi.knt.co.jp/syukuhaku/posi/knt/img/TI/1/01/2685/TI_1101469_20160912201718000.jpg";

  return (
    <>
      <CardContainer>
        <CardTitle>
          <h4>ホノルル（オアフ島） 5日間</h4>
          <span>12/3~12/6</span>
        </CardTitle>
        <div>
          <Img src={imgUrl} />
        </div>

        <CardContent>
          <CardBody>
            <p>
              コンタクトレス、ペーパーレス、ソーシャルディスタンスを維持して過ごすことができます。
              ワイキキの海が見える気                                     持ちの良い立地のホテルです。
              ております。
            </p>
          </CardBody>
        </CardContent>
        <CardFooter>
          <h4>$23000</h4>
          <span>日帰り</span>
          <span> <FavoriteBorder/></span>
        </CardFooter>
      </CardContainer>
    </>
  );
}

export default Card;
