import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const data = [
  {
    imageLink1: "./img/gt.png",
    imageLink2: "./img/dc.jpg",
    match1: "GT",
    match2: "DC",
    date: "17/04/2024",
    time: "14:00:00",
    matchtype: "Indian Premier League",
  },
  {
    imageLink1: "./img/war.jpg",
    imageLink2: "./img/hl.jpg",
    match1: "WAR",
    match2: "HL",
    date: "17/04/2024",
    time: "16:00:00",
    matchtype: "CSA T20 Challenge",
  },
  {
    imageLink1: "./img/pbks.jpg",
    imageLink2: "./img/mi2.jpg",
    match1: "PBKS",
    match2: "MI",
    date: "18/04/2024",
    time: "14:00:00",
    matchtype: "Indian Premier League",
  },
  {
    imageLink1: "./img/pak.jpg",
    imageLink2: "./img/nzl.jpg",
    match1: "PAK",
    match2: "NZL",
    date: "18/04/2024",
    time: "14:30:00",
    matchtype: "New Zealand tour of Pakistan",
  },
  {
    imageLink1: "./img/lsg.jpg",
    imageLink2: "./img/csk.jpg",
    match1: "LSG",
    match2: "CSK",
    date: "19/04/2024",
    time: "14:00:00",
    matchtype: "Indian Premier League",
  },
  {
    imageLink1: "./img/roc.jpg",
    imageLink2: "./img/profile.png",
    match1: "ROC",
    match2: "WP",
    date: "19/04/2024",
    time: "16:00:00",
    matchtype: "CSA T20 Challenge",
  },
  {
    imageLink1: "./img/profile.png",
    imageLink2: "./img/profile.png",
    match1: "HD",
    match2: "KNI",
    date: "19/04/2024",
    time: "14:00:00",
    matchtype: "CSA T20 Challenge",
  },
  {
    imageLink1: "./img/profile.png",
    imageLink2: "./img/hl.jpg",
    match1: "MT",
    match2: "HL",
    date: "19/04/2024",
    time: "16:00:00",
    matchtype: "CSA T20 Challenge",
  },
  {
    imageLink1: "./img/profile.png",
    imageLink2: "./img/war.jpg",
    match1: "NW",
    match2: "WAR",
    date: "19/04/2024",
    time: "16:00:00",
    matchtype: "CSA T20 Challenge",
  },
  {
    imageLink1: "./img/dc.jpg",
    imageLink2: "./img/profile.png",
    match1: "DC",
    match2: "SRH",
    date: "20/04/2024",
    time: "14:00:00",
    matchtype: "Indian Premier League",
  },
];

const Cards = () => {
  return (
    <>
      {data.map((item, index) => (
        <Box key={index}>
          <DateTime>
            <p>{item.date}</p>
            <p>{item.time}</p>
          </DateTime>
          <Team>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.imageLink1}
                  alt="team"
                  style={{ width: "40px", borderRadius: "100%" }}
                ></img>
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {item.match1}
                </p>
              </div>
              <div>
                <img
                  src="./img/vs.png"
                  alt="vs"
                  style={{ width: "40px" }}
                ></img>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    marginRight: "10px",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {item.match2}
                </p>
                <img
                  src={item.imageLink2}
                  alt="team"
                  style={{ width: "40px", borderRadius: "100%" }}
                ></img>
              </div>
            </div>
          </Team>
          <IPL>{item.matchtype}</IPL>
        </Box>
      ))}
    </>
  );
};

const Match = () => {
  return (
    <Container>
      <Title>
        <Name>Upcoming matches</Name>
        <NameDescription>
          The fastest growing prediction community
        </NameDescription>
      </Title>
      <Boxes>
        <Cards />
      </Boxes>
    </Container>
  );
};

export default Match;

const Container = styled.div`
  //   background-color: var(--color-primary);
  //   background-color: #feddb3;
`;

const Title = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding-top: 5px;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h1`
  color: #0c0338;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 10px;
  @media (max-width: 870px) {
    font-size: 45px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
`;

const NameDescription = styled.h2`
  color: #0c0338;
  opacity: 0.7;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 30px;
  @media (max-width: 870px) {
    font-size: 15px;
  }
  @media (max-width: 485px) {
    font-size: 13px;
  }
`;

const Boxes = styled.div`
  max-width: 84%;
  margin: 0 auto;
  margin-bottom: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #0c0338;
`;

const DateTime = styled.div`
  padding: 10px 20px;
  color: yellow;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
`;

const Team = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  color: white;
  background-color: #253254;
`;

const IPL = styled.div`
  color: yellow;
  font-size: 20px;
  padding: 10px;
  font-weight: 400;
`;
