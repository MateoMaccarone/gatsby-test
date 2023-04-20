import React from "react";
import { Container } from "react-bootstrap";

import CultureMainImage from "../../../images/culture-main.png";
import CultureMainMobileImage from "../../../images/culture-mobile.png";
import styled from "styled-components";
import RotativeText from "./RotativeText";
import WavyUnderlineImage from "../../../images/wavy-underline.svg";
import Display from "../../Display";

const Title = styled.h1`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 120px;
  text-align: center;

  @media (max-width: 992px) {
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
  }
`;

const Subtitle = styled.h1`
  margin-top: 50px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 57px;
  text-align: center;
  color: #000000;

  & .highlight {
    background: #4bf9ca;
    font-weight: 500;
  }

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
  }
`;

const BraintlyWord = styled.span`
  position: relative;

  &::after {
    display: block;
    height: 14px;
    content: " ";
    background-image: url(${WavyUnderlineImage});
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    left: 0;
  }
`;

const CultureBackgroundImage = styled.img``;

const CultureSection: React.FC = () => {
  return (
    <>
      <Container className="mt-5">
        <Title>
          We are <BraintlyWord>Braintly</BraintlyWord>
        </Title>
        <Subtitle>
          We are more than{" "}
          <Display on="mobile" />
          <span className="highlight">
            <RotativeText />
          </span>
          .
        </Subtitle>
      </Container>
      <div className="d-flex justify-content-center">
        <Display on="desktop">
          <CultureBackgroundImage
            src={CultureMainImage}
            className="img-fluid"
            alt="We are Braintly Image"
          />
        </Display>
        <Display on="mobile">
          <CultureBackgroundImage
            src={CultureMainMobileImage}
            className="img-fluid"
            alt="We are Braintly Image"
          />
        </Display>
      </div>
    </>
  );
};

export default CultureSection;
