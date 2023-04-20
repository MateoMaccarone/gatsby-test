import * as React from 'react'
import styled from 'styled-components'

import Display from "../../../Display";
import AnimatedNumbers from "../../../Animations/AnimatedNumbers/AnimatedNumbers";

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 718px;
  background: #000000;
  margin: 26px 0 0 0;
  
  @media (max-width: 992px) {
    height: 900px;
  }
  
  .custom--row {
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
      transform: scale(0.9);
    }
  }
  
  .custom--col {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    
    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  
  h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 89px;
    text-align: center;
    color: #FFFFFF;

    @media (max-width: 992px) {
      font-size: 45px;
      line-height: 57px;
      margin: 0 27px 0 27px;
    }
  }
  
  p {
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 108px;
    text-align: center;
    color: #FFFFFF;
    
    @media (max-width: 992px) {
      font-size: 65px;
      line-height: 78px;
    }
  }
  
  .custom--span {
    background-color: #48FFCB;
    margin: 23px 0 0 0;
    width: fit-content;
    padding: 0 5px 0 5px;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    
    @media (max-width: 992px) {
      margin: 0 0 37px 0;
      font-family: 'Archivo', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      text-align: center;
      color: #000000;
    }
  }
`

const Results = () => {
    return (
        <StyledMain>
            <div className="custom--row">
                <h4>THE RESULTS</h4>
            </div>
            <div className="custom--row">
                <Display on="desktop">
                    <h2>
                        How we transformed<br/>
                        the business
                    </h2>
                </Display>
                <Display on="mobile">
                    <h2>
                        How we<br/>
                        transformed<br/>
                        the business
                    </h2>
                </Display>
            </div>
            <Display on='desktop' style={{width: '100%'}}>
                <div className="custom--row" style={{width: "100%", justifyContent: 'space-evenly', margin: '98px 0 0 0'}}>
                    <div className="custom--col">
                        <div className="custom--row">
                            <AnimatedNumbers
                                once
                                from={0}
                                to={4}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '90px',
                                    lineHeight: '108px',
                                    color: '#fff'
                                }}
                            />
                            <p>,</p>
                            <AnimatedNumbers
                                once
                                from={0}
                                to={5}
                                duration={3}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '90px',
                                    lineHeight: '108px',
                                    color: '#fff'
                                }}
                            />
                            <p>K</p>
                        </div>
                        <span className='custom--span'>agents</span>
                    </div>
                    <div className="custom--col">
                        <div className="custom--row">
                            <p>+$</p>
                            <AnimatedNumbers
                                once
                                from={150}
                                to={300}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '90px',
                                    lineHeight: '108px',
                                    color: '#fff'
                                }}
                            />
                            <p>M</p>
                        </div>
                        <span className='custom--span'>in monthly loans</span>
                    </div>
                    <div className="custom--col">
                        <div className="custom--row">
                            <AnimatedNumbers
                                once
                                from={40}
                                to={95}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '90px',
                                    lineHeight: '108px',
                                    color: '#fff'
                                }}
                            />
                            <p>%</p>
                        </div>
                        <span className='custom--span'>humanless operation</span>
                    </div>
                </div>
            </Display>
            <Display on='mobile'>
                <div className="custom--row" style={{flexDirection: 'column', width: "100%", justifyContent: 'space-evenly', margin: '59px 0 0 0'}}>
                    <div className="custom--col">
                        <div className="custom--row">
                            <AnimatedNumbers
                                once
                                from={0}
                                to={4}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '65px',
                                    lineHeight: '78px',
                                    color: '#fff'
                                }}
                            />
                            <p>,</p>
                            <AnimatedNumbers
                                once
                                from={0}
                                to={5}
                                duration={3}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '65px',
                                    lineHeight: '78px',
                                    color: '#fff'
                                }}
                            />
                            <p>K</p>
                        </div>
                        <span className='custom--span'>agents</span>
                    </div>
                    <div className="custom--col">
                        <div className="custom--row">
                            <p>+ $</p>
                            <AnimatedNumbers
                                once
                                from={150}
                                to={300}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '65px',
                                    lineHeight: '78px',
                                    color: '#fff'
                                }}
                            />
                            <p>M</p>
                        </div>
                        <span className='custom--span'>in monthly loans</span>
                    </div>
                    <div className="custom--col">
                        <div className="custom--row">
                            <AnimatedNumbers
                                once
                                from={40}
                                to={95}
                                style={{
                                    fontFamily: 'Syne',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '65px',
                                    lineHeight: '78px',
                                    color: '#fff'
                                }}
                            />
                            <p>%</p>
                        </div>
                        <span className='custom--span'>humanless operation</span>
                    </div>
                </div>
            </Display>
        </StyledMain>
    )
}

export default Results
