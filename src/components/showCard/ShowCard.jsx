import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { projectFirestore } from "../../firebase/config";
import CircularProgress from "@mui/material/CircularProgress";
// import { travelData } from "../../Data/data";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 20px;
  width: auto;
  height: auto;
  position: relative;
  padding: 40px;
  & h1 {
    position: absolute;
    font-size: 2rem;
    color: #cca8a8;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  margin: 40px auto;
  background-color: #7899f5;
  width: 100%;
  height: auto;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  bottom: 0;
  border-radius: 10px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function CardWrapper() {
  const [travelData, setTravelData] = useState({});
  const [loading, setLoading] = useState(true);

  
  const fetchTravelData =　async () => {
      const doc = await projectFirestore
      .collection("travelPlans")
      .doc("SSbyibFF1shnfxz38lDT")
      .get();
      if (doc.data().travelData) {
          setTravelData(doc.data().travelData);
          setLoading(false)
        }
  };
  useEffect(() => {
    setLoading(true);
    try{fetchTravelData()
    }
    catch(error){
      setLoading(false);
    }
  }, []);


  // if (!loading) {
  //   return (
  //     <Wrapper>
  //       <Spinner>
  //         <CircularProgress disableShrink />;
  //       </Spinner>
  //     </Wrapper>
  //   );
  // }

  return (
    <>
      {loading ? (
        <Wrapper>
          <Spinner>
            <CircularProgress disableShrink />;
          </Spinner>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <h1>沖縄</h1>
            <Container>
              <Card location={travelData.okinawa} />
            </Container>
          </Wrapper>

          <Wrapper>
            <h1>北海道</h1>
            <Container>
              <Card location={travelData.hokkaidou} />
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );

  // return (
  //   <>
  //     <Wrapper>
  //       <h1>沖縄</h1>
  //       <Container>
  //         <Card location={travelData.okinawa} />
  //       </Container>
  //     </Wrapper>

  //     <Wrapper>
  //       <h1>北海道</h1>
  //       <Container>
  //         <Card location={travelData.hokkaidou} />
  //       </Container>
  //     </Wrapper>
  //   </>
  // );
}

export default CardWrapper;
