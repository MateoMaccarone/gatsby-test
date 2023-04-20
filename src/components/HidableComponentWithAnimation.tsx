import React, { useCallback, useEffect, useState } from "react";
import { HidableComponent } from "./HidableComponent";
import styled from "styled-components";

type HidableComponentWithAnimationProps = {
  isVisible: boolean;
  children: React.ReactNode;
  appearAnimation?: string;
  disappearAnimation?: string;
  milliseconds: number;
  className?: string;
  style?: React.CSSProperties;
};

const StyledDiv = styled.div<{ animation?: string; milliseconds?: number }>`
  animation: ${(props) => props.animation} ${(props) => props.milliseconds}ms
    ease;
`;

export const HidableComponentWithAnimation: React.FC<
  HidableComponentWithAnimationProps
> = (props) => {
  const [delayedIsVisible, setDelayedIsVisible] = useState(props.isVisible);
  const [animation, setAnimation] = useState("");

  const updateDelayedIsVisible = useCallback(() => {
    setDelayedIsVisible(props.isVisible);
    setAnimation("");
    console.log("Updated Delayed is Visible: ", props.isVisible);
  }, [props.isVisible]);

  useEffect(() => {
    if (props.isVisible) {
      setDelayedIsVisible(props.isVisible);
      setAnimation(props.appearAnimation ?? "");
    } else {
      setAnimation(props.disappearAnimation ?? "");
      setTimeout(() => {
        updateDelayedIsVisible();
      }, props.milliseconds);
    }
  }, [props.isVisible, props.milliseconds]);

  return (
    <StyledDiv
      style={props.style}
      className={props.className}
      animation={animation}
      milliseconds={props.milliseconds}
    >
      <HidableComponent isVisible={delayedIsVisible}>
        {props.children}
      </HidableComponent>
    </StyledDiv>
  );
};

export default HidableComponentWithAnimation;
