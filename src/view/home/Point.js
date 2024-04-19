import React from "react";
import styled from "styled-components";

const Point = () => {
  return (
    <>
      <Container>
        <Details>
          <Title>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <h2>The Numbers Don't Lie</h2>
            </div>

            <div
              style={{
                color: "#d17f1b",
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "15px",
                fontSize: "24px",
              }}
            >
              Number Said More Than Words
            </div>
          </Title>

          <InformationItem>
            <Average>
              <Averageimg>
                <img
                  src="./img/averageteam.png"
                  alt="averageteam"
                  style={{ maxWidth: "100px", height: "auto", padding: "20px" }}
                ></img>
              </Averageimg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "10px",
                }}
              >
                <h2>176</h2>
                <h2>Average Team</h2>
              </div>
            </Average>
            <AveragePoint>
              <AveragePointImg>
                <img
                  src="./img/averagepoint.png"
                  alt="averagepoint"
                  style={{ maxWidth: "100px", height: "auto", padding: "20px" }}
                ></img>
              </AveragePointImg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "10px",
                }}
              >
                <h2>785</h2>
                <h2>Average Point</h2>
              </div>
            </AveragePoint>
            <Predictor>
              <PredictorImg>
                <img
                  src="./img/predictor.png"
                  alt="predictor"
                  style={{ maxWidth: "100px", height: "auto", padding: "20px" }}
                ></img>
              </PredictorImg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "10px",
                }}
              >
                <h2>160</h2>
                <h2>Predictors</h2>
              </div>
            </Predictor>
          </InformationItem>
        </Details>
      </Container>
    </>
  );
};

export default Point;

const Container = styled.div`
  background-color: var(--color-primary);
`;

const Details = styled.div`
  max-width: 85%;
  margin: 0 auto;
  gap: 10px;
`;

const Title = styled.div`
  margin: 0 auto;
  padding: 50px 0 30px 0;
  color: black;
  font-size: 33px;
  @media (max-width: 1130px) {
    font-size: 30px;
    @media (max-width: 645px) {
      font-size: 25px;
      text-align: center;
    }
  }
`;

const Average = styled.div`
  display: flex;
`;

const Averageimg = styled.div`
  width: 100px
  padding: 20px;
`;

const AveragePoint = styled.div`
  display: flex;
`;

const AveragePointImg = styled.div`
  width: 100px
  padding: 20px;
  
`;

const Predictor = styled.div`
  display: flex;
`;

const PredictorImg = styled.div`
  width: 100px
  padding: 20px;
  
`;

const InformationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
  // flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1135px) {
    display: flex;
    justify-content: space-between;
  }
`;
