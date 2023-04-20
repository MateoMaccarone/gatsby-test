import React, { useCallback, useEffect, useRef, useState } from "react";

import LineSeparatorImage from "./../../../images/line-separator.svg";
import LineSeparatorMobileImage from "./../../../images/line-separator-mobile.png";
import styled from "styled-components";
import useWidth from "../../../hooks/useWidth";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 140px 0;
  width: 600px;
  overflow-x: hidden;

  @media (max-width: 992px) {
    width: 260px;
    margin: 50px 0;
  }
`;

const StyledImg = styled.img`
  position: relative;
  width: 606px;
  height: 12px;

  @media (max-width: 992px) {
    width: 260px;
    height: 5.15px;
  }
`;

interface LineSeparatorProps {
  className?: string
  style?: React.CSSProperties
}

const LineSeparator: React.FC<LineSeparatorProps> = (props) => {
  const refImg = useRef<HTMLElement>();
  const [hover, setHover] = useState(false);
  const [positionLeft, setPositionLeft] = useState(0);
  const speed = 2;
  const { isMobile } = useWidth();

  const updatePosition = useCallback(() => {
    if (!hover) return;
    setPositionLeft((old) => {
      if (Math.abs(old) >= refImg.current?.offsetWidth!) {
        return 0;
      }
      return old + speed;
    });
  }, [hover]);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePosition();
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [updatePosition]);

  return (
    <Wrapper>
      <StyledSection
          style={props.style}
          className={props.className}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
      >
        <StyledImg
          ref={refImg}
          style={{ left: `${positionLeft}px` }}
          src={isMobile ? LineSeparatorMobileImage : LineSeparatorImage}
          alt=""
        />
        <StyledImg
          style={{ left: `${positionLeft}px` }}
          src={isMobile ? LineSeparatorMobileImage : LineSeparatorImage}
          alt=""
        />
        <StyledImg
          style={{ left: `${positionLeft}px` }}
          src={isMobile ? LineSeparatorMobileImage : LineSeparatorImage}
          alt=""
        />
      </StyledSection>
    </Wrapper>
  );
};

export default LineSeparator;
