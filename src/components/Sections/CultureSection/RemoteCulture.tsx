import React from "react";
import { Container } from "react-bootstrap";

import RemoteCultureImage from "./../../../images/remote-culture.png";
import styled from "styled-components";
import Display from "../../Display";

const StyledContainer = styled(Container)`
  margin-bottom: 140px;
`;

const Title = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 46px;
  letter-spacing: 5px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    letter-spacing: 5px;
    text-align: center;
    max-width: 315px;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  max-width: 632px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    max-width: 315px;
  }
`;

const RemoteCulture: React.FC = () => {
  return (
    <StyledContainer>
      <Display on="desktop">
        <div className="d-flex flex-row-reverse justify-content-center">
          <img
            style={{ width: "420px" }}
            src={RemoteCultureImage}
            alt="Remote Culture Image"
          />
          <div className="d-flex align-items-center">
            <div>
              <Title>Remote culture</Title>
              <Description>
                A remote work culture is a culture that puts connection and
                sense of belonging of remote workers front and center. We are
                built on values like trust, inclusivity, autonomy, and
                transparency. Remote team culture is primarily built by how we
                work together, not how we socialize. Our culture is written
                down.
              </Description>
            </div>
          </div>
        </div>
      </Display>
      <Display on="mobile">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <Title>Remote culture</Title>
              <Description>
                A remote work culture is a culture that puts connection and
                sense of belonging of remote workers front and center. We are
                built on values like trust, inclusivity, autonomy, and
                transparency. Remote team culture is primarily built by how we
                work together, not how we socialize. Our culture is written
                down.
              </Description>
            </div>
          </div>
          <img
            style={{ width: "315px" }}
            src={RemoteCultureImage}
            alt="Remote Culture Image"
          />
        </div>
      </Display>
    </StyledContainer>
  );
};

export default RemoteCulture;
