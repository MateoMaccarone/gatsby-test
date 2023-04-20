import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import DesignUnderstanding from "../../../images/design-understanding.png";
import DesignIdeation from "../../../images/design-ideation.png";
import DesignIntrospection from "../../../images/design-introspection.png";
import WeStronglyBelieve from "./WeStronglyBelieve";
import DottedLine4 from "../../../images/lines/product-discovery-line-4.png";
import DottedLine3 from "../../../images/lines/product-discovery-line-3.png";
import HorizontalLine from "../../../images/lines/horizontal-line.png";
import Display from "../../Display";

const Title = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 68px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 45px;
    line-height: 68px;
    text-align: center;
  }
`;

const Box = styled.div`
  @media (max-width: 992px) {
    margin-bottom: 50px;
  }
`;

const BoxTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 4px;
  background: white;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 600;
    font-size: 19px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 4px;
    margin: 15px 0;
  }
`;
const BoxDescription = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
  }
`;

const Content1 = styled.div`
  margin-top: 60px;
`;

const Content2 = styled.div`
  margin-top: 80px;
`;

const HorizontalLineDiv = styled.div`
  background-image: url(${HorizontalLine});
  background-repeat: repeat-x;

  height: 3px;
  content: " ";
  position: absolute;

  left: 312px;
  width: 510px;
  top: 15px;
  z-index: 0;
`;

const StyledContainer = styled(Container)`
  margin-top: 80px;
`;

const DesignSection: React.FC = () => {
  return (
    <StyledContainer>
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Title>Design</Title>
        </Col>
      </Row>
      <Content1>
        <Row>
          <Col lg={1} className="d-none d-lg-flex justify-content-end">
            <div>
              <img
                className="d-none d-xxl-block"
                style={{ marginTop: "224px" }}
                src={DottedLine4}
                alt=""
              />
            </div>
          </Col>
          <Col lg={10}>
            <Row>
              <Col lg={9} className="position-relative">
                <Box>
                  <Display on="mobile">
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ width: "240px" }}
                        src={DesignUnderstanding}
                        alt=""
                      />
                    </div>
                  </Display>
                  <BoxTitle>Understanding</BoxTitle>
                  <Display on="desktop">
                    <HorizontalLineDiv
                      className="d-none d-xxl-block"
                      style={{ left: "300px" }}
                    />
                  </Display>
                  <BoxDescription>
                    At our core, we are storytellers. A story after all is what
                    stage for design. Before we decide what story to
                    tell, we listen to our users. We do this to get a
                    comprehensive idea of what users want and need.
                  </BoxDescription>
                </Box>
              </Col>
              <Col className="d-flex justify-content-end">
                <Display on="desktop">
                  <img
                    style={{
                      position: "relative",
                      top: "-80px",
                      width: "240px",
                    }}
                    className="img-fluid"
                    src={DesignUnderstanding}
                    alt=""
                  />
                </Display>
              </Col>
            </Row>
            <Row style={{ marginTop: "24px" }}>
              <Col lg={9} className="position-relative">
                <Box>
                  <Display on="mobile">
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ width: "240px" }}
                        src={DesignIdeation}
                        alt=""
                      />
                    </div>
                  </Display>
                  <BoxTitle>Ideation & Design</BoxTitle>
                  <Display on="desktop">
                    <HorizontalLineDiv
                      className="d-none d-xxl-block"
                      style={{ left: "300px" }}
                    />
                  </Display>
                  <BoxDescription>
                    Our process itself is highly interactive, using
                    whiteboards and other mediums for creation. Each decision we
                    make is challenged with the process of wireframing and
                    testing our designs. This allows us to validate any beyond
                    assumption, making sure that our best practices are consistently
                    improving.
                  </BoxDescription>
                </Box>
              </Col>
              <Col className="d-flex justify-content-end">
                <Display on="desktop">
                  <img
                    style={{
                      position: "relative",
                      top: "-50px",
                      width: "240px",
                    }}
                    className="img-fluid"
                    src={DesignIdeation}
                    alt=""
                  />
                </Display>
              </Col>
            </Row>
            <Row style={{ marginTop: "24px" }}>
              <Col lg={9} className="position-relative">
                <Box className="m-0">
                  <Display on="mobile">
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ width: "240px" }}
                        src={DesignIntrospection}
                        alt=""
                      />
                    </div>
                  </Display>
                  <BoxTitle>Introspection & Iteration</BoxTitle>
                  <Display on="desktop">
                    <HorizontalLineDiv
                      className="d-none d-xxl-block"
                      style={{ left: "400px", width: "420px" }}
                    />
                  </Display>
                  <BoxDescription>
                    We design, build, and observe–again and again. Our process
                    ensures the design remains relevant and accounts for the
                    end-user-experience. As we collaborate, we explode a partnership that goes beyond the initial launch.
                  </BoxDescription>
                </Box>
              </Col>
              <Col className="d-flex justify-content-end">
                <Display on="desktop">
                  <img
                    style={{
                      position: "relative",
                      top: "-50px",
                      width: "240px",
                    }}
                    className="img-fluid"
                    src={DesignIntrospection}
                    alt=""
                  />
                </Display>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <div>
              <Display on="desktop">
                <img
                  className="d-none d-xxl-block"
                  style={{ marginTop: "16px" }}
                  src={DottedLine3}
                  alt=""
                />
              </Display>
            </div>
          </Col>
        </Row>
      </Content1>
      <Content2>
        <WeStronglyBelieve />
      </Content2>
    </StyledContainer>
  );
};

export default DesignSection;
