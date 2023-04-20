import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./ShakerEmoji.css";

interface ShakerEmojiProps {
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  alt?: string;
}

const Wrapper = styled.div<{ animation: string }>`
  display: flex;

  & > img {
    ${(props) =>
      props.animation
        ? `
      animation: ${props.animation} 0.5s ease infinite;
    `
        : ""}
  }
`;

const animations = ["shake", "grow"];

const ShakerEmoji: React.FC<ShakerEmojiProps> = (props) => {
  const [animation, setAnimation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const dice = Math.random() * 10;
      if (dice <= 3) {
        const num = Math.floor(Math.random() * animations.length);
        const anim = animations[num];
        setAnimation(anim);
      }

      setTimeout(() => {
        setAnimation(undefined);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper animation={animation}>
      <img style={props.style} src={props.src} alt={props.alt} />
    </Wrapper>
  );
};

export default ShakerEmoji;
