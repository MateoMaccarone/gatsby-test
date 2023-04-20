import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import WavyLineImage from "../../../images/wavy-line-mobile.svg";

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;

  .lines {
    background: url(${WavyLineImage});
    background-position-x: calc(50% - 45px);
    position: relative;
    display: flex;
    overflow-x: clip;
    left: 0;
    height: 500px;
  }
`;

const WavyLineMobile: React.FC = () => {
  const refImg = useRef<HTMLElement>();
  const [positionLeft, setPositionLeft] = useState(0);
  const speed = 0.9;

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionLeft((old) => {
        if (Math.abs(old) >= refImg.current?.offsetWidth!) {
          return 0;
        }
        return old - speed;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <div className="lines" />
    </Wrapper>
  );
};

export default WavyLineMobile;
