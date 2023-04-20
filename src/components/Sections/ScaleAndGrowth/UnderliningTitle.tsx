import React, { useState } from "react";
import styled from "styled-components";
import WavyLine from "../../../images/mini-wavy-line.png";

const SectionTitle = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300;
  font-size: 55px;
  line-height: 70px;
  text-align: right;
  letter-spacing: 14.5px;
  position: relative;

  color: #000000;
`;

const CurvyLine = styled.div`
  width: calc(100% - 14.5px);
  background-image: url(${WavyLine});
  height: 10px;
  content: " ";
  padding: 0 2px;
  position: absolute;
`;

interface UnderliningTitleProps {
  children: React.ReactNode;
}

const UnderliningTitle: React.FC<UnderliningTitleProps> = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <SectionTitle className={hover ? "hover" : ""}>
        {props.children}
        {hover && <CurvyLine />}
      </SectionTitle>
    </div>
  );
};

export default UnderliningTitle;
