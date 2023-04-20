import * as React from 'react'
import styled from 'styled-components'

import Display from "../../../Display";
import Quote from '../../../Quote/Quote'

import Avatar from '../../../../images/successfull-cases/cases/decreditos/avatar/3.png'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .custom--avatar {
    margin: 0 !important;
  }
  
  h2 {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 38px;
    display: flex;
    align-items: center;
    letter-spacing: 5px;
    color: #000000;
    margin: 118px 0 0 0;
    
    @media (max-width: 992px) {
      font-size: 30px;
      line-height: 33px;
      text-align: center;
      margin: 114px 0 0 0;
    }
  }
  
  h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9BA9A7;
    margin: 42px 0 16px 0;
    
    @media (max-width: 992px) {
      font-size: 20px;
      line-height: 26px;
      margin: 50px 0 11px 0;
    }
  }
  
  ul {
    padding: 0 0 0 14px;
    
    @media (max-width: 992px) {
      padding: 0;
    }
  }
  
  li {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    list-style: none;
    margin: 0 0 5px 0;
    
    @media (max-width: 992px) {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      min-width: 250px;
    }
  }
  
  .longLine {
    width: 1px;
    height: 160px;
    background-color: #e1eeec;
    
    @media (max-width: 992px) {
      display: none;
    }
  }

  .shortLine {
    width: 1px;
    height: 130px;
    background-color: #e1eeec;

    @media (max-width: 992px) {
      display: none;
    }
  }
  
  .spacer {
    margin: 0 154px 0 160px;

    @media (max-width: 992px) {
      margin: unset;
    }
  }
  
  .margin {
    margin: 0 150px 0 0;
    
     @media (max-width: 1300px) {
       margin: 0;
     }
  }
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  
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

const StyledT = styled(Quote.Avatar)`
  margin: 0 !important;
`

const ProjectSummary = () => {
    return (
        <section>
            <StyledMain>
                <StyledCol className='margin'>
                    <StyledRow>
                        <h2>Project Summary</h2>
                    </StyledRow>
                    <StyledRow>
                        <StyledCol>
                            <StyledRow>
                                <h4>TEAM</h4>
                            </StyledRow>
                            <StyledRow>
                                <StyledCol>
                                    <span className='longLine' />
                                </StyledCol>
                                <StyledCol>
                                    <ul>
                                        <li>
                                            1 Project Manager
                                        </li>
                                        <li>
                                            1 Technical Leader
                                        </li>
                                        <li>
                                            6 Full Stack Developers
                                        </li>
                                        <li>
                                            2 QA Analyst
                                        </li>
                                        <li>
                                            1 UX/UI Designer
                                        </li>
                                    </ul>
                                </StyledCol>
                            </StyledRow>
                        </StyledCol>
                        <StyledCol className='spacer'>
                            <StyledRow>
                                <h4>SERVICES</h4>
                            </StyledRow>
                            <StyledRow>
                                <StyledCol>
                                    <span className='longLine' />
                                </StyledCol>
                                <StyledCol>
                                    <ul>
                                        <li>
                                            Product Discovery.
                                        </li>
                                        <li>
                                            Product Design & Thinking.
                                        </li>
                                        <li>
                                            Product Development.
                                        </li>
                                        <li>
                                            Braintly Plug: Time & Materials.
                                        </li>
                                        <li>
                                            Infrastructure (AWS)
                                        </li>
                                    </ul>
                                </StyledCol>
                            </StyledRow>
                        </StyledCol>
                        <StyledCol>
                            <StyledRow>
                                <h4>PLATFORMS</h4>
                            </StyledRow>
                            <StyledRow>
                                <StyledCol>
                                    <span className='shortLine' />
                                </StyledCol>
                                <StyledCol>
                                    <ul>
                                        <li>
                                            Web App
                                        </li>
                                        <li>
                                            Backend
                                        </li>
                                        <li>
                                            API
                                        </li>
                                        <li>
                                            Interface integrations
                                        </li>
                                    </ul>
                                </StyledCol>
                            </StyledRow>
                        </StyledCol>
                    </StyledRow>
                </StyledCol>
            </StyledMain>
            <Quote reverse>
                <Quote.Paragraph>
                    <Display on='desktop'>
                        Today we have the deep knowledge of the business that so many years of<br/>
                        experience gave us, which, combined with cutting-edge technologies and<br/>
                        methodologies, put us at the level of leading companies that were born in the<br/>
                        light of technology and it is part of their DNA.
                    </Display>
                    <Display on='mobile'>
                        Today we have the deep knowledge <br/>
                        of the business that so many years <br/>
                        of experience gave us, which, <br/>
                        combined with cutting-edge <br/>
                        technologies and methodologies, <br/>
                        put us at the level of leading <br/>
                        companies that were born in the<br/>
                        light of technology and it is part of <br/>
                        their DNA.
                    </Display>
                </Quote.Paragraph>
                <StyledT className='custom--avatar' src={Avatar} alt='Damián Levy' />
                <Quote.User>Damián Levy</Quote.User>
                <Quote.Title>CEO at Decreditos</Quote.Title>
            </Quote>
        </section>
    )
}

export default ProjectSummary
