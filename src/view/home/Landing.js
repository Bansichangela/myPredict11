import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Title>INVEST BID A LITTLE & GET MORE PROFITABLE PLAY</Title>
      </Content>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  position: relative;
  height: 675px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./img/bg-3image.jpg");
  background-size: cover;
  -webkit-filter: blur(8px);
  filter: blur(8px);
`;

const Content = styled.div`
  z-index: 1;
  max-width: 924px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #6d0202;
  font-weight: 700;
  font-size: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Playfair Display", serif;
`;
