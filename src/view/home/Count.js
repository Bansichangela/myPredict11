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
    <div style={{ backgroundColor: "#f1f1f1" }}>
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
              <count>
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
              </count>
            </CountNum>
            <CountNum>
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
  margin-bottom: 50px;
  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

const Counts = styled.div`
  display: flex;
  justify-content: space-between;
  // max-width: 80%;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  color: white;
  padding: 60px 0;
  text-align: center;
  margin-top: 60px;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 30px;
    padding: 10px 0;
  }
`;

const CountNum = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  dispklay: flex;
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
`;
