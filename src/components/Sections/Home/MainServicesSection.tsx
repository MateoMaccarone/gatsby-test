import * as React from "react";
import styled from "styled-components";

import DiscoveryMainImage from "../../../images/discovery-main.png";
import DesignMainImage from "../../../images/design-main.png";
import ScaleMainImage from "../../../images/scale-main.png";

import DottedLine1 from "../../../images/dotted-line-1.png";
import DottedLine2 from "../../../images/dotted-line-2.png";
import DottedLine3 from "../../../images/dotted-line-3.png";

import GreenArrowRight from "../../../images/arrow-right.svg";

import { Col, Row } from "react-bootstrap";
import LearnMoreButton from "../../LearnMoreButton";
import Display from "../../Display";
import { Element } from "react-scroll";

const MainServiceSectionStyled = styled.section`
  margin-top: 160px;

  @media (max-width: 992px) {
    margin-top: 0;
  }

  h3 {
    margin-bottom: 16px;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 54px;
    letter-spacing: 5px;

    @media (max-width: 992px) {
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 5px !important;
      max-width: 315px;
    }
  }

  p {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    max-width: 500px;

    @media (max-width: 992px) {
      font-size: 15px;
    }
  }

  .row-margin {
    @media (max-width: 992px) {
      margin-top: 80px;
    }
  }

  .negative {
    background: black;
    color: white;
    padding: 1px 3px;
  }

  .dotted-line-1 {
    margin-left: 385px;
  }

  .dotted-line-2 {
    margin-left: -82px;
  }

  .dotted-line-3 {
    margin-left: -72px;
  }
`;

const Title = styled.h2`
  @media (max-width: 992px) {
    font-size: 45px;
    margin-bottom: 60px;
    margin-left: 0;
    text-align: center;
    line-height: 57px;
    max-width: 312px;
  }

  margin-left: 95px;
  font-size: 70px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  line-height: 89px;

  max-width: 601px;
`;

const ServiceImage = styled.img`
  width: 420px;

  @media (max-width: 992px) {
    width: 320px;
  }
`;

const MainServicesSection = () => {
  return (
    <MainServiceSectionStyled className="container">
      <Element name="what-we-bring-to-the-table">
        <Display on="desktop">
          <Title>What we bring to the table</Title>
        </Display>
        <Display on="mobile">
          <div className="d-flex justify-content-center">
            <Title>What we bring to the table</Title>
          </div>
        </Display>
        <Row className="d-none d-lg-block">
          <Col md={6}>
            <div className="dotted-line dotted-line-1 d-flex justify-content-center">
              <img src={DottedLine1} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="d-flex justify-content-center">
            <ServiceImage src={DiscoveryMainImage} alt="" />
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h3>Discovery.</h3>
            <p>
              <span className="negative">Let’s bring your ideas to life!</span>{" "}
              We mitigate risk by doing the necessary research and planning. Our
              multidisciplinary team craft the most suitable solutions, by creating
              beautiful and usable products.
            </p>
            <LearnMoreButton href="/product-discovery" />
          </Col>
        </Row>
        <Row className="d-none d-lg-block">
          <Col md={6}>
            <div className="dotted-line dotted-line-2 d-flex justify-content-center">
              <img src={DottedLine2} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="row-margin">
          <Col lg={6} className="d-flex justify-content-center">
            <ServiceImage src={DesignMainImage} alt="" />
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h3>Design & Build.</h3>
            <p>
              We design and build{" "}
              <span className="negative">
                digital products that people love
              </span>
              . They are attractive and enjoyble, but most importantly, they are
              functionable. We offer our clients user-centric web and mobile
              development.
            </p>
            <LearnMoreButton href="/design-and-build" />
          </Col>
        </Row>
        <Row className="d-none d-lg-block">
          <Col md={6}>
            <div className="dotted-line dotted-line-3 d-flex justify-content-center">
              <img src={DottedLine3} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="row row-margin">
          <Col lg={6} className="d-flex justify-content-center">
            <ServiceImage src={ScaleMainImage} alt="" />
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h3>Scale & Growth.</h3>
            <p>
              This is what we call our ‘Braintly Plug’. After the product is
              launched, we continue collaborating to keep the project growing.
              <span className="negative">
                Take your project to the next tech level!
              </span>
            </p>
            <LearnMoreButton href="/scale-growth" />
          </Col>
        </Row>
      </Element>
    </MainServiceSectionStyled>
  );
};

export default MainServicesSection;
