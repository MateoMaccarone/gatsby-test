import * as React from 'react'
import styled from 'styled-components'

import Display from '../../../Display'
import Quote from "../../../Quote/Quote";

import One from '../../../../images/successfull-cases/cases/decreditos/avatar/1.png'
import Two from '../../../../images/successfull-cases/cases/decreditos/avatar/2.png'

import ChallengesOne from '../../../../images/successfull-cases/cases/decreditos/challenges/transitioning.png'
import ChallengesTwo from '../../../../images/successfull-cases/cases/decreditos/challenges/no human interaction.png'
import ChallengesThree from '../../../../images/successfull-cases/cases/decreditos/challenges/adaptation.png'

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .custom--padding--1 {
    padding: 0 0 30px 0
  }

  .custom--padding--2 {
    padding: 0 0 17px 0
  }
`

const StyledChallenges = styled.section`
  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 89px;
    text-align: center;
    color: #000000;
    
    margin: 49px 0 85px 0;

    @media (max-width: 992px) {
      font-size: 45px;
      line-height: 57px;
      margin: -72px 0 49px 0;
    }
  }
  
  img {
    width: 230px;
    margin: 0 58px 49px 0;

    @media (max-width: 992px) {
      margin: 0 0 18px 0;
    }
  }
  
  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 54px;
    letter-spacing: 3px;
    color: #000000;

    @media (max-width: 992px) {
      font-size: 28px;
      line-height: 36px;
      text-align: center;
    }
  }
  
  p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #000000;

    @media (min-width: 426px) and (max-width: 768px) {
      font-size: 15px;
      line-height: 26px;
      max-width: 300px;
      text-align: center;
    }
    
    @media (min-width: 769px) and (max-width: 992px) {
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      max-width: 300px;
    }
    
    @media (max-width: 425px) {
      font-size: 15px;
      line-height: 26px;
      padding: 0 31px 0 31px;
      text-align: center;
    }
  }
  
  .custom--row {
    display: flex;
    flex-direction: row;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .custom--col {
    display: flex;
    flex-direction: column;
    
    @media (max-width: 992px) {
      &:last-child {
        margin: 0 0 59px 0;
      }
    }
  }
`

const Challenges = () => {
    return(
        <StyledMain>
            <Quote reverse={false}>
                <Quote.Paragraph>
                    <Display on='desktop'>
                        Over the last 5 years, Decreditos has been going through an intense <br/>
                        digital transformation process that put its entire work team in a privileged <br/>
                        position in the market, completely changing its business model.
                    </Display>
                    <Display on='mobile'>
                        Over the last 5 years, Decreditos <br/>
                        has been going through an intense <br/>
                        digital transformation process that <br/>
                        put its entire work team in a <br/>
                        privileged position in the market, <br/>
                        completely changing its business <br/>
                        model.
                    </Display>
                </Quote.Paragraph>
                <Quote.Avatar src={One} alt='Ximena Rigonat' />
                <Quote.User>Ximena Rigonat</Quote.User>
                <Quote.Title className='custom--padding--2'>Project Manager at Braintly</Quote.Title>
            </Quote>
            <StyledChallenges>
                <div className='custom--row' style={{justifyContent: 'center'}}>
                    <div className='custom--col'>
                        <Display on='desktop'>
                            <h1>The Challenges</h1>
                        </Display>
                        <Display on='mobile'>
                            <h1>
                                The<br/>
                                Challenges
                            </h1>
                        </Display>
                    </div>
                </div>
                <div className='custom--row'>
                    <div className='custom--col'>
                        <img src={ChallengesOne} alt="Transitioning"/>
                    </div>
                    <div className='custom--col'>
                        <div className='custom--row'>
                            <h2>
                                Transitioning.
                            </h2>
                        </div>
                        <div className='custom--row'>
                            <Display on='desktop'>
                                <p>
                                    We had to make sure that very traditional users (used car<br/>
                                    dealerships) adopted the use of technology as the only way to<br/>
                                    get a loan.
                                </p>
                            </Display>
                            <Display on='mobile'>
                                <p>
                                    We had to make sure that very traditional users (used car dealerships) adopted the use of technology as the only way to get a loan.
                                </p>
                            </Display>
                        </div>
                    </div>
                </div>
                <div className='custom--row'>
                    <div className='custom--col'>
                        <img src={ChallengesTwo} alt="No human interaction, no friction"/>
                    </div>
                    <div className='custom--col'>
                        <div className='custom--row'>
                            <Display on='desktop'>
                                <h2>
                                    No human interaction,<br/>
                                    no friction.
                                </h2>
                            </Display>
                            <Display on='mobile'>
                                <h2>
                                    No human<br/>
                                    interaction, no<br/>
                                    friction.
                                </h2>
                            </Display>
                        </div>
                        <div className='custom--row'>
                            <Display on='desktop'>
                                <p>
                                    For this to work, we needed to build a frictionless, 100% online<br/>
                                    platform with a great UX and no human interaction.
                                </p>
                            </Display>
                            <Display on='mobile'>
                                <p>
                                    For this to work, we needed to build a frictionless, 100% online platform with a great UX and no human interaction.
                                </p>
                            </Display>
                        </div>
                    </div>
                </div>
                <div className='custom--row'>
                    <div className='custom--col'>
                        <img src={ChallengesThree} alt="Constant adaptation"/>
                    </div>
                    <div className='custom--col'>
                        <div className='custom--row'>
                            <Display on='desktop'>
                                <h2>
                                    Constant adaptation.
                                </h2>
                            </Display>
                            <Display on='mobile'>
                                <h2>
                                    Constant<br/>
                                    adaptation.
                                </h2>
                            </Display>
                        </div>
                        <div className='custom--row'>
                            <Display on='desktop'>
                                <p>
                                    The loan business in Argentina is very volatile. We have to tackle<br/>
                                    changes in an agile way without hindering the business. And as<br/>
                                    we adapt, the client also adapts to our industry, learning how to<br/>
                                    develop software products.
                                </p>
                            </Display>
                            <Display on='mobile'>
                                <p style={{margin: '0 0 -120px 0'}}>
                                    The loan business in Argentina is very volatile.<br/>
                                    We have to tackle changes in an agile way<br/>
                                    without hindering the business. And as we<br/>
                                    adapt, the client also adapts to our industry,<br/>
                                    learning how to develop software products.
                                </p>
                            </Display>
                        </div>
                    </div>
                </div>
            </StyledChallenges>
            <Quote reverse>
                <Quote.Paragraph>
                    <Display on="desktop">
                        The digital and technological transformation taught us that technology did<br/>
                        not come to take away our work, but to prioritize our role in the organization<br/>
                        and help us solve repetitive and automatable tasks.
                    </Display>
                    <Display on="mobile">
                        The digital and technological <br/>
                        transformation taught us that <br/>
                        technology did not come to take <br/>
                        away our work, but to prioritize our <br/>
                        role in the organization and help us <br/>
                        solve repetitive and automatable tasks.
                    </Display>
                </Quote.Paragraph>
                <Quote.Avatar src={Two} alt='Diego Himber' />
                <Quote.User>Diego Himber</Quote.User>
                <Quote.Title className='custom--padding--1'>General Product Owner at Decreditos</Quote.Title>
            </Quote>
        </StyledMain>
    )
}

export default  Challenges
