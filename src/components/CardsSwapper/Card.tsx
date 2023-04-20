import * as React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 355px;
  margin: 101px 0 0 0;
  
  @media (max-width: 1200px) {
    margin: 44px 0 0 0;
  }
  
  img {
    width: 355px;
    height: 252px;
    
    @media (max-width: 1200px) {
      width: 310px;
      height: 220px;
    }
  }
  
  h2 {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 4px;
    color: #000000;
    margin: 36px 0 0 0;
    
    @media (max-width: 1200px) {
      font-size: 19px;
      line-height: 22px;
    }
  }
  
  p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin: 9px 0 0 0;

    @media (max-width: 1200px) {
      font-size: 15px;
      line-height: 26px;
    }
  }
`

interface CardProps {
    src: string;
    alt: string;
    title: React.ReactNode | Array<React.ReactNode>;
    content: React.ReactNode | Array<React.ReactNode>;
}

const Card:React.FC<CardProps> = (props) => {
    return (
        <StyledCard>
            <img src={props.src} alt={props.alt} />
            <h2>
                {props.title}
            </h2>
            <p>
                {props.content}
            </p>
        </StyledCard>
    )
}

export default Card
