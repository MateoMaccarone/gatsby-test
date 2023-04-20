import * as React from 'react'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap";

import useWidth from "../../../../hooks/useWidth";
import AnimatedNumbers from "../../../Animations/AnimatedNumbers/AnimatedNumbers";

import LogoImage from '../../../../images/successfull-cases/cases/decreditos/logo.png'
import HeroImage from '../../../../images/successfull-cases/cases/decreditos/hero.png'
import Separator from "../../../../images/separator1.svg";

const MainSection = styled.section`
  position: relative;
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 85px;
  line-height: 102px;
  margin-top: 80px;
  color: #000000;
  
  @media(max-width: 1024px) {
    font-size: 70px;
    line-height: 90px;
  }
  
  @media (max-width: 992px) {
    font-size: 50px;
    line-height: 60px;
    padding: 0 30px;
    margin-top: 40px;
    margin-bottom: 0;

    p {
      max-width: 313px;
    }
  }
  
  .custom--margin {
    margin: 0 35px 0 0;
    
    @media (max-width: 1024px) {
      margin: 0;
    }
  }
`;

const StyledLogo = styled.img`
  width: 230px;
`

const StyledHeroWrapper = styled.div``

const StyledHero = styled.img`
  width: 446px;
`

const StyledBorder = styled.div`
  background-image: url(${Separator});
  width: 100%;
  height: 40px;
  background-size: cover;
  background-repeat: repeat-x;
  margin-top: 150px;

  @media (max-width: 992px) {
    margin-top: 85px;
  }
`;

const StyledContent = styled.div`
  height: 400px;
  width: 100%;
  background-color: #000;
  
  @media (max-width: 1024px) {
    margin: -2px 0 0 0;
  }

  span {
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 108px;
    text-align: center;
    color: #FFFFFF;
  }

  .custom--left--col {
    margin: 0 0 0 60px;
  }

  .custom--right--col {
    margin: 0 90px 0 0;

    @media (max-width: 1400px) {
      margin: 0;
      width: 500px;
      justify-content: center;
    }
  }
`

const StyledTitle = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;
  letter-spacing: 5px;
  color: #fff;
  
  @media (min-width: 992px) and (max-width: 1350px) {
    font-size: 28px;
    line-height: 40px;
  }
`

const StyledParagraph = styled.p`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #fff;

  @media (min-width: 992px) and (max-width: 1350px) {
    font-size: 16px;
    line-height: 28px;
  }
`

const StyledSubtitle = styled.div`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #000;
  text-align: center;
  
  margin-top: 11px !important;
  width: 322px !important;
  background-color: #48FFCB;
`

const StyledCol = styled(Col)`
  margin: 0 0 0 74px;
  
  p {
    width: 600px;
    
    @media (max-width: 1024px) {
      width: 490px;
    }
  }
`

const HeroDesktop = () => {
    const { width } = useWidth()
    return (
        <div>
            <MainSection className="container">
                <Row className="d-flex justify-content-center gap-5">
                    <Col md={4} className="d-flex align-items-center">
                        <StyledHeroWrapper>
                            <StyledHero src={HeroImage} alt="App"/>
                        </StyledHeroWrapper>
                    </Col>
                    <StyledCol md={6} className="d-flex align-items-center">
                        <div className='custom--margin'>
                            <StyledLogo src={LogoImage} alt="Decreditos logo"/>
                            <p>
                                Online loans,
                                <br />
                                made easy.
                            </p>
                        </div>
                    </StyledCol>
                </Row>
            </MainSection>
            <StyledBorder />
            <StyledContent className="d-flex flex-column justify-content-center">
                <Row className="d-flex justify-content-between" style={{margin: '0'}}>
                    <Col md={5} className="d-flex align-items-center flex-column custom--left--col">
                        {
                            width === 1210 ?
                                (
                                    <div>
                                        <StyledTitle>
                                            Financing can be simple and quick.
                                        </StyledTitle>
                                        <StyledParagraph>
                                            Leader in the used car loan market for over 20 years, Decreditos offers a digital ecosystem with comprehensive solutions: get a 100% online loan, ask for a quote or buy insurance all in one place.
                                        </StyledParagraph>
                                    </div>
                                ) : (
                            <div>
                                <StyledTitle>
                                    Financing can be simple <br/>
                                    and quick.
                                </StyledTitle>
                                <StyledParagraph>
                                    Leader in the used car loan market for over 20 years, Decreditos <br/>
                                    offers a digital ecosystem with comprehensive solutions: get a 100% <br/>
                                    online loan, ask for a quote or buy insurance all in one place.
                                </StyledParagraph>
                            </div>
                            )
                        }
                    </Col>
                    <Col md={4} className="d-flex align-items-center flex-column custom--right--col">
                        <Row>
                            <Col>
                                <span>+</span>
                            </Col>
                            <Col>
                                <Row>
                                    <AnimatedNumbers
                                        once
                                        from={75000}
                                        to={85000}
                                        offset={{top: 0}}
                                        style={{
                                            fontFamily: 'Syne',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            fontSize: '90px',
                                            lineHeight: '108px',
                                            color: '#fff'
                                        }}
                                    />
                                </Row>
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

export default HeroDesktop
