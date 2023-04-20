import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./GreenArrow.css";

import GreenCircleArrowDown from "./../../../images/green-circle-arrow-down.svg";
import clsx from "clsx";

interface GreenArrowProps {
  className?: string;
  onClick?: (e: any) => void;
}

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const Overlay = styled.div`
  z-index: 1;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const Circle = styled.div`
  background: #48ffcb;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -1;

  & .bounce {
    animation: bounceToDown 2s both;
    animation-iteration-count: infinite;
  }

  & .arrow {
    z-index: -1;

    & > img {
      width: 60px;
      z-index: 3;
    }
  }
`;

const GreenArrow: React.FC<GreenArrowProps> = (props) => {
  const [enableBounce, setEnableBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnableBounce((on) => !on);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper className={props.className}>
      <Overlay onClick={props.onClick} />
      <Circle>
        <div
          className={clsx({
            bounce: enableBounce,
            arrow: true,
          })}
        >
          <img src={GreenCircleArrowDown} alt="Arrow Down" />
        </div>
      </Circle>
    </Wrapper>
  );
};

export default GreenArrow;
