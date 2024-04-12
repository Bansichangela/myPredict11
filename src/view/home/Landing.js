import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <>
      <BlurredBackground>
        <BackgroundImage />
        <Container>
          <Content>
            <Title>INVEST BID A LITTLE & GET MORE PROFITABLE PLAY</Title>
            <Button>Get Started Now</Button>
          </Content>
        </Container>
      </BlurredBackground>
    </>
  );
};

export default Landing;

const BlurredBackground = styled.div`
  position: relative;
  height: 80vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./img/bg-3image.jpg");
  background-size: cover;
  filter: blur(2.5px); /* Adjust the blur amount as needed */
  z-index: -1; /* Send the background image to the bottom */
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  color: #6d0202;
  padding-bottom: 35px;
  font-size: 55px;
  text-align: center;
  @media (max-width: 1140px) {
    font-size: 45px;
  }
  @media (max-width: 690px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 35px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #6d0202;
  z-index: 1;
  background: #e8e8e8;
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
    border-radius: 15px;
    background-color: #6d0202;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  &:hover {
    color: #e8e8e8;
  }

  &:hover::before {
    width: 100%;
  }
`;
