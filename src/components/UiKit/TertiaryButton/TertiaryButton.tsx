import styled from "styled-components";
import React from "react";

interface TertiaryButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
}

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid #000000;
  padding: 10.5px 57px;
  color: #000;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
  }

  &:active {
    background: #000000;
    color: white;
    text-decoration: none;
  }
`;

const TertiaryButton: React.FC<TertiaryButtonProps> = (props) => {
  return (
    <StyledButton onClick={props.onClick} className={props.className}>
      {props.loading ? "Loading..." : props.children}
    </StyledButton>
  );
};

export default TertiaryButton;
