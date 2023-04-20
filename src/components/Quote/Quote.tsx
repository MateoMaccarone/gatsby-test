import * as React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import ArcDownDesktop from '../../images/successfull-cases/cases/decreditos/arc down desktop.svg'
import ArcUpDesktop from '../../images/successfull-cases/cases/decreditos/arc up desktop.svg'

import QuoteUpperCharacter from '../../images/successfull-cases/cases/decreditos/quote upper.svg'
import QuoteLowerCharacter from '../../images/successfull-cases/cases/decreditos/quote lower.svg'

interface StylesProps {
    className?: string
    style?: React.CSSProperties
}

interface ParagraphProps extends StylesProps {
    children: | React.ReactNode | Array<React.ReactNode>
}

const StyledParagraph = styled.p`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  width: 874px;
  justify-content: center;
  
  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    width: 315px;
  }
`

const Paragraph:React.FC<ParagraphProps> = (props) => {
    return (
        <StyledParagraph className={props.className} style={props.style}>
            {props.children}
        </StyledParagraph>
    )
}

interface AvatarProps extends StylesProps {
    src: string
    alt: string
}

const StyledAvatar = styled.img`
  width: 65px !important;
  margin: 40px 0 15px 0;
  
  @media (max-width: 992px) {
    width: 60px !important;
    margin: 30px 0 7px 0;
  }
`

const Avatar:React.FC<AvatarProps> = (props) => {
    return (
        <StyledAvatar src={props.src} alt={props.alt} className={props.className} style={props.style} />
    )
}

interface UserProps extends StylesProps {
    children: | React.ReactNode | Array<React.ReactNode>
}

const StyledUser = styled.h2`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  margin: 0 !important;

  @media (max-width: 992px) {
    font-weight: 500;
    font-size: 18px;
  }
`

const User:React.FC<UserProps> = (props) => {
    return (
        <StyledUser className={props.className} style={props.style}>
            {props.children}
        </StyledUser>
    )
}

interface TitleProps extends StylesProps {
    children: | React.ReactNode | Array<React.ReactNode>
}

const StyledTitle = styled.h4`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 2px;
  color: #63716E;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 14px;
  }
`

const Title:React.FC<TitleProps> = (props) => {
    return (
        <StyledTitle className={props.className} style={props.style}>
            {props.children}
        </StyledTitle>
    )
}

interface QuoteProps extends StylesProps {
    children: | React.ReactNode | Array<React.ReactNode>
    reverse: boolean
}

interface CompositionProps {
    Paragraph: typeof Paragraph
    Avatar: typeof Avatar
    User: typeof User
    Title: typeof Title
}

interface Reverse {
    reverse: boolean
}

const StyledContainer = styled.div<Reverse>`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
  background: url("${props => (props.reverse ? ArcUpDesktop : ArcDownDesktop)}") no-repeat center;
  background-size: cover;
  
  @media (max-width: 992px) {
    flex-direction: column;
    height: 700px;
    align-items: center;
    justify-content: flex-start;
  }
`

const StyledCol = styled(Col)<Reverse>`
  padding-top: ${props => (props.reverse ? 210 : 60)}px;

  @media (max-width: 992px) {
    width: 100% !important;
    padding-top: 30px;
  }
`

const StyledUpperQuoteContainer = styled(Col)<Reverse>`
  padding: ${props => props.reverse ? '80px 75px 0 0' : '15px 75px 0 0'};
  
  @media (max-width: 992px) {
    padding: 0;
    margin: ${props => props.reverse ? '165px 0 0 0' : '-25px 0 0 0'};
  }
  
  & > img {
    width: 80px;

    @media (max-width: 992px) {
      width: 60px;
    }
  }
`

const StyledLowerQuoteContainer = styled(Col)<Reverse>`
  padding: ${props => props.reverse ? '520px 0 0 40px' : '455px 0 0 40px'};

  @media (max-width: 992px) {
    padding: 0;
    margin: ${props => props.reverse ? '3%' : '28px 0 0 0'};
  }
  
  & > img {
    width: 80px;

    @media (max-width: 992px) {
      width: 60px;
    }
  }
`

const Quote:React.FC<QuoteProps> & CompositionProps = (props) => {
    return (
        <StyledContainer reverse={props.reverse} className={props.className} style={props.style}>
            <StyledUpperQuoteContainer reverse={props.reverse} md={2} xs={2} className="d-flex flex-column align-items-end">
                <img src={QuoteUpperCharacter} alt="OldQuote character"/>
            </StyledUpperQuoteContainer>
            <StyledCol reverse={props.reverse} md={8} xs={8} className="d-flex flex-column align-items-center">
                {props.children}
            </StyledCol>
            <StyledLowerQuoteContainer reverse={props.reverse} md={2} xs={2} className="d-flex flex-column align-items-start">
                <img src={QuoteLowerCharacter} alt="OldQuote character"/>
            </StyledLowerQuoteContainer>
        </StyledContainer>
    )
}

Quote.Paragraph = Paragraph
Quote.Avatar = Avatar
Quote.User = User
Quote.Title = Title

export default Quote
