import React from "react";
import { Col, Row } from "react-bootstrap";
import ArrowLeftImage from "../images/arrow-left.svg";
import styled from "styled-components";
import Display from "./Display";

const Title = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  display: flex;
  align-items: center;
  letter-spacing: 5px;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;
    display: flex;
    justify-content: space-between;
    max-width: 260px;
  }
`;

const Text = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-top: 18px;
  max-width: 650px;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
  }
`;

const Arrows = styled.div`
  display: flex;
  margin-left: 20px;

  & img {
    margin-right: 10px;
    height: 34px;

    @media (max-width: 992px) {
      margin-right: 5px;
      height: 22px;
    }
  }
`;

const WhyUsImage = styled.img`
  width: 390px;

  @media (max-width: 992px) {
    width: 240px;
    margin: 10px 0;
  }
`;

interface WhyUsSectionProps {
  text: React.ReactElement;
  image: string;
}

const WhyUsSection: React.FC<WhyUsSectionProps> = (props) => {
  return (
    <section className="container">
      <Row>
        <Col lg={5} className="d-flex justify-content-end">
          <Display on="desktop">
            <WhyUsImage src={props.image} alt="" />
          </Display>
        </Col>
        <Col
          lg={7}
          className="d-flex justify-content-center flex-column align-items-center align-items-xxl-start"
        >
          <Title>
            <div>Why us?</div>
            <Arrows>
              <img src={ArrowLeftImage} alt="" />
              <img src={ArrowLeftImage} alt="" />
              <img src={ArrowLeftImage} alt="" />
              <img src={ArrowLeftImage} alt="" />
            </Arrows>
          </Title>
          <Display on="mobile">
            <div className="d-flex justify-content-center">
              <WhyUsImage src={props.image} alt="" />
            </div>
          </Display>
          <Text>{props.text}</Text>
        </Col>
      </Row>
    </section>
  );
};

export default WhyUsSection;
