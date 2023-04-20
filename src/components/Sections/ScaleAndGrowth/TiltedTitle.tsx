import React, { useState } from "react";
import styled from "styled-components";
import WavyLine from "../../../images/mini-wavy-line.png";

const SectionTitle = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  line-height: 45px;
  position: relative;
  transform: rotate(-90deg);
  letter-spacing: 10px;

  color: #000000;

  &:after {
    background: #edf3f2;
    content: " ";
    height: 70%;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 7px;
    left: 0;
    z-index: -1;
  }
`;

interface UnderliningTitleProps {
  children: React.ReactNode;
}

const TiltedText: React.FC<UnderliningTitleProps> = (props) => {
  return <SectionTitle>{props.children}</SectionTitle>;
};

export default TiltedText;
