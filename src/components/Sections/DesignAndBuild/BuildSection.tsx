import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import BuildImage from "../../../images/build.png";
import NinjaDevImage from "../../../images/ninja-dev.png";
import Technologies from "./Technologies";

const StyledContainer = styled(Container)`
  margin-top: 160px;

  @media (max-width: 992px) {
    margin-top: 60px;
  }
`;

const Title = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 68px;
  color: #000000;
  margin-bottom: 35px;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 45px;
    line-height: 68px;
    text-align: center;
  }
`;

const Box = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const BoxTitle = styled.h2`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 4px;

  color: #000000;

  @media (max-width: 992px) {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 4px;
  }
`;

const BoxDescription = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  @media (max-width: 992px) {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    text-align: center;
    padding: 2px 12px;
  }
`;

const BuildSection: React.FC = () => {
  return (
    <StyledContainer>
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Title>Build</Title>
          <Row>
            <Col lg={5}>
              <img className="img-fluid" src={BuildImage} alt="" />
            </Col>
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Box>
                <BoxTitle>Web & Mobile Solutions</BoxTitle>
                <BoxDescription>
                  Software development is in our DNA. Our teams are
                  finely tuned machines that turn our dreams into high-quality,
                  reliable products used by millions of users.
                </BoxDescription>
              </Box>
            </Col>
          </Row>
          <Box style={{ marginTop: "45px" }}>
            <BoxTitle>Technologies</BoxTitle>
            <BoxDescription>
              We employ a wealth of{" "}
              <strong>tools and have years of product experience</strong> choosing
              the right tech to achieve the goals of each project. Our web and
              mobile development team has a diverse toolbox of specialties that
              can fit your unique project, including:
            </BoxDescription>
          </Box>
          <Technologies />
          <Row
            className="flex-row-reverse flex-column-reverse flex-md-row-reverse"
            style={{ marginTop: "65px" }}
          >
            <Col lg={5} className="d-flex justify-content-center">
              <div>
                <img className="img-fluid" src={NinjaDevImage} alt="" />
              </div>
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-center align-items-center"
            >
              <Box>
                <BoxTitle>End-to-end Product Development</BoxTitle>
                <BoxDescription>
                  A digital product is much more than meets the eye. Our
                  expertise will maximize the impact of your solution from both
                  a design and development perspective. We pride ourselves in
                  our knowledge of getting projects to scale, while enhancing performance and accessibility.
                </BoxDescription>
              </Box>
            </Col>
          </Row>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </StyledContainer>
  );
};

export default BuildSection;
