import * as React from 'react'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap";

import AnimatedNumbers from "../../../Animations/AnimatedNumbers/AnimatedNumbers";

import LogoImage from '../../../../images/successfull-cases/cases/decreditos/logo.png'
import HeroImage from '../../../../images/successfull-cases/cases/decreditos/hero.png'
import Separator from "../../../../images/separator1.svg";

const MainSection = styled.section`
  position: relative;
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  margin-top: 52px;
  padding: 0 60px;
  text-align: center;
  color: #000000;
`;

const StyledLogo = styled.img`
  width: 180px;
  margin-bottom: 30px;
`

const StyledHero = styled.img`
  width: 334px;
  margin-top: 38px;
`

const StyledBorder = styled.div`
  background-image: url(${Separator});
  width: 100%;
  height: 40px;
  background-size: cover;
  background-repeat: repeat-x;
  margin-top: 50px;
  margin-bottom: -3px;
`;

const StyledContent = styled.div`
  height: 542px;
  width: 100%;
  background-color: #000;
  
  span {
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 400px;
  }
`

const StyledTitle = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 5px;
  text-align: center;
  color: #fff;
  max-width: 320px;
  margin: 0 10px 0 10px;
`

const StyledParagraph = styled.p`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  margin: 22px 30px 30px 30px;
  
  @media (max-width: 375px) {
    margin: 22px 22px 30px 22px;
  }
`

const StyledSubtitle = styled.div`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000;
  text-align: center;
  
  margin-top: 8px !important;
  width: 254px !important;
  background-color: #48FFCB;
`

const Hero = () => {
    return (
        <div>
            <MainSection className="container">
                <Row className="d-flex justify-content-between flex-sm-row-reverse">
                    <Col md={6} className="d-flex align-items-center flex-column align-items-sm-center align-items-md-start justify-content-sm-center">
                            <StyledLogo src={LogoImage} alt="Decreditos logo"/>
                            <p>
                                Online loans, made easy.
                            </p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column">
                        <div>
                            <StyledHero src={HeroImage} alt="App"/>
                        </div>
                    </Col>
                </Row>
            </MainSection>
            <StyledBorder />
            <StyledContent className="d-flex flex-column justify-content-center">
                <Row className="d-flex justify-content-between" style={{margin: '0'}}>
                    <Col md={6} className="d-flex align-items-center flex-column" style={{margin: '0 0 29px 0'}}>
                        <StyledTitle>
                            Financing can be simple and quick.
                        </StyledTitle>
                        <StyledParagraph>
                            Leader in the used car loan market for over 20 <br/> years, Decreditos offers a digital ecosystem <br/> with comprehensive solutions: get a 100% <br/> online loan, ask for a quote or buy insurance all <br/> in one place.
                        </StyledParagraph>
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column justify-content-sm-center">
                        <Row>
                            <Col>
                                <span>+</span>
                            </Col>
                            <Col>
                                <AnimatedNumbers
                                    once
                                    from={75000}
                                    to={85000}
                                    style={{
                                        fontFamily: 'Syne',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '60px',
                                        lineHeight: '72px',
                                        color: '#fff'
                                    }}
                                />
                            </Col>
                        </Row>
                        <StyledSubtitle>
                            fully online loans, and counting
                        </StyledSubtitle>
                    </Col>
                </Row>
            </StyledContent>
        </div>
    )
}

export default Hero
