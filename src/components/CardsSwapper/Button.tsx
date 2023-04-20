import * as React from 'react'
import styled from 'styled-components'
import clsx from "clsx";

const StyledButton = styled.button`
  width: 350px;
  height: 58px;
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 2px;
  color: #000000;
  border: none;
  background-color: transparent;
  border-bottom: 4px solid transparent;

  @media (max-width: 425px) {
    width: 300px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  &:hover {
    font-weight: 500;
    border-bottom: 4px solid #EDF3F2;
  }

  &:active {
    font-weight: 700;
    border-bottom: 4px solid #E1EEEC;
  }
  
  &.selected {
    font-weight: 500;
    border-bottom: 4px solid #48FFCB;
  }
`

interface ButtonProps {
    content: string
    active: boolean
    onClick: () => void
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton
            className={clsx({selected: props.active})}
            onClick={() => props.onClick?.()}
        >
            {props.content}
        </StyledButton>
    )
}

export default Button
