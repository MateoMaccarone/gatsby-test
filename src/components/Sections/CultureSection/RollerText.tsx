import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface RollerTextProps {
  content: React.ReactNode;
  speed?: number;
  reverse?: boolean;
}

const Wrapper = styled.div<Partial<RollerTextProps>>`
  display: flex;
  width: 100%;
  ${(props) => (props.reverse ? `justify-content: flex-end` : null)}
`;
const StyledDiv = styled.div`
  position: relative;
  width: fit-content;
`;

const RollerText: React.FC<RollerTextProps> = (props) => {
  const refSpan = useRef<HTMLElement>();
  const widthOfSpan = refSpan.current?.offsetWidth ?? 0;
  const [positionLeft, setPositionLeft] = useState(widthOfSpan * -1);
  const speed = (props.speed ?? 0.4) * (props.reverse ? -1 : 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionLeft((old) => {
        if (Math.abs(old) >= refSpan.current?.offsetWidth!) {
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
    <Wrapper reverse={props.reverse}>
      <StyledDiv ref={refSpan} style={{ left: `${positionLeft}px` }}>
        {props.content}
      </StyledDiv>
      <StyledDiv ref={refSpan} style={{ left: `${positionLeft}px` }}>
        {props.content}
      </StyledDiv>
    </Wrapper>
  );
};

export default RollerText;
