import React, { useState } from "react";
import styled from "styled-components";

interface HoverableImageProps {
  src: string;
  srcHover: string;
  className?: string;
  alt?: string;
  width?: string;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  position: relative;
  z-index: 200;

  .base-image {
    transition: 0.8s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.8s ease;
  }

  &:hover .base-image {
    opacity: 0;
  }
  &:hover .overlay {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  transition: all 0.8s ease;
`;

const HoverableImage: React.FC<HoverableImageProps> = (props) => {
  return (
    <Wrapper style={props.style}>
      <StyledImg
        style={{ width: props.width }}
        className={`base-image ${props.className}`}
        src={props.src}
        alt={props.alt}
      />
      <div className="overlay">
        <StyledImg
          style={{ width: props.width }}
          className={props.className}
          src={props.srcHover}
          alt={props.alt}
        />
      </div>
    </Wrapper>
  );
};

export default HoverableImage;
