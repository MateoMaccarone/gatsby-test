import * as React from 'react'
import styled from 'styled-components'

import Display from "../../../Display";
import LineSeparator from "../../../UiKit/LineSeparator/LineSeparator";

import Diagram from '../../../../images/successfull-cases/cases/decreditos/diagram.png'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 70px;
    color: #000000;
    margin: 187px 0 40px 0;

    @media (min-width: 993px) and (max-width: 1150px) {
      font-size: 45px;
      line-height: 50px;
      margin: 97px 0 23px 0;
    }
    
    @media (max-width: 992px) {
      font-size: 45px;
      line-height: 57px;
      margin: 97px 0 23px 0;
      text-align: center;
    }
  }
  
  p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 2px;
    margin: 0 0 0 5px;
    color: #000000;

    @media (min-width: 993px) and (max-width: 1150px) {
      font-size: 20px;
      line-height: 35px;
    }

    @media (max-width: 992px) {
      font-size: 20px;
      line-height: 28px;
      margin: 0 15px 0 15px;
      text-align: center;
      letter-spacing: unset;
      max-width: 300px;
    }
    
    span {
      font-weight: 700;
    }
  }
  
  .diagram {
      height: 434px;
      width: 463px;
      margin: 113px 0 0 130px;

    @media (min-width: 993px) and (max-width: 1150px) {
      margin: 20px 0 0 0;
    }
    
    @media (max-width: 992px) {
      height: 295px;
      width: 315px;
      margin: 48px 0 0 0;
    }
  }
  
  .waves {
    width: 426px;
    margin: 135px 0 0 0;
    
    @media (max-width: 992px) {
      width: 260px;
      margin: 101px 0 0 0;
    }
  }
  
  .margin {
    @media (min-width: 993px) and (max-width: 1300px) {
      margin: 0 0 0 20px;
    }
  }
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`

const WeDoIt = () => {
    return (
        <StyledMain>
            <StyledCol>
                <StyledRow>
                    <StyledCol>
                        <StyledCol>
                            <div className='margin'>
                                <h2>
                                    This is how<br/>
                                    we do it.
                                </h2>
                                <Display on='desktop'>
                                    <p>
                                        We use an <span>Agile implementation</span> to<br/>
                                        adjust to changing business needs.
                                    </p>
                                </Display>
                                <Display on='mobile'>
                                    <p>
                                        We use an <span>Agile implementation</span> to adjust to changing business needs.
                                    </p>
                                </Display>
                            </div>
                        </StyledCol>
                    </StyledCol>
                    <StyledCol>
                        <StyledCol>
                            <img className="diagram" src={Diagram} alt="Sprint diagram"/>
                        </StyledCol>
                    </StyledCol>
                </StyledRow>
                <StyledRow>
                    <div>
                        <LineSeparator className='waves' />
                    </div>
                </StyledRow>
            </StyledCol>
        </StyledMain>
    )
}

export default WeDoIt
