import React from "react";
import styled from "styled-components";

const Steps = () => {
  return (
    <Container>
      <Text>
        <StepLineheading>
          <p>3 Easy steps to find the best analysts</p>
        </StepLineheading>
        <StepLine>
          <p>
            Make multiple combinations to find the Best prediction and get
            inspired from their predictions.
          </p>
          <p style={{ marginTop: "15px" }}>
            Winning fantasy sports platform in Three Simple Steps.
          </p>
        </StepLine>
        <Step>
          <Step1>
            <StepImg1>
              <img src="./img/step1.png" alt="step"></img>
            </StepImg1>
            <StepDetail>
              <h1>01. Select Match</h1>
              <p>
                Select Match We make it very easy for you to find the data
                analysis and predictor with 99% accuracy statistics we provide,
                you can choose best player 30 second.
              </p>
            </StepDetail>
          </Step1>
          <Arrow>
            <img src="./img/arrow-one.png" alt="arrow"></img>
          </Arrow>
          <Step2>
            <StepDetail>
              <h1>02. Fantasy analysis</h1>
              <p>
                Find your match winners by viewing detailed information of every
                player
              </p>
            </StepDetail>
            <StepImg2>
              <img src="./img/step2.png" alt="step2"></img>
            </StepImg2>
          </Step2>
          <Arrow>
            <img src="./img/arrow-two.png" alt="arrow"></img>
          </Arrow>
          <Step3>
            <StepImg3>
              <img src="./img/step3.png" alt="step3"></img>
            </StepImg3>
            <StepDetail>
              <h1>03. Create your team</h1>
              <p>Start creating your winning teams!</p>
            </StepDetail>
          </Step3>
        </Step>
      </Text>
    </Container>
  );
};

export default Steps;

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #af87bf;
`;

const Text = styled.div`
  max-width: 85%;
  margin: 0 auto;
  text-align: center;
`;

const StepLineheading = styled.div`
  font-size: 55px;
  font-weight: 700;
  margin-top: 41px;
  margin-bottom: 25px;
  padding-top: 50px;
  @media (max-width: 1270px) {
    font-size: 45px;
  }
  @media (max-width: 690px) {
    f0nt-size: 40px;
  }
  @media (max-width: 495px) {
    font-size: 35px;
  }
  @media (max-width: 410px) {
    font-size: 30px;
  }
`;

const StepLine = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 1270px) {
    font-size: 17px;
  }
  @media (max-width: 690px) {
    font-size: 15px;
  }
  @media (max-width: 495px) {
    font-size: 13px;
  }
  @media (max-width: 410px) {
    font-size: 10px;
  }
`;

const Step = styled.div`
  margin-top: 50px;
`;

const Step1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

const StepImg1 = styled.div`
  width: 30%;

  img {
    width: 400px;
    @media (max-width: 1270px) {
      width: 350px;
    }
    @media (max-width: 1170px) {
      width: 300px;
    }
    @media (max-width: 1010px) {
      width: 250px;
    }
    @media (max-width: 750px) {
      width: 200px;
    }
    @media (max-width: 495px) {
      width: 150px;
    }
    @media (max-width: 410px) {
      width: 100px;
    }
  }

  @media (max-width: 690px) {
    width: 70%;
  }
`;

const StepDetail = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-size: 20px;
  @media (max-width: 1270px) {
    font-size: 17px;
  }
  @media (max-width: 1170px) {
    font-size: 15px;
  }
  @media (max-width: 1010px) {
    font-size: 13px;
  }
  @media (max-width: 690px) {
    width: 100%;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: 495px) {
    font-size: 10px;
  }
  @media (max-width: 410px) {
    font-size: 8px;
    gap: 0px;
  }
`;

const Arrow = styled.div`
  img {
    margin: 0 auto;
    width: 230px; // 300px;
    @media (max-width: 1270px) {
      width: 200px;
    }
    @media (max-width: 1150px) {
      display: none;
    }
    @media (max-width: 830px) {
      width: 200px;
    }
  }
`;

const Step2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 690px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StepImg2 = styled.div`
  width: 30%;
  img {
    width: 400px;
    @media (max-width: 1270px) {
      width: 350px;
    }
    @media (max-width: 1170px) {
      width: 300px;
    }
    @media (max-width: 1010px) {
      width: 250px;
    }
    @media (max-width: 750px) {
      width: 200px;
    }
    @media (max-width: 495px) {
      width: 150px;
    }
    @media (max-width: 410px) {
      width: 100px;
    }
  }
`;

const Step3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

const StepImg3 = styled.div`
  width: 30%;
  img {
    width: 400px;
    @media (max-width: 1270px) {
      width: 350px;
    }
    @media (max-width: 1170px) {
      width: 300px;
    }
    @media (max-width: 1010px) {
      width: 250px;
    }
    @media (max-width: 750px) {
      width: 200px;
    }
    @media (max-width: 495px) {
      width: 150px;
    }
    @media (max-width: 410px) {
      width: 100px;
    }
  }
`;
