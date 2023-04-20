import styled from "styled-components";
import React from "react";

interface SecondaryButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
}

const StyledButton = styled.button`
  background: #ffffff;
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
    box-shadow: 0 4px 6px rgba(48, 47, 63, 0.2);
  }

  &:active {
    background: #48ffcb;
    box-shadow: none;
    font-weight: 500;
  }
`;

const AnyQuestionButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <StyledButton onClick={props.onClick} className={props.className}>
      {props.loading ? "Loading..." : props.children}
    </StyledButton>
  );
};

export default AnyQuestionButton;
