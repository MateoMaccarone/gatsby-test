import React from "react";
import GreenArrowRight from "../images/arrow-right.svg";
import styled from "styled-components";

interface LearnMoreButtonProps {
  href?: string;
}

const LearnMoreLink = styled.a`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;
  border-bottom: 1px solid black;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: black !important;
    font-weight: 700;
  }

  &:active {
    border-bottom: 0.8px solid #48ffcb;
    color: black;
    font-weight: 700;
  }
`;

const LearnMore = styled.div`
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

const LearnMoreButton: React.FC<LearnMoreButtonProps> = (props) => {
  return (
    <LearnMore className="d-flex">
      <LearnMoreLink href={props.href}>Learn More</LearnMoreLink>
      <img src={GreenArrowRight} alt="" />
    </LearnMore>
  );
};

export default LearnMoreButton;
