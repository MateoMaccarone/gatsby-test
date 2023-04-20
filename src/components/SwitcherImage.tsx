import React from "react";
import styled from "styled-components";

interface SwitcherImageProps {
  src1: string;
  src2: string;
  className?: string;
  alt?: string;
  switch?: boolean;
  milliseconds?: number;
}

const Wrapper = styled.div<Partial<SwitcherImageProps>>`
  position: relative;
  width: fit-content;

  & > img {
    opacity: ${(props) => (!props.switch ? 1 : 0)};
    transition: all ${(props) => props.milliseconds ?? 800}ms ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: ${(props) => (props.switch ? 1 : 0)};
    transition: all ${(props) => props.milliseconds ?? 800}ms ease;
  }
`;

const StyledImg = styled.img`
  height: 60px;
`;

const SwitcherImage: React.FC<SwitcherImageProps> = (props) => {
  return (
    <Wrapper switch={props.switch} milliseconds={props.milliseconds}>
      <StyledImg className={props.className} src={props.src1} alt={props.alt} />
      <div className="overlay">
        <StyledImg
          className={props.className}
          src={props.src2}
          alt={props.alt}
        />
      </div>
    </Wrapper>
  );
};

export default SwitcherImage;
