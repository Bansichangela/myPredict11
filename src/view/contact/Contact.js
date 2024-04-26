import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn1 = useSpring({
    opacity: inView1 ? 1 : 0.2,
    transform: inView1 ? "translateY(0)" : "translateY(70px)",
    config: { duration: 500 },
  });

  const fadeIn2 = useSpring({
    opacity: inView2 ? 1 : 0.2,
    transform: inView2 ? "translateY(1)" : "translateY(100px)",
    config: { duration: 500 },
  });

  const fadeIn3 = useSpring({
    opacity: inView3 ? 1 : 0.2,
    transform: inView3 ? "translateY(2)" : "translateY(130px)",
    config: { duration: 500 },
  });

  return (
    <Container>
      <AllBox>
        <Details>
          <Title>
            <Text>Contact Us</Text>
          </Title>
          <Boxes>
            <Box1 ref={ref1} style={fadeIn1}>
              <img
                src="./img/icon1.png"
                alt="icon3"
                style={{ width: "30%" }}
              ></img>
              <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
                Call Us
              </h1>
              <p
                style={{
                  color: "#0c0338",
                  fontSize: "16px",
                  paddingBottom: "5px",
                  opacity: "0.7",
                  fontWeight: "700",
                }}
              >
                +91 9909595299
              </p>
              <p
                style={{
                  color: "#0c0338",
                  fontSize: "16px",
                  opacity: "0.7",
                  fontWeight: "700",
                }}
              >
                +789-5565886
              </p>
            </Box1>
            <Box2 ref={ref2} style={fadeIn2}>
              <img
                src="./img/icon2.png"
                alt="icon3"
                style={{ width: "26%" }}
              ></img>
              <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
                Address
              </h1>
              <p
                style={{
                  color: "#0c0338",
                  fontSize: "16px",
                  opacity: "0.7",
                  fontWeight: "700",
                }}
              >
                B-1203, Ganesh Glory 11, Jagatpur road, SG Hwy Ahmedabad,
                Gujarat 382481
              </p>
            </Box2>
            <Box3 ref={ref3} style={fadeIn3}>
              <img
                src="./img/icon3.png"
                alt="icon3"
                style={{ width: "29%" }}
              ></img>
              <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
                Mail Us
              </h1>
              <p
                style={{
                  color: "#0c0338",
                  fontSize: "16px",
                  opacity: "0.7",
                  fontWeight: "700",
                }}
              >
                inventionhill@gmail.com
              </p>
              <p
                style={{
                  color: "#0c0338",
                  fontSize: "16px",
                  opacity: "0.7",
                  fontWeight: "700",
                }}
              >
                yourmail@gmail.com
              </p>
            </Box3>
          </Boxes>
        </Details>
      </AllBox>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  //   background-color: #eef7fb;
  marrgin: 0 auto;
`;

const AllBox = styled.div`
  background-color: #eef7fb;
`;

const Details = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.div`
  text-align: center;
  font-family: "Playfair Display", serif;
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #0c0338;
  @media (max-width: 587px) {
    font-size: 35px;
  }
`;

const Boxes = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const Box1 = styled(animated.div)`
  max-width: 300px;
  padding: 35px;
  font-size: 13px;
  color: #0c0338;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const Box2 = styled(animated.div)`
  max-width: 300px;
  padding: 35px;
  font-size: 13px;
  color: #0c0338;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const Box3 = styled(animated.div)`
  max-width: 300px;
  padding: 35px;
  font-size: 13px;
  color: #0c0338;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;
