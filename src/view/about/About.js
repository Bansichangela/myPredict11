import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Details>
        <Title>About Us</Title>
        <Declaration>
          <h4>
            MyPredict11 is the extra ordinary analytics tool for cricket, we are
            providing analysis for ground and players statistical data based on
            past performances.
          </h4>{" "}
          <h4>
            MyPredict11 is absolutely free platform to build World Beating
            Fantasy Cricket Teams.
          </h4>{" "}
          <h4>
            {" "}
            We are providing detailed statistical data to the user for choose
            best 11 players and earn points in MyPredict11 and also help to earn
            money from fantasy cricket platforms.{" "}
          </h4>
          <h4>
            We are providing bit of information to make winning teams for
            fantasy sports.{" "}
          </h4>
          <h4>
            Currently MyPredict11 is focusing on cricket contests to provide
            easiest, fastest and smartest way to make wining teams for fantasy
            cricket platforms.
          </h4>
        </Declaration>
      </Details>
    </Container>
  );
};

export default About;

const Container = styled.div`
  background-image: url("./img/360_F_252619603_JVfZRyinpRGECZYEXm9srIPusT6OE8hO.jpg");
  background-size: cover;
`;

const Details = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 50px;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  padding-bottom: 20px;
  color: #0c0338;
  @media (max-width: 700px) {
    font-size: 45px;
  }
  @media (max-width: 560px) {
    font-size: 42px;
  }
  @media (max-width: 370px) {
    font-size: 40px;
  }
`;

const Declaration = styled.div`
  font-size: 20px;
  color: black;
  opacity: 0.8;
  line-height: 35px;
  padding-top: 10px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: 16px;
  }
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;
