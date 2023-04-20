import * as React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

import Display from '../../../Display'
import AnimatedIcon from "../../../Animations/AnimatedIcon/AnimatedIcon";
import AnimatedHighlight from "../../../Animations/AnimatedHighlight/AnimatedHighlight";

import Arrows from '../../../../images/successfull-cases/cases/decreditos/arrows.png'
import BoxDesktop from '../../../../images/successfull-cases/cases/decreditos/box desktop.svg'
import BoxMobile from '../../../../images/successfull-cases/cases/decreditos/box mobile.svg'
import DottedLineLong from '../../../../images/successfull-cases/cases/decreditos/dotted line long.svg'
import DottedLineShort from '../../../../images/successfull-cases/cases/decreditos/dotted line short.svg'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 0 0 128px 0;
`

const StyledTop = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9BA9A7;
  
  margin: 80px 0 0 0;
`

const StyledHeader = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 54px;
  text-align: center;
  color: #000000;
  
  margin: 17px 0 0 0;

  @media (max-width: 992px) {
    font-size: 30px;
    line-height: 38px;
  }
`

const StyledArrows = styled(AnimatedIcon)`
  margin: 52.5px 0 0 0;
   
  @media (max-width: 992px) {
    width: 40px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 89px;
  text-align: center;
  color: #000000;
  
  margin: 87px 0 0 0;

  @media (max-width: 992px) {
    font-size: 45px;
    line-height: 57px;
  }
`

const StyledBoxDesktop = styled.img`
  margin: -19px 0 0 0;
  width: 563px;
`

const StyledBoxMobile = styled.img`
  margin: -19px 0 0 0;
  width: 315px;
`

const StyledDottedLineLong = styled.img`
  height: 67px;
`

const StyledDottedLineShort = styled.img`
  height: 37.5px;
`

const StyledContent = styled.p`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  
  margin: 16px 0;

  span {
    font-weight: 700;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 22px;
  }
`

const Goal = () => {
    return (
        <StyledMain>
            <Col className="d-flex flex-column justify-content-center align-items-center">
                <StyledTop>Our Goal</StyledTop>
                <Display on='desktop'>
                    <StyledHeader>Achieving cultural and <br/>technological <AnimatedHighlight offset={700}>transformation.</AnimatedHighlight></StyledHeader>
                </Display>
                <Display on='mobile'>
                    <StyledHeader>Achieving cultural<br/>and technological<br/><AnimatedHighlight offset={700}>transformation.</AnimatedHighlight></StyledHeader>
                </Display>
                <StyledArrows type='BounceDown' duration='2s' src={Arrows} alt='Arrows' />
                <StyledTitle>Walk the talk</StyledTitle>
                <Display on="desktop">
                    <StyledBoxDesktop src={BoxDesktop} alt="Box"/>
                </Display>
                <Display on="mobile">
                    <StyledBoxMobile src={BoxMobile} alt="Box"/>
                </Display>
                <StyledDottedLineLong src={DottedLineLong} alt="Dotted Line Long"/>
                <StyledContent>Working together <span>since 2015.</span></StyledContent>
                <StyledDottedLineShort src={DottedLineShort} alt="Dotted Line Short"/>
                <StyledContent>We became their tech partner!<br/><span>Woohoo!</span></StyledContent>
                <StyledDottedLineShort src={DottedLineShort} alt="Dotted Line Short"/>
                <Display on="desktop">
                    <StyledContent>We helped them get at the top of<br/>technology and agile work methodologies.</StyledContent>
                </Display>
                <Display on="mobile">
                    <StyledContent>We helped them get at the top of<br/>technology and agile work <br/>methodologies.</StyledContent>
                </Display>
                <StyledDottedLineShort src={DottedLineShort} alt="Dotted Line Short"/>
                <Display on="desktop">
                    <StyledContent>We built a major part of the software that<br/>allows them to operate <span>100% online</span> and<br/>with greater efficiency.</StyledContent>
                </Display>
                <Display on="mobile">
                    <StyledContent>We built a major part of the software <br/>that allows them to operate <span>100% <br/>online</span> and with greater efficiency.</StyledContent>
                </Display>
            </Col>
        </StyledMain>
    )
}

export default Goal
