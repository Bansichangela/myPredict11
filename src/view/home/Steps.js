// import React from "react";
// import styled from "styled-components";

// const Steps = () => {
//   return (
//     <Container>
//       <Text>
//         <StepLineheading>
//           <p>3 Easy steps to find the best analysts</p>
//         </StepLineheading>
//         <StepLine>
//           <p>
//             Make multiple combinations to find the Best prediction and get
//             inspired from their predictions.
//           </p>
//           <p style={{ marginTop: "15px" }}>
//             Winning fantasy sports platform in Three Simple Steps.
//           </p>
//         </StepLine>
//         <Step>
//           <Step1>
//             <StepImg1>
//               <img src="./img/step1.png" alt="step"></img>
//             </StepImg1>
//             <StepDetail>
//               <h1 style={{ color: "#d17f1b", paddingBottom: "10px" }}>
//                 01. Select Match
//               </h1>
//               <p style={{ color: "#0c0338", fontSize: "16px" }}>
//                 Select Match We make it very easy for you to find the data
//                 analysis and predictor with 99% accuracy statistics we provide,
//                 you can choose best player 30 second.
//               </p>
//             </StepDetail>
//           </Step1>
//           <Arrow>
//             <img src="./img/arrow-one.png" alt="arrow"></img>
//           </Arrow>
//           <Step2>
//             <StepDetail>
//               <h1 style={{ color: "#d17f1b", paddingBottom: "10px" }}>
//                 02. Fantasy analysis
//               </h1>
//               <p style={{ color: "#0c0338", fontSize: "16px" }}>
//                 Find your match winners by viewing detailed information of every
//                 player for Powerplay bowler and batter with 99% accuracy
//                 statistics we provide you can choose best player 30 second.
//               </p>
//             </StepDetail>
//             <StepImg2>
//               <img src="./img/step2.png" alt="step2"></img>
//             </StepImg2>
//           </Step2>
//           <Arrow>
//             <img src="./img/arrow-two.png" alt="arrow"></img>
//           </Arrow>
//           <Step3>
//             <StepImg3>
//               <img src="./img/step3.png" alt="step3"></img>
//             </StepImg3>
//             <StepDetail>
//               <h1 style={{ color: "#d17f1b", paddingBottom: "10px" }}>
//                 03. Create your team
//               </h1>
//               <p style={{ color: "#0c0338", fontSize: "16px" }}>
//                 Start creating your winning teams! and make predictions with our
//                 pridection system
//               </p>
//             </StepDetail>
//           </Step3>
//         </Step>
//       </Text>
//     </Container>
//   );
// };

// export default Steps;

// const Container = styled.div`
//   margin: 0 auto;
//   margin-bottom: 50px;
//   background-color: #f1f1f1;
// `;

// const Text = styled.div`
//   max-width: 85%;
//   margin: 0 auto;
//   text-align: center;
// `;

// const StepLineheading = styled.div`
//   color: #0c0338;
//   font-size: 45px;
//   font-weight: 700;
//   margin-top: 41px;
//   margin-bottom: 25px;
//   padding-top: 50px;
//   @media (max-width: 1270px) {
//     font-size: 45px;
//   }
//   @media (max-width: 690px) {
//     f0nt-size: 40px;
//   }
//   @media (max-width: 495px) {
//     font-size: 35px;
//   }
//   @media (max-width: 410px) {
//     font-size: 30px;
//   }
// `;

// const StepLine = styled.div`
//   color: #d17f1b;
//   text-align: center;
//   font-size: 16px;
//   @media (max-width: 1270px) {
//     font-size: 17px;
//   }
//   @media (max-width: 690px) {
//     font-size: 15px;
//   }
//   @media (max-width: 495px) {
//     font-size: 13px;
//   }
//   @media (max-width: 410px) {
//     font-size: 10px;
//   }
// `;

// const Step = styled.div`
//   margin-top: 50px;
// `;

// const Step1 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media (max-width: 690px) {
//     flex-direction: column;
//   }
// `;

// const StepImg1 = styled.div`
//   width: 30%;

//   img {
//     width: 400px;
//     @media (max-width: 1270px) {
//       width: 350px;
//     }
//     @media (max-width: 1170px) {
//       width: 300px;
//     }
//     @media (max-width: 1010px) {
//       width: 250px;
//     }
//     @media (max-width: 750px) {
//       width: 200px;
//     }
//     @media (max-width: 495px) {
//       width: 150px;
//     }
//     @media (max-width: 410px) {
//       width: 100px;
//     }
//   }

//   @media (max-width: 690px) {
//     width: 70%;
//   }
// `;

// const StepDetail = styled.div`
//   display: flex;
//   width: 40%;
//   flex-direction: column;
//   font-size: 20px;
//   @media (max-width: 1270px) {
//     font-size: 17px;
//   }
//   @media (max-width: 1170px) {
//     font-size: 15px;
//   }
//   @media (max-width: 1010px) {
//     font-size: 13px;
//   }
//   @media (max-width: 690px) {
//     width: 100%;
//     gap: 10px;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   }

//   @media (max-width: 495px) {
//     font-size: 10px;
//   }
//   @media (max-width: 410px) {
//     font-size: 8px;
//     gap: 0px;
//   }
// `;

// const Arrow = styled.div`
//   img {
//     margin: 0 auto;
//     width: 230px; // 300px;
//     @media (max-width: 1270px) {
//       width: 200px;
//     }
//     @media (max-width: 1150px) {
//       display: none;
//     }
//     @media (max-width: 830px) {
//       width: 200px;
//     }
//   }
// `;

// const Step2 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media (max-width: 690px) {
//     display: flex;
//     flex-direction: column-reverse;
//   }
// `;

// const StepImg2 = styled.div`
//   width: 30%;
//   img {
//     width: 400px;
//     @media (max-width: 1270px) {
//       width: 350px;
//     }
//     @media (max-width: 1170px) {
//       width: 300px;
//     }
//     @media (max-width: 1010px) {
//       width: 250px;
//     }
//     @media (max-width: 750px) {
//       width: 200px;
//     }
//     @media (max-width: 495px) {
//       width: 150px;
//     }
//     @media (max-width: 410px) {
//       width: 100px;
//     }
//   }
// `;

// const Step3 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-bottom: 30px;
//   @media (max-width: 690px) {
//     flex-direction: column;
//   }
// `;

// const StepImg3 = styled.div`
//   width: 30%;
//   img {
//     width: 400px;
//     @media (max-width: 1270px) {
//       width: 350px;
//     }
//     @media (max-width: 1170px) {
//       width: 300px;
//     }
//     @media (max-width: 1010px) {
//       width: 250px;
//     }
//     @media (max-width: 750px) {
//       width: 200px;
//     }
//     @media (max-width: 495px) {
//       width: 150px;
//     }
//     @media (max-width: 410px) {
//       width: 100px;
//     }
//   }
// `;

import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Steps = () => {
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
      <Details>
        <Title>
          <Text>3 Easy Steps to find the best analyst</Text>
        </Title>
        <Boxes>
          <Box1 ref={ref1} style={fadeIn1}>
            <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
              01. Select Match
            </h1>
            <p style={{ marginTop: "10px", fontSize: "16px" }}>
              Select Match We make it very easy for you to find the data
              analysis and predictor with 99% accuracy statistics we provide,
              you can choose best player 30 second.
            </p>
          </Box1>
          <Box2 ref={ref2} style={fadeIn2}>
            <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
              02. Fantasy analysis
            </h1>
            <p style={{ marginTop: "10px", fontSize: "16px" }}>
              Find your match winners by viewing detailed information of every
              player for Powerplay bowler and batter with 99% accuracy
              statistics we provide you can choose best player 30 second.
            </p>
          </Box2>
          <Box3 ref={ref3} style={fadeIn3}>
            <h1 style={{ paddingTop: "15px", paddingBottom: "10px" }}>
              03. Create your team
            </h1>
            <p style={{ marginTop: "10px", fontSize: "16px" }}>
              Select Match We make it very easy for you to find the data
              analysis and predictor with 99% accuracy statistics we provide,
              you can choose best player 30 second.
            </p>
          </Box3>
        </Boxes>
      </Details>
    </Container>
  );
};

export default Steps;

const Container = styled.div`
  margin: 50px 0;
  background-color: #e8e8e8;
`;

const Details = styled.div`
  max-width: 85%;
  padding: 50px 0;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  // padding-top: 50px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #0c0338;
  @media (max-width: 587px) {
    font-size: 35px;
  }
`;

const Boxes = styled.div`
  padding-top: 25px;
  // padding-bottom: 50px;
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
  font-size: 15px;
  color: white;
  border-radius: 20px;
  background-image: radial-gradient(rgb(26, 106, 104), rgba(0, 31, 100, 0.75)),
    url("./img/sports-cricket-wallpaper-preview.jpg");
  background-repeat: no-repeat;
  z-index: 1;
`;

const Box2 = styled(animated.div)`
  max-width: 300px;
  padding: 35px;
  font-size: 15px;
  color: white;
  background-image: radial-gradient(rgb(26, 106, 104), rgba(0, 31, 100, 0.75)),
    url("./img/images.jpeg");
  background-size: cover;
  border-radius: 20px;
  z-index: 1;
`;

const Box3 = styled(animated.div)`
  max-width: 300px;
  padding: 35px;
  font-size: 15px;
  color: white;
  border-radius: 20px;
  background-image: radial-gradient(rgb(26, 106, 104), rgba(0, 31, 100, 0.75)),
    url("./img/hand-brushing-snooker-pool-billards-table-with-bal-2021-08-30-18-49-45-utc-min.jpg");
  background-size: cover;
  z-index: 1;
`;
