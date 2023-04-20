import * as React from 'react'
import styled from 'styled-components'

import Display from '../../../Display'
import TertiaryButton from "../../../UiKit/TertiaryButton/TertiaryButton";
import AnimatedIcon from "../../../Animations/AnimatedIcon/AnimatedIcon";
import CardSwapper from '../../../CardsSwapper/CardsSwapper'

import ArrowsDesktop from '../../../../images/successfull-cases/cases/decreditos/arrows desktop.svg'
import ArrowsMobile from '../../../../images/successfull-cases/cases/decreditos/arrows mobile.svg'
import LeftArrows from '../../../../images/successfull-cases/cases/decreditos/double arrow left.svg'
import RightArrows from '../../../../images/successfull-cases/cases/decreditos/double arrow right.svg'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 147px 0 0 0;
  
  @media (max-width: 992px) {
    margin: 89px 0 0 0;
  }

  @media (max-width: 1024px) {
    overflow-x: hidden;
  }
  
  .custom--h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 89px;
    text-align: center;
    color: #000000;
    margin: 0 0 80px 0;

    @media(max-width: 992px) {
      font-size: 45px;
      line-height: 57px;
      margin: 0 67px 70px 67px;
    }
  }
  
  .custom--p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2px;
    color: #000000;
    margin: 0 0 26px 0;

    @media(max-width: 992px) {
      font-size: 15px;
      line-height: 22px;
      margin: 0;
    }
    
    & > span {
      background: #48FFCB;
    }
  }
  
  & > section {
    background: url("${ArrowsDesktop}") no-repeat center;
    height: 56px;
    width: 1440px;
    margin: 96px 0 0 0;
    overflow-x: hidden;
    
    @media (max-width: 500px) {
      background: url("${ArrowsMobile}") no-repeat center;
      height: 56px;
      overflow-x: visible;
    }
  }
  
  .custom--img  {
    height: 49px;
    width: 33px;

    @media(max-width: 992px) {
      width: 32.76px;
      height: 48.69px;
    }
  }
  
  .custom--col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .custom--row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .custom--button {
    width: 315px;
  }
`

const Built = () => {
    return (
        <StyledMain>
            <h2 className='custom--h2'>What we've built</h2>
            <CardSwapper />
            <Display on="desktop">
                <div className='custom--row' style={{margin: '168px 0 0 0'}}>
                    <div className='custom--col'>
                        <AnimatedIcon className='custom--img' type='BounceLeft' duration='2s' src={RightArrows} alt="Left arrows" style={{margin: '0 77px 0 0'}} />
                    </div>
                    <div className='custom--col'>
                        <p className='custom--p'>Do you have a <span>project</span> like this in mind?</p>
                        <TertiaryButton onClick={() => {
                            window.location = "/contact";
                        }}>BOOK A MEETING</TertiaryButton>
                    </div>
                    <div className='custom--col'>
                        <AnimatedIcon className='custom--img' type='BounceRight' duration='2s' src={LeftArrows} alt="Left arrows" style={{margin: '0 0 0 77px'}} />
                    </div>
                </div>
            </Display>
            <Display on="mobile">
                <div className='custom--row' style={{margin: '110px 0 24px 0'}}>
                    <div className='custom--col'>
                        <AnimatedIcon className='custom--img' type='BounceLeft' duration='2s' src={RightArrows} alt="Left arrows" style={{margin: '0 19px 0 0'}} />
                    </div>
                    <div className='custom--col'>
                        <p className='custom--p'>
                            Do you have a <span>project</span><br/>
                            like this in mind?
                        </p>
                    </div>
                    <div className='custom--col'>
                        <AnimatedIcon className='custom--img' type='BounceRight' duration='2s' src={LeftArrows} alt="Left arrows" style={{margin: '0 0 0 19px'}} />
                    </div>
                </div>
                <div className="custom--row">
                    <TertiaryButton onClick={() => {
                        window.location = "/contact";
                    }} className='custom--button'>BOOK A MEETING</TertiaryButton>
                </div>
            </Display>
            <section />
        </StyledMain>
    )
}

export default Built
