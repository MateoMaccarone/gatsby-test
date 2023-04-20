import React from "react";
import GreenArrowRight from "../images/arrow-right.svg";
import styled from "styled-components";

interface LearnMoreButtonProps {
  href?: string;
  children?: string;
}

const FooterTitle = styled.a`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration-line: underline;
  }

  &:active {
    color: #48ffcb;
    text-decoration-line: underline;
  }
`;

const FooterButtonWrapper = styled.div`
  &:hover {
    cursor: pointer;
    color: #000000;
  }

  & > img {
    margin-left: 5px;
    transition: all 0.4s ease;
  }

  &:hover > img {
    transform: translateX(8px);
  }
`;

const FooterButton: React.FC<LearnMoreButtonProps> = (props) => {
  return (
    <FooterButtonWrapper className="d-flex">
      <FooterTitle href={props.href}>{props.children}</FooterTitle>
      <img src={GreenArrowRight} alt="" />
    </FooterButtonWrapper>
  );
};

export default FooterButton;
