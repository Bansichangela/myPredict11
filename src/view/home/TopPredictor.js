import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const data = [
  {
    imageLink: "./img/bettingimage.png",
    name: "Cricket playing 11",
    points: 500,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "Santanu Dass",
    points: 200,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "Debraj Bala",
    points: 99,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "shivam Jagtap",
    points: 50,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "DEEPAK MR 360",
    points: 20,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "PRABHU CHILWADI",
    points: 10,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "GOLI SHARMA",
    points: 30,
    link: "",
  },
  {
    imageLink: "./img/bettingimage.png",
    name: "POPAT NAYAK",
    points: 40,
    link: "",
  },
];

const Card = () => {
  return (
    <>
      {data.map((item, index) => (
        <Box key={index}>
          <div style={{ height: "72px", width: "100%" }}>
            <img
              src={item.imageLink}
              alt="betting"
              style={{ width: "100%", height: "82px" }}
            ></img>
          </div>
          <Profileimg>
            <img
              src="./img/profileimg.jpg"
              alt="profile"
              style={{
                width: "90px",
                borderRadius: "100%",
              }}
            ></img>
          </Profileimg>
          <div>
            <Predictor1
              style={{
                marginTop: "70px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2 style={{ color: "ff0268" }}>{item.name}</h2>
            </Predictor1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "20px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                <p style={{ marginBottom: "10px" }}>{index + 1}</p>
                <p style={{ marginBottom: "10px" }}>Rank</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                <p style={{ marginBottom: "10px" }}>{item.points}</p>
                <p style={{ marginBottom: "10px" }}>Points</p>
              </div>
            </div>
          </div>
          <ViewProfile>
            <CustomLink to="#">View Profile</CustomLink>
          </ViewProfile>
        </Box>
      ))}
    </>
  );
};

const TopPredictor = () => {
  return (
    <Container>
      <Details>
        <Title>
          <div style={{ textAlign: "center" }}>
            <PredictorName>Top Predictors</PredictorName>
            <PredictorLine>
              Place where World's best predictors and data research for upcoming
              cricket matches
            </PredictorLine>
          </div>
        </Title>
        <Boxes>
          <Card />
        </Boxes>
      </Details>
    </Container>
  );
};

export default TopPredictor;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Container = styled.div`
  //   max-width: 85%;
`;

const Details = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 15px;
`;

const PredictorName = styled.div`
  color: #0c0338;
  font-size: 50px;
  margin: 90px 0 15px 0;
  font-weight: 700;
  @media (max-width: 1120px) {
    font-size: 45px;
  }
  @media (max-width: 645px) {
    font-size: 40px;
  }
`;

const PredictorLine = styled.div`
  color: #d17f1b;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 35px;
  @media (max-width: 1120px) {
    font-size: 20px;
  }
  @media (max-width: 645px) {
    font-size: 15px;
  }
`;

const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 15px;
  gap: 15px;
  color: white;
  @media (max-width: 1230px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 845px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0338;
  position: relative;
  overflow: hidden;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(0.97);
    transform: scale(0.97);
  }
`;

const Profileimg = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 20px;
  line-height: 1;
  @media (max-width: 1120px) {
  }
`;

const Predictor1 = styled.div`
  display: flex;
`;

const ViewProfile = styled.button`
  margin-bottom: 20px;
  padding: 15px 25px;
  border: 2px solid white;
  border-radius: 10px;
  color: #d17f1b;
  z-index: 1;
  background: transparent;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 10px;
    background-color: #d17f1b;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 400ms;
  }

  &:hover {
    color: #0c0338;
  }

  &:hover::before {
    width: 100%;
  }
`;
