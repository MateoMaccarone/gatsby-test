import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import WavyLine1Image from "../../../images/wavy-line.png";

const Wrapper = styled.div<Partial<WavyLineProps>>`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;

  .lines {
    background: url(${WavyLine1Image});
    background-position-x: calc(50% - ${(props) => props.offset});
    position: relative;
    display: flex;
    overflow-x: clip;
    left: 0;
    width: 2150px;
    height: 266px;
  }
`;

interface WavyLineProps {
  src?: string;
  width: string;
  height: string;
  offset?: string;
}

const WavyLine: React.FC<WavyLineProps> = (props) => {
  const refImg = useRef<HTMLElement>();
  const [positionLeft, setPositionLeft] = useState(0);
  const speed = 0.8;

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
    <Wrapper offset={props.offset} width={props.width} height={props.height}>
      <div className="lines" />
    </Wrapper>
  );
};

export default WavyLine;
