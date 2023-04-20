import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

import ServiceSupport from "../../../images/scale-support.png";
import ServiceDevops from "../../../images/scale-dev.png";
import ServiceScale from "../../../images/scale-scale.png";
import ServiceStaffAugmentation from "../../../images/scale-staff.png";

import CaretDown from "../../../images/chevron-down.svg";
import UnderliningTitle from "./UnderliningTitle";
import Display from "../../Display";
import CustomCarousel from "../../CustomCarousel";
import TiltedText from "./TiltedTitle";
import AnimatedHighlight from "../../Animations/AnimatedHighlight/AnimatedHighlight";

const StyledTakeYourProjectSection = styled.section``;

const Title = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 89px;
  text-align: left;
  margin-bottom: 40px;
  margin-top: 120px;
  color: #000000;

  & .margin-left {
    margin-left: 100px;
  }

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 45px;
    line-height: 57px;
    text-align: center;
    max-width: 315px;

    & .margin-left {
      margin-left: 0;
    }
  }
`;

const Text = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  max-width: 570px;
  margin: 0;

  @media (max-width: 992px) {
    max-width: 251px;
    margin-left: 20px;
    font-size: 17px;
  }
`;

const ServiceTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 4px;

  color: #000000;
`;

const ServiceText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-size: 18px;

  text-align: center;
  max-width: 460px;

  color: #000000;

  @media (max-width: 992px) {
    font-size: 15px;
  }
`;

const ContainerWithMargin = styled(Container)`
  margin-top: 120px;
`;

const StyledChevronDown = styled.img`
  width: 30px;
`;

const Arrows = styled.div`
  margin-top: 20px;
`;

const Section = styled.div`
  display: flex;
  margin: 80px 0;
`;

const Column1 = styled.div`
  width: 55px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const ServiceImg = styled.img`
  width: 420px;
  height: 300px;
`;

const TakeYourProjectSection: React.FC = () => {
    return (
        <StyledTakeYourProjectSection className="container">
            <Row>
                <Col lg={9} className="d-flex justify-content-center">
                    <Title>
                        <div>Take your project</div>
                        <div className="margin-left">
                            to the next{" "}
                            <AnimatedHighlight>
                                <strong>tech</strong> level.
                            </AnimatedHighlight>
                        </div>
                    </Title>
                </Col>
                <Col lg={1} className="justify-content-end d-none d-lg-flex">
                    <Arrows className="d-flex flex-column">
                        <StyledChevronDown src={CaretDown} alt="Caret Down"/>
                        <StyledChevronDown src={CaretDown} alt="Caret Down"/>
                        <StyledChevronDown src={CaretDown} alt="Caret Down"/>
                        <StyledChevronDown src={CaretDown} alt="Caret Down"/>
                    </Arrows>
                </Col>
            </Row>
            <div>
                <Display on="desktop">
                    <Container>
                        <div className="row py-4 g-5">
                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>PMaaS</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    Project Management as a Service. This is simple: Project
                                    Ownership. We get involved in your business, we understand
                                    and learn about it. It's not always about the requirements needed, but solutions
                                    that bring results.
                                </Text>
                            </div>
                        </div>
                        <div className="row py-4 g-5">
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>Versatile</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    Our team works in conjunction with your work pace, merging cultures and
                                    methodologies, to get the job done.
                                </Text>
                            </div>
                        </div>
                        <div className="row py-4 g-5">
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>Flexible</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    You are able to adjust the project’s requirements based on the
                                    changing business market. This way, there’s no need to
                                    renegotiate scopes of fixed prices, bu putting focus on the product, not the
                                    negotiation. It's a matter of shifting and prioritizing.
                                </Text>
                            </div>
                        </div>
                        <div className="row py-4 g-5">
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>Better</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    Building things that are really important for the product is key. Sometimes
                                    the priorities are not the same as they were at the
                                    beginning of the project. It's a case of prioritizing and iterating.
                                </Text>
                            </div>
                        </div>
                        <div className="row py-4 g-5">
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>Faster</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    Nailing all features of a product is almost impossible. The time and
                                    materials model allows you to start quickly and move at an
                                    accelerated pace while working on details along the way.
                                </Text>
                            </div>
                        </div>
                        <div className="row py-4 g-5">
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <UnderliningTitle>Transparency</UnderliningTitle>
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <Text>
                                    This allows you to track progress and know exactly where the team
                                    is at any point. Discussing every sprint, setting priorities, ends up with a better
                                    product; reducing business risk.
                                </Text>
                            </div>
                        </div>
                    </Container>
                </Display>
                <Display on="mobile">
                    <Section>
                        <Column1>
                            <TiltedText>PMaaS</TiltedText>
                        </Column1>
                        <Text>
                            Project Management as a Service. This is simple: Project
                            Ownership. We get involved in your business, we understand
                            and learn about it. It's not always about the requirements needed, but solutions that bring
                            results.
                        </Text>
                    </Section>
                    <Section>
                        <Column1>
                            <TiltedText>Versatile</TiltedText>
                        </Column1>
                        <Text>
                            Our team works in conjunction with your work pace, merging cultures and methodologies, to
                            get the job done.
                        </Text>
                    </Section>
                    <Section>
                        <Column1>
                            <TiltedText>Flexible</TiltedText>
                        </Column1>
                        <Text>
                            You are able to adjust the project’s requirements based on the
                            changing business market. This way, there’s no need to
                            renegotiate scopes of fixed prices, bu putting focus on the product, not the
                            negotiation. It's a matter of shifting and prioritizing.
                        </Text>
                    </Section>
                    <Section>
                        <Column1>
                            <TiltedText>Better</TiltedText>
                        </Column1>
                        <Text>
                            Building things that are really important for the product is key. Sometimes
                            the priorities are not the same as they were at the
                            beginning of the project. It's a case of prioritizing and iterating.
                        </Text>
                    </Section>
                    <Section>
                        <Column1>
                            <TiltedText>Faster</TiltedText>
                        </Column1>
                        <Text>
                            Nailing all features of a product is almost impossible. The time and
                            materials model allows you to start quickly and move at an
                            accelerated pace while working on details along the way.
                        </Text>
                    </Section>
                    <Section style={{marginTop: "150px"}}>
                        <Column1>
                            <TiltedText>Transparency</TiltedText>
                        </Column1>
                        <Text>
                            This allows you to track progress and know exactly where the team
                            is at any point. Discussing every sprint, setting priorities, ends up with a better product;
                            reducing business risk.
                        </Text>
                    </Section>
                </Display>
            </div>
            <ContainerWithMargin>
                <Display on="desktop">
                    <Row>
                        <Col md={6}>
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <ServiceImg src={ServiceSupport} alt=""/>
                                <ServiceTitle>Support</ServiceTitle>
                                <ServiceText>
                                    We help our clients with everything from start-up to upkeep,
                                    assisting in app, frontend and backend optimization; hosting,
                                    maintenance and more, making launch a stress-free experience.
                                </ServiceText>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <ServiceImg src={ServiceDevops} alt=""/>
                                <ServiceTitle>DevOps</ServiceTitle>
                                <ServiceText>
                                    Our build, test and release process is streamlined via
                                    continuous integration and continuous delivery. Our CI
                                    pipeline includes the checks that guarantee quality and
                                    stability, while an Infrastructure-as-Code approach enables
                                    scalability.
                                </ServiceText>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div
                                style={{marginTop: "100px"}}
                                className="d-flex justify-content-center flex-column align-items-center"
                            >
                                <ServiceImg src={ServiceScale} alt=""/>
                                <ServiceTitle>Scale</ServiceTitle>
                                <ServiceText>
                                    Our strategic partnerships see us work with clients over the
                                    long-term to help them iterate and develop their product, as
                                    well as identifying how tech can solve other problems your
                                    company may face.
                                </ServiceText>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div
                                style={{marginTop: "100px"}}
                                className="d-flex justify-content-center flex-column align-items-center"
                            >
                                <ServiceImg src={ServiceStaffAugmentation} alt=""/>
                                <ServiceTitle>Staff Augmentation</ServiceTitle>
                                <ServiceText>
                                    If your existing team just needs more hands on deck, we can provide
                                    you with collaborators: Project Leaders, Developers,
                                    Designers, QA, DevOps, among others. This makes it easier for teams and growing
                                    teams that may need some extra help for specific projects.
                                </ServiceText>
                            </div>
                        </Col>
                    </Row>
                </Display>
                <Display on="mobile">
                    <CustomCarousel>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <img src={ServiceSupport} alt=""/>
                            <ServiceTitle>Support</ServiceTitle>
                            <ServiceText>
                                We help our clients with everything from start-up to upkeep,
                                assisting in app, frontend and backend optimization; hosting,
                                maintenance and more, making launch a stress-free experience.
                            </ServiceText>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <img src={ServiceDevops} alt=""/>
                            <ServiceTitle>DevOps</ServiceTitle>
                            <ServiceText>
                                Our build, test and release process is streamlined via
                                continuous integration and continuous delivery. Our CI pipeline
                                includes the checks that guarantee quality and stability, while
                                an Infrastructure-as-Code approach enables scalability.
                            </ServiceText>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <img src={ServiceScale} alt=""/>
                            <ServiceTitle>Scale</ServiceTitle>
                            <ServiceText>
                                Our strategic partnerships see us work with clients over the
                                long-term to help them iterate and develop their product, as
                                well as identifying how tech can solve other problems your
                                company may face.
                            </ServiceText>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <img src={ServiceStaffAugmentation} alt=""/>
                            <ServiceTitle>Staff Augmentation</ServiceTitle>
                            <ServiceText>
                                If your existing team just needs more hands on deck, we can provide
                                you with collaborators: Project Leaders, Developers,
                                Designers, QA, DevOps, among others. This makes it easier for teams and growing
                                teams that may need some extra help for specific projects.
                            </ServiceText>
                        </div>
                    </CustomCarousel>
                </Display>
            </ContainerWithMargin>
        </StyledTakeYourProjectSection>
    );
};

export default TakeYourProjectSection;
