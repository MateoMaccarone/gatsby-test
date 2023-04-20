import React, { useState } from "react";
import styled from "styled-components";

interface GrowerImageProps {
  src: string;
  pressed?: string;
  alt: string;
  className?: string;
  milliseconds?: number;
}

const StyledImage = styled.img<{ milliseconds?: number }>`
  transition: transform ${(props) => props.milliseconds ?? 200}ms ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const GrowerImage: React.FC<GrowerImageProps> = (props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <StyledImage
      milliseconds={props.milliseconds}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={props.className}
      src={!pressed ? props.src : props.pressed}
      alt={props.alt}
    />
  );
};

export default GrowerImage;
