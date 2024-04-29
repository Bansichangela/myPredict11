import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";

const Landing = () => {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const props = useSpring({
    opacity: !hasAnimated ? (inView ? 1 : 0) : 1,
    transform: !hasAnimated
      ? inView
        ? "translateY(0)"
        : "translateY(-100px)"
      : "translateY(0)",
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(-100%)" },
    onRest: () => {
      if (inView && !hasAnimated) {
        setHasAnimated(true);
      }
    },
  });
  return (
    <div ref={inViewRef}>
      <BlurredBackground>
        <BackgroundImage />
        <Div>
          <Container>
            <Content>
              <LandingItem style={props} ref={ref}>
                <Title>INVEST BID A LITTLE & GET</Title>
                <Title> MORE PROFITABLE PLAY</Title>
                <Button>Get Started Now</Button>
              </LandingItem>
            </Content>
          </Container>
        </Div>
      </BlurredBackground>
    </div>
  );
};

export default Landing;

const BlurredBackground = styled.div`
  position: relative;
  height: 80vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("./img/athletic-soccer-player-kicking-ball-on-soccer-pitc-2022-12-16-19-23-28-utc-min.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.4);
`;

const Div = styled.div`
  max-width: 88%;
  margin: 0 auto;
  @media (max-width: 990px) {
    max-width: 83%;
  }
`;

const Container = styled.div`
  height: 67vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LandingItem = styled(animated.div)`
  padding: 30px;
  @media (max-width: 990px) {
    padding: 0 0 0 0;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
  padding: 5px 0;
  margin: 0;
  @media (max-width: 1100px) {
    font-size: 38px;
  }
  @media (max-width: 990px) {
    font-size: 37px;
  }
  @media (max-width: 630px) {
    font-size: 32px;
  }
  @media (max-width: 530px) {
    font-size: 28px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  border: unset;
  border-radius: 15px;
  color: var(--color-primary);
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
    background-color: #d17f1b;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 400ms;
  }

  &:hover {
    color: #e8e8e8;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 990px) {
    font-weight: 700;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
