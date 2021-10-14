import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FavoriteBorder } from "@mui/icons-material";
import { travelData } from "../../Data/data";
import { projectFirestore } from "../../firebase/config";

const CardContainer = styled.div`
  height: 400px;
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
  object-fit: contain;
  height: 200px;
  width: 100%;
`;

const CardContent = styled.div`
  margin-top: 0.3rem;
`;
const CardTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 15px;
  & h1 {
    font-weight: 600;
    text-align: center;
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
  text-overflow: ellipsis;
  overflow: hidden;
  display: --webkit-box;
  --webkit-line-clamp: 3;
  box-orient: vertical;
  color: #404040;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  & h4,
  span {
    color: #c52929;
    padding: 10px;
    font-size: 14px;
  }
`;

function Card({ location }) {
  // const [travelData, setTravelData] = useState([]);
  // const fetchTravelData = () => {
  //   projectFirestore
  //     .collection("travelPlans")
  //     .doc("pugIg7JtS5cbHdgqTWFE")
  //     .get()
  //     .then((doc) => {
  //       console.log(doc.data().travelData);
  //       setTravelData(doc.data().travelData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchTravelData();
  // }, []);

  return (
    <>
      {location.map(({ title, img, date, des, price, duration }, index) => {
        return (
          <CardContainer key={index}>
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
              <h4>{price}</h4>
              <span>{duration}</span>
              <span>
                <FavoriteBorder />
              </span>
            </CardFooter>
          </CardContainer>
        );
      })}
    </>
  );
}

export default Card;
