import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";

const Count = () => {
  const [CounterOn, setCounterOn] = useState(false);

  // Define the percentage values multiplied by 100
  const averageROI = 92.01;
  const averageHitRate = 50.0;

  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Container>
          <Counts>
            <CountNum>
              <CountImg>
                <img src="./img/totalprofite.png" alt="totalprofite" />
              </CountImg>

              {CounterOn && (
                <CountUp
                  start={0}
                  end={36586}
                  duration={2}
                  delay={0}
                  style={{ color: "#d17f1b" }}
                />
              )}
              <Text>Total Profit</Text>
            </CountNum>
            <CountNum>
              <div style={{ alignItems: "center" }}>
                <CountImg>
                  <img src="./img/tipster.png" alt="totaltipster" />
                </CountImg>
                {CounterOn && (
                  <CountUp
                    start={0}
                    end={586}
                    duration={2}
                    delay={0}
                    style={{ color: "#d17f1b" }}
                  />
                )}
                <Text>Total Tipster</Text>
              </div>
            </CountNum>
            <CountNum>
              <CountImg>
                <img src="./img/averageroi.png" alt="averageroi" />
              </CountImg>
              {CounterOn && (
                <CountUp
                  start={0}
                  end={averageROI}
                  duration={2}
                  delay={0}
                  separator=","
                  suffix=".00%"
                  style={{ color: "#d17f1b" }}
                />
              )}
              <Text>Average ROI</Text>
            </CountNum>
            <CountNum>
              <CountImg>
                <img src="./img/averagehit.png" alt="averagehit" />
              </CountImg>
              {CounterOn && (
                <CountUp
                  start={0}
                  end={averageHitRate}
                  duration={2}
                  delay={0}
                  separator=","
                  suffix=".00%"
                  style={{ color: "#d17f1b" }}
                />
              )}
              <Text>Average Hit Rate</Text>
            </CountNum>
          </Counts>
        </Container>
      </ScrollTrigger>
    </div>
  );
};

export default Count;

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

const Counts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  color: white;
  padding: 60px 0;
  text-align: center;
  @media (max-width: 815px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 470px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 345px) {
    grid-template-columns: 1fr;
  }
`;

const CountNum = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 15px;
  font-size: 25px;
  font-weight: 500;
  @media (max-width: 820px) {
    align-items: center;
    font-size: 23px;
  }
  @media (max-width: 768px) {
    // font-size: 30px;
  }
  @media (max-width: 480px) {
    // font-size: 20px;
  }
`;

const Text = styled.p`
  dispklay: flex;
  justify-content: space-between;
  color: var(--color-primary);
  font-size: 15px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CountImg = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
