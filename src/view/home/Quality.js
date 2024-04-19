import React from "react";
import styled from "styled-components";

const data = [
  {
    image: "./img/1.png",
    title: "Powerplay bowler analyst",
    subtitle:
      "Find your match winners by viewing detailed information of the top players for Powerplay bowler and batter",
  },
  {
    image: "./img/2.png",
    title: "Death Over bowler analyst",
    subtitle:
      "Find your match winners by viewing detailed information of the top players for Powerplay bowler and batter",
  },
  {
    image: "./img/3.png",
    title: "Lots of Reward",
    subtitle:
      "Start bt Daily Check-in Bonus, Best predictor for most like, most view and points",
  },
  {
    image: "./img/4.png",
    title: "Pitch Reports",
    subtitle:
      "Understand the pitch performance to select the players as per the pitch conditions",
  },
  {
    image: "./img/5.png",
    title: "Player Performance",
    subtitle: "Shows the top performing players to help you pick the best",
  },
  {
    image: "./img/6.png",
    title: "H2H Player Compare",
    subtitle:
      "Study key player battles across various start and metrics to select the finest player",
  },
];

const Card = () => {
  return (
    <>
      {data.map((item, index) => (
        <Advantage1 key={index}>
          <Box>
            <IMG>
              <img
                src={item.image}
                alt="powerply"
                style={{
                  width: "64px",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              />
            </IMG>
            <h1
              style={{
                color: "#d17f1b",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h1>
            <p style={{ color: "white", fontSize: "16px", opacity: "0.7" }}>
              {item.subtitle}
            </p>
          </Box>
        </Advantage1>
      ))}
    </>
  );
};

const Quality = () => {
  return (
    <Container>
      <Content>
        <Title>
          <FirstLine>Why MyPredict11 is better?</FirstLine>
          <SecondLine>
            Mypredict11 analyses 100% of data points to provide you with
            in-depth stats{" "}
          </SecondLine>
          <SecondLine>
            and predicted lineups to help you ace your fantasy game.
          </SecondLine>
        </Title>
        <Advantages>
          <Card />
        </Advantages>
      </Content>
    </Container>
  );
};

export default Quality;

const Container = styled.div`
  background-color: #0c0338;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Content = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const Title = styled.div`
  max-width: 85%;
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;
`;

const FirstLine = styled.div`
  font-size: 46px;
  font-weight: 700;
  padding-top: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 720px) {
    font-size: 35px;
  }
  @media (max-width: 630px) {
    font-size: 30px;
  }
  @media (max-width: 545px) {
    font-size: 25px;
  }
`;

const SecondLine = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
  opacity: 0.6;
  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 630px) {
    font-size: 10px;
  }
`;

const Advantages = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;
  justify-content: center;
  gap: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  min-width: 50%;
  height: 100%;
  word-break: break-word;
`;

const Advantage1 = styled.div`
  text-align: center;
`;

const IMG = styled.div`
  text-align: center;
`;
