import React from "react";

import DesignAndBuildImage from "../../../images/home-design.png";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import PlusIconImage from "../../../images/plus-icon.svg";

const Title = styled.h3`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 105px;
  text-align: right;

  color: #000000;

  & .build {
    letter-spacing: -3px;
  }

  & .ampersand {
    font-family: "Syne";
    font-style: normal;
    font-weight: 600;
    font-size: 230px;
    line-height: 225px;
    text-align: center;

    color: #000000;
  }
`;

const Description = styled.div``;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 121px;
  margin-top: -100px;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 154px;
`;

const StyledParagraph = styled.p`
  max-width: 538px;
  font-size: 22px;
`;

const StyledImg = styled.img`
  width: 567px;
`;

const DesignAndBuildSection: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6}>
          <Title className="d-flex">
            <div>
              <div className="design">Design</div>
              <div className="build">Build</div>
            </div>
            <div className="ampersand">&</div>
          </Title>
          <Description className="d-flex">
            <ImagesWrapper>
              <Images>
                <img src={PlusIconImage} alt="" />
                <img src={PlusIconImage} alt="" />
                <img src={PlusIconImage} alt="" />
              </Images>
            </ImagesWrapper>
            <StyledParagraph>
              Where art meets science. We create interfaces that are{" "}
              <strong>clever, clean & gutsy</strong>. Their most important
              quality: they are <strong>functionable</strong>. We develop{" "}
              <strong>user-centric</strong> products that create great
              experiences.
            </StyledParagraph>
          </Description>
        </Col>
        <Col className="d-flex justify-content-center">
          <StyledImg className="img-fluid" src={DesignAndBuildImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DesignAndBuildSection;
