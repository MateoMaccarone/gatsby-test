import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import RollerText from "./RollerText";
import useScroll from "../../../hooks/useScroll";
import useWidth from "../../../hooks/useWidth";

const StyledWrapper = styled.div`
  background: black;
  padding: 40px 0;
`;

const Title = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 89px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 992px) {
    font-weight: 500;
    font-size: 45px;
    line-height: 57px;
  }
`;

const Line1 = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 30px;

  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  margin: 75px 0;

  color: #ffffff;
`;

const Line2 = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 30px;

  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  margin: 75px 0;

  color: #ffffff;
`;

const WordList = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    padding: 0 90px;
  }
`;

const OurValues: React.FC = () => {
  const { isMobile } = useWidth();
  const speed = isMobile ? 1.8 : 1;

  return (
    <StyledWrapper>
      <Title>
        {">"} Our values {"<"}
      </Title>
      <Line1>
        <RollerText
          speed={0.36 * speed}
          content={
            <WordList>
              <div style={{ letterSpacing: "2px", color: "#48FFCB" }}>
                Embrace change and <strong>learning</strong>.
              </div>
              <div style={{ letterSpacing: "-1px" }}>
                Give Context, not control.
              </div>
              <div style={{ letterSpacing: "2px" }}>
                Good is better than perfect
              </div>
            </WordList>
          }
        />
      </Line1>
      <Line2>
        <RollerText
          speed={0.3 * speed}
          reverse={true}
          content={
            <WordList>
              <div style={{ letterSpacing: "2px" }}>Listen more, say less.</div>
              <div style={{ letterSpacing: "1px", color: "#48FFCB" }}>
                Be Humble
              </div>
              <div style={{ letterSpacing: "4px" }}>
                <strong>Team</strong> work.
              </div>
              <div style={{ letterSpacing: "4px" }}>Constant Iteration.</div>
            </WordList>
          }
        />
      </Line2>
      <Line1>
        <RollerText
          speed={0.7 * speed}
          content={
            <WordList>
              <div style={{ letterSpacing: "1px" }}>
                Be an <strong>imperfectionist</strong>.
              </div>
              <div style={{ letterSpacing: "-1px", color: "#48FFCB" }}>
                Transparency.
              </div>
              <div style={{ letterSpacing: "2px" }}>Always do.</div>
              <div style={{ letterSpacing: "4px", color: "#48FFCB" }}>
                Open Mindness.
              </div>
            </WordList>
          }
        />
      </Line1>
    </StyledWrapper>
  );
};

export default OurValues;
