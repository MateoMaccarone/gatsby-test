import React from "react";
import { Carousel } from "react-responsive-carousel";

import DotGrey from "./../images/dot-grey.svg";
import DotCyan from "./../images/dot-cyan.svg";
import CaretLeft from "./../images/caret-left.svg";
import CaretRight from "./../images/caret-right.svg";
import styled from "styled-components";

interface CustomCarouselProps {
  children?: React.ReactChild[];
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  widthControlDots?: string;
  arrows?: boolean;
}

const defaultProps: Partial<CustomCarouselProps> = {
  arrows: true,
};

const Wrapper = styled.div<Partial<CustomCarouselProps>>`
  padding: 0 ${(props) => (props.arrows ? `20px` : `0`)};

  & .carousel {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 20px;
    overflow: inherit;

    @media (max-width: 992px) {
      //padding-bottom: 60px;
    }
  }

  & .control-dots {
    display: flex;
    flex-direction: row;
    width: ${(props) =>
      props.widthControlDots
        ? `${props.widthControlDots}`
        : "180px"} !important;
    position: relative;
    bottom: 0 !important;
    margin: 0 !important;
  }
`;

const Dot = styled.img`
  width: 10px;
  height: 10px;
`;

const ArrowDivNext = styled.div`
  top: 0;
  bottom: 0;
  margin-top: 0;
  padding: 5px;
  right: -35px;
  position: absolute;
  z-index: 2;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const ArrowDivPrev = styled.div`
  top: 0;
  bottom: 0;
  margin-top: 0;
  padding: 5px;
  left: -35px;
  position: absolute;
  z-index: 2;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const ArrowImage = styled.img`
  width: 24px;
  height: 24px;
`;

const CustomCarousel: React.FC<CustomCarouselProps> = (props) => {
  return (
    <Wrapper arrows={props.arrows} widthControlDots={props.widthControlDots}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={props.arrows}
        autoPlay={props.autoPlay}
        interval={props.interval}
        infiniteLoop={props.loop}
        renderArrowPrev={(onClick) => {
          if (!props.arrows) return null;
          return (
            <ArrowDivPrev onClick={() => onClick()}>
              <ArrowImage src={CaretLeft} />
            </ArrowDivPrev>
          );
        }}
        renderArrowNext={(onClick) => {
          if (!props.arrows) return null;
          return (
            <ArrowDivNext onClick={() => onClick()}>
              <ArrowImage src={CaretRight} />
            </ArrowDivNext>
          );
        }}
        renderIndicator={(handler, active) => {
          if (active) {
            return <Dot src={DotCyan} alt="" />;
          }
          return <Dot src={DotGrey} alt="" />;
        }}
      >
        {props.children}
      </Carousel>
    </Wrapper>
  );
};

CustomCarousel.defaultProps = defaultProps;

export default CustomCarousel;
