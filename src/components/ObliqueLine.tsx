import React from "react";
import styled from "styled-components";

interface ObliqueLineProps {
  marginY?: string;
  className?: string;
}

const Wrapper = styled.div<Partial<ObliqueLineProps>>`
  width: 100%;
  overflow: hidden;
  height: 430px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 120%;
  height: 2px;
  background: black;
  transform: rotate(-12deg);
  margin: 8px 0;
`;

const ObliqueLine: React.FC<ObliqueLineProps> = (props) => {
  return (
    <Wrapper className={props.className}>
      <Line />
      <Line />
    </Wrapper>
  );
};

export default ObliqueLine;
