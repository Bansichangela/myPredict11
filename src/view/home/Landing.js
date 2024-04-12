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
  background-color: white;
  color: #6d0202;
  padding: 12px 22px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  cursor: pointer;
  // border: 2px solid white;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #f4c566;
    color: #6d0202;
    // border: 2px solid #6d0202;
  }
`;
