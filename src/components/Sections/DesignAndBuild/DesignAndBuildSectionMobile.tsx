import React from "react";

import DesignAndBuildImage from "../../../images/home-design.png";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import PlusIconImage from "../../../images/plus-icon.svg";

const Title = styled.h3`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 66px;
  text-align: right;

  color: #000000;

  & .build {
    letter-spacing: -3px;
  }

  & .ampersand {
    font-family: "Syne";
    font-style: normal;
    font-weight: 600;
    font-size: 140px;
    line-height: 140px;
    text-align: center;

    color: #000000;
  }
`;

const Description = styled.div``;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 72px;
  margin-top: -66px;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 154px;
`;

const StyledParagraph = styled.p`
  max-width: 251px;
  text-align: center;
  margin-top: -8px;
  line-height: 34px;
`;

const StyledImg = styled.img`
  width: 315px;
`;

const DesignAndBuildSectionMobile: React.FC = () => {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <StyledImg src={DesignAndBuildImage} alt="" />
      </div>
      <Title className="d-flex justify-content-center">
        <div>
          <div className="design">Design</div>
          <div className="build">Build</div>
        </div>
        <div className="ampersand">&</div>
      </Title>
      <Description className="d-flex justify-content-center">
        <ImagesWrapper>
          <Images>
            <img src={PlusIconImage} alt="" />
            <img src={PlusIconImage} alt="" />
            <img src={PlusIconImage} alt="" />
          </Images>
        </ImagesWrapper>
        <StyledParagraph>
          Where art meets science. We create interfaces that are{" "}
          <strong>clever, clean & gutsy</strong>. Their most important quality:
          they are <strong>functionable</strong>. We develop{" "}
          <strong>user-centric</strong> products that generate great
          experiences.
        </StyledParagraph>
      </Description>
    </Container>
  );
};

export default DesignAndBuildSectionMobile;
