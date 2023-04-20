import * as React from 'react'
import styled from 'styled-components'

import Display from "../../../Display";
import PrimaryButton from '../../../UiKit/PrimaryButton/PrimaryButton'
import AnimatedIcon from "../../../Animations/AnimatedIcon/AnimatedIcon";

import ArrowDesktop from '../../../../images/successfull-cases/cases/decreditos/triple arrow desktop.svg'
import ArrowMobile from '../../../../images/successfull-cases/cases/decreditos/triple arrow mobile.svg'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 65px;
    line-height: 78px;
    color: #000000;
    margin: 133px 0 0 0;
    
    @media (max-width: 1300px) {
      font-size: 45px;
      line-height: 54px;
      text-align: center;
    }
  }
  
  img {
    width: 133px;
    height: 52px;
    margin: 10px 274px 0 25px;
    
    @media (max-width: 992px) {
      margin: 80px 0 0 0;
      transform: scale(2);
    }
  }
  
  h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #000000;
    margin: 167px 0 21px 0;

    @media (max-width: 992px) {
      font-size: 19px;
      line-height: 24px;
      margin: 80px 0 21px 0;
    }
  }
  
  .custom--button {
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`

const Project = () => {
    return (
        <StyledMain>
            <StyledRow>
                <StyledCol>
                    <StyledRow>
                        <h2>
                            Do you have
                        </h2>
                    </StyledRow>
                    <StyledRow>
                        <StyledCol>
                            <h2 style={{margin: '0'}}>
                                a project?
                            </h2>
                        </StyledCol>
                        <StyledCol>
                            <Display on="desktop">
                                <AnimatedIcon type='BounceRight' duration='2s' src={ArrowDesktop} alt="Arrow" />
                            </Display>
                            <Display on="mobile">
                                <AnimatedIcon style={{height: '104px'}} type='BounceDown' duration='2s' src={ArrowMobile} alt="Arrow" />
                            </Display>
                        </StyledCol>
                    </StyledRow>
                </StyledCol>
                <StyledCol>
                    <h4>
                        TELL US ALL ABOUT IT.
                    </h4>
                    <PrimaryButton onClick={() => {
                        window.location = "/contact";
                    }} className='custom--button'>
                        LET'S TALK!
                    </PrimaryButton>
                </StyledCol>
            </StyledRow>
        </StyledMain>
    )
}

export default Project
