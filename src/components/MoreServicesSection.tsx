import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import GreenArrowRight from "./../images/arrow-right.svg";
import Display from "./Display";
import CustomCarousel from "./CustomCarousel";

const StyledMoreServicesSection = styled.section`
  margin-top: 120px;
`;

const Title = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 54px;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 80px;

  @media (max-width: 992px) {
    font-size: 30px;
  }

  color: #000000;
`;

const ServiceTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 3px;
  margin-top: 20px;

  color: #000000;

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const LearnMoreLink = styled.a`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;
  text-decoration-line: underline;

  color: #000000;

  &:hover {
    color: black !important;
    font-weight: 700;
  }
`;

const LearnMore = styled.div`
  &:hover {
    cursor: pointer;
  }

  & > img {
    margin-left: 5px;
    transition: all 0.4s ease;
    width: 16px !important;
    height: 16px;
  }

  &:hover > img {
    transform: translateX(8px);
  }
`;

const LearnMoreImage = styled.img`
  width: 420px;
  height: 300px;
`;

interface MoreServicesSectionProps {
  service1: {
    title: string;
    image: string;
    href: string;
  };
  service2: {
    title: string;
    image: string;
    href: string;
  };
}

const MoreServicesSection: React.FC<MoreServicesSectionProps> = (props) => {
  return (
    <StyledMoreServicesSection className="container">
      <Title>More Services</Title>
      <Display on="desktop">
        <Row>
          <Col lg={2}></Col>
          <Col lg={4} className="d-flex justify-content-center flex-column">
            <div className="d-flex justify-content-center">
              <a href={props.service1.href}>
                <LearnMoreImage src={props.service1.image} alt="" />
              </a>
            </div>
            <ServiceTitle>{props.service1.title}</ServiceTitle>
            <LearnMore className="d-flex justify-content-center mt-3">
              <LearnMoreLink href={props.service1.href}>
                Learn More
              </LearnMoreLink>
              <img src={GreenArrowRight} alt="" />
            </LearnMore>
          </Col>
          <Col lg={4} className="d-flex justify-content-center flex-column">
            <div className="d-flex justify-content-center">
              <a href={props.service2.href}>
                <LearnMoreImage src={props.service2.image} alt="" />
              </a>
            </div>
            <ServiceTitle>{props.service2.title}</ServiceTitle>
            <LearnMore className="d-flex justify-content-center mt-3">
              <LearnMoreLink href={props.service2.href}>
                Learn More
              </LearnMoreLink>
              <img src={GreenArrowRight} alt="" />
            </LearnMore>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Display>
      <Display on="mobile">
        <CustomCarousel widthControlDots="110px" arrows={true}>
          <div className="mb-4">
            <div className="d-flex justify-content-center">
              <img src={props.service1.image} alt="" />
            </div>
            <ServiceTitle>{props.service1.title}</ServiceTitle>
            <LearnMore className="d-flex justify-content-center mt-3">
              <LearnMoreLink href={props.service1.href}>
                Learn More
              </LearnMoreLink>
              <img src={GreenArrowRight} alt="" />
            </LearnMore>
          </div>
          <div className="mb-4">
            <div className="d-flex justify-content-center">
              <img src={props.service2.image} alt="" />
            </div>
            <ServiceTitle>{props.service2.title}</ServiceTitle>
            <LearnMore className="d-flex justify-content-center mt-3">
              <LearnMoreLink href={props.service2.href}>
                Learn More
              </LearnMoreLink>
              <img src={GreenArrowRight} alt="" />
            </LearnMore>
          </div>
        </CustomCarousel>
      </Display>
    </StyledMoreServicesSection>
  );
};

export default MoreServicesSection;
