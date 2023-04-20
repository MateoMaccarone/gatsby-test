import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

import DottedLine1 from "../../../images/discovery-process-dotted-line-1.png";
import DottedLine3 from "../../../images/lines/product-discovery-line-3.png";
import DottedLine4 from "../../../images/lines/product-discovery-line-4.png";
import HorizontalLine from "../../../images/lines/horizontal-line.png";

import DiscoveryResearch from "../../../images/discovery-research.png";
import DiscoverySprint from "../../../images/discovery-sprint.png";
import DiscoveryStrategy from "../../../images/discovery-strategy.png";
import DiscoveryInnovation from "../../../images/discovery-innovation.png";
import Display from "../../Display";

const StyledContainer = styled(Container)`
  margin-top: 145px;
  position: relative;

  & .dotted-line-1 {
    position: absolute;
    top: 38px;
    left: 55px;
  }

  @media (max-width: 992px) {
    margin-top: 80px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 68px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 45px;
    line-height: 43px;
    text-align: center;
  }
`;

const SectionDescription = styled.div`
  margin-top: 16px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    text-align: center;
  }
`;

const ItemTitle = styled.h3`
  background: white;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 4px;
  color: #000000;

  @media (max-width: 992px) {
    font-size: 19px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 4px;
    margin-top: 12px;
  }
`;

const ItemText = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0;
  }
`;

const ItemList = styled.div`
  margin-top: 90px;

  @media (max-width: 992px) {
    margin-top: 60px;
  }
`;

const HorizontalLineDiv = styled.div`
  background-image: url(${HorizontalLine});
  background-repeat: repeat-x;

  height: 3px;
  content: " ";

  left: 312px;
  width: 361px;
  position: absolute;
  top: 15px;
`;

const ServiceImage = styled.img`
  width: 210px;
  height: 170px;
`;

const TheDiscoveryProcessSection: React.FC = () => {
    return (
        <StyledContainer>
            <Row style={{height: "250px"}} className="text-sm-center text-lg-start">
                <Col xxl={1} lg={0} md={0} xs={0}></Col>
                <Col xxl={5} lg={6}>
                    <SectionTitle>The Discovery Process</SectionTitle>
                    <img
                        className="d-none d-xxl-block dotted-line-1"
                        src={DottedLine1}
                        alt=""
                    />
                </Col>
                <Col xxl={5} lg={6}>
                    <SectionDescription>
                        The discovery process enables us to review your business, plan and
                        present relevant research and understand your brand before we identify
                        the most suitable solutions to problems. Ultimately, this helps us
                        to answer strategic questions concerning your product vision, target
                        market and more.
                    </SectionDescription>
                </Col>
            </Row>
            <ItemList>
                <Row>
                    <Col xxl={2} md={0} xs={0} className="d-flex justify-content-end">
                        <div>
                            <img
                                className="d-none d-xxl-block "
                                style={{marginTop: "220px"}}
                                src={DottedLine4}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col xxl={8}>
                        <Row>
                            <Col lg={8} className="position-relative">
                                <Display on="mobile">
                                    <div className="d-flex justify-content-center">
                                        <ServiceImage src={DiscoveryResearch} alt=""/>
                                    </div>
                                </Display>
                                <ItemTitle>Research & Insight</ItemTitle>
                                <HorizontalLineDiv className="d-none d-xxl-block "/>
                                <ItemText>
                                    Our team works with you to thoroughly understand your business,
                                    customers and challenges before delivering our solutions and
                                    suggestions.
                                </ItemText>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-end">
                                <Display on="desktop">
                                    <ServiceImage
                                        style={{position: "relative", top: "-60px"}}
                                        src={DiscoveryResearch}
                                        alt=""
                                    />
                                </Display>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "36px"}}>
                            <Col lg={8} className="position-relative">
                                <Display on="mobile">
                                    <div className="d-flex justify-content-center">
                                        <ServiceImage src={DiscoverySprint} alt=""/>
                                    </div>
                                </Display>
                                <ItemTitle>Design Sprint</ItemTitle>
                                <HorizontalLineDiv className="d-none d-xxl-block "/>
                                <ItemText>
                                    A custom-phase exercise takes place to identify the best solutions to business
                                    challenges, allowing us to develop, test and learn from a prototype quickly
                                </ItemText>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-end">
                                <Display on="desktop">
                                    <ServiceImage
                                        style={{position: "relative", top: "-70px"}}
                                        src={DiscoverySprint}
                                        alt=""
                                    />
                                </Display>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "32px"}}>
                            <Col lg={8} className="position-relative">
                                <Display on="mobile">
                                    <div className="d-flex justify-content-center">
                                        <ServiceImage src={DiscoveryStrategy} alt=""/>
                                    </div>
                                </Display>
                                <ItemTitle>Product Strategy</ItemTitle>
                                <HorizontalLineDiv className="d-none d-xxl-block "/>
                                <ItemText>
                                    We work with you to create a roadmap, that defines your expectations, ensuring that
                                    your product is more than just a set of features, but adds real value to your users.
                                </ItemText>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Display on="desktop">
                                    <ServiceImage
                                        style={{position: "relative", top: "-50px"}}
                                        src={DiscoveryStrategy}
                                        alt=""
                                    />
                                </Display>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "36px"}}>
                            <Col lg={8} className="position-relative">
                                <Display on="mobile">
                                    <div className="d-flex justify-content-center">
                                        <ServiceImage src={DiscoveryInnovation} alt=""/>
                                    </div>
                                </Display>
                                <ItemTitle>Innovation Lab</ItemTitle>
                                <HorizontalLineDiv className="d-none d-xxl-block "/>
                                <ItemText>
                                    We help you test and understand how your business can embrace
                                    emerging technologies to solve your current and future
                                    challenges.
                                </ItemText>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Display on="desktop">
                                    <ServiceImage
                                        style={{position: "relative", top: "-48px"}}
                                        src={DiscoveryInnovation}
                                        alt=""
                                    />
                                </Display>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="d-none d-xxl-block" xxl={2} md={0} xs={0} sm={0}>
                        <div>
                            <img style={{marginTop: "12px"}} src={DottedLine3} alt=""/>
                        </div>
                        <div>
                            <img style={{marginTop: "200px"}} src={DottedLine3} alt=""/>
                        </div>
                    </Col>
                </Row>
            </ItemList>
        </StyledContainer>
    );
};

export default TheDiscoveryProcessSection;
