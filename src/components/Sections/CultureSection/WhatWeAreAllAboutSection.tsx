import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { window } from "browser-monads";

import Gif4c4 from "./../../../images/gifs/4c4u-optimized.gif";
import GifBeta from "./../../../images/gifs/beta.gif";
import GifExperience from "./../../../images/gifs/experience.gif";
import GifFreedom from "./../../../images/gifs/freedom.gif";
import GifFun from "./../../../images/gifs/fun.gif";
import GifHome from "./../../../images/gifs/home-optimized.gif";
import GifWow from "./../../../images/gifs/wow-optimized.gif";

import WavyUnderlineImage from "../../../images/wavy-underline.svg";
import clsx from "clsx";

const Title = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 89px;
  text-align: center;
  letter-spacing: 3px;
  margin-top: 110px;

  color: #000000;

  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 45px;
    line-height: 57px;
    text-align: center;
    letter-spacing: 3px;
    margin-top: 45px;
  }
`;

const Images = styled.div`
  width: 400px;
  margin: 0 50px;
`;

const Item = styled.div`
  padding: 60px 0;
`;

const ItemTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 45px;
  position: relative;
  display: inline-block;

  &.active::after {
    display: block;
    height: 14px;
    content: " ";
    background-image: url(${WavyUnderlineImage});
    background-repeat: repeat-x;
    background-size: 200px;
    margin-top: 4px;
    width: 100%;
    position: absolute;
    left: 0;
  }
`;

const ItemText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  max-width: 710px;
  margin-top: 8px;
`;

const Gif = styled.img`
  height: 220px;
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 480px;
`;

const renderGif = (gifNumber: number) => {
  const gifs = [
    GifExperience,
    GifFreedom,
    GifBeta,
    GifFun,
    GifHome,
    Gif4c4,
    GifWow,
  ];

  return gifs[gifNumber - 1];
};

const WhatWeAreAllAboutSection: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const [showingGif, setShowingGif] = useState<number>(1);
  const [gifPositionOffset, setGifPositionOffset] = useState<number>(0);

  const section1Ref = useRef<HTMLElement>();
  const section2Ref = useRef<HTMLElement>();
  const section3Ref = useRef<HTMLElement>();
  const section4Ref = useRef<HTMLElement>();
  const section5Ref = useRef<HTMLElement>();
  const section6Ref = useRef<HTMLElement>();
  const section7Ref = useRef<HTMLElement>();

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const centerOfCamera = scrollTop + 250;
    if (
      centerOfCamera >= section1Ref.current!.offsetTop &&
      centerOfCamera <=
        section7Ref.current!.offsetTop + section7Ref.current!.clientHeight / 3
    ) {
      const diff = centerOfCamera - section1Ref.current!.offsetTop;
      setGifPositionOffset(diff);
    }

    if (centerOfCamera >= section7Ref.current!.offsetTop) {
      setShowingGif(7);
    } else if (centerOfCamera >= section6Ref.current!.offsetTop) {
      setShowingGif(6);
    } else if (centerOfCamera >= section5Ref.current!.offsetTop) {
      setShowingGif(5);
    } else if (centerOfCamera >= section4Ref.current!.offsetTop) {
      setShowingGif(4);
    } else if (centerOfCamera >= section3Ref.current!.offsetTop) {
      setShowingGif(3);
    } else if (centerOfCamera >= section2Ref.current!.offsetTop) {
      setShowingGif(2);
    } else if (centerOfCamera >= section1Ref.current!.offsetTop) {
      setShowingGif(1);
    }
  }, [scrollTop]);

  return (
    <Container>
      {/*
        Esto es para precargar todas las imagenes al momento que se renderiza la pagina por primera vez. 
        Algunos gifs son muy pesados y lo que termina ocurriendo es que se demoran al mostrarse cuando el usuario hace scroll
      */}
      <div className="d-none">
        <img src={GifExperience} alt="" />
        <img src={GifFreedom} alt="" />
        <img src={GifBeta} alt="" />
        <img src={GifFun} alt="" />
        <img src={GifHome} alt="" />
        <img src={Gif4c4} alt="" />
        <img src={GifWow} alt="" />
      </div>
      <Title>What we are all about</Title>
      <div className="mt-5 d-flex">
        <div>
          <Row>
            <Col lg={5} className="d-flex justify-content-center">
              <GifContainer>
                <Gif
                  style={{ marginTop: `${gifPositionOffset}px` }}
                  src={renderGif(showingGif)}
                  alt=""
                />
              </GifContainer>
            </Col>
            <Col>
              <Item style={{ padding: "0 0 60px 0" }} ref={section1Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 1 })}>
                    People-centered
                  </ItemTitle>
                  <ItemText>
                    We are used to hearing about User Experience or Customer
                    Experience, but what about Employee Experience? We love to
                    work on these three EXP constantly.
                  </ItemText>
                </div>
              </Item>
              <Item ref={section2Ref}>
                <div>
                  <div>
                    <ItemTitle className={clsx({ active: showingGif === 2 })}>
                      With great freedom,
                    </ItemTitle>
                    <ItemTitle className={clsx({ active: showingGif === 2 })}>
                      comes great responsibility.
                    </ItemTitle>
                  </div>
                  <ItemText>
                    Be free. This is undoubtedly the best way to reach your
                    maximum potential. Just be careful, your freedom ends where
                    another's begins. Watch out for others, so your coworkers’
                    job isn’t affected.
                  </ItemText>
                </div>
              </Item>
              <Item ref={section3Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 3 })}>
                    Permanently on Beta
                  </ItemTitle>
                  <ItemText>
                    We were taught that making a mistake was the end of the
                    world. Our western culture is educated with carrots and
                    sticks. We are here to change that. If a person doesn’t make
                    mistakes, it’s only because they never try to do something
                    new.
                  </ItemText>
                </div>
              </Item>
              <Item ref={section4Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 4 })}>
                    Let’s have fun with it.
                  </ItemTitle>
                  <ItemText>
                    Who said work is just for working? If you have fun working,
                    you’ll get up with a smile on your face every morning. Wise
                    people say that if you do what you love, you won’t work a
                    day in your life.
                  </ItemText>
                </div>
              </Item>
              <Item ref={section5Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 5 })}>
                    There’s no place like home.
                  </ItemTitle>
                  <ItemText>
                    The working environment is different to all you have known.
                    Really. We’re obsessed with making Braintly feel like home
                    and not a cold place.
                  </ItemText>
                </div>
              </Item>
              <Item ref={section6Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 6 })}>
                    4C 4U
                  </ItemTitle>
                  <ItemText>
                    Collaboration. Communication. Confidence. Commitment. Those
                    are our standards. We listen and understand, and then we
                    seek to be understood. Communicate in a clear way. Provide
                    and build trust with the people you surround yourself with.
                    Commit to yourself and to your career.
                  </ItemText>
                </div>
              </Item>
              <Item style={{ padding: "60px 0 0 0" }} ref={section7Ref}>
                <div>
                  <ItemTitle className={clsx({ active: showingGif === 7 })}>
                    Be a{" "}
                    <strong>
                      <i>Wow!</i>
                    </strong>
                  </ItemTitle>
                  <ItemText>
                    There’s nothing better than hearing the words ‘Hey dude,
                    what a great work you’ve done”. Or maybe that someone comes
                    up to you and says “Thanks to you my life has changed”. It’s
                    comforting to the soul. If we want that, we have to beat our
                    expectations. Be humble. Help and let yourself be helped.
                  </ItemText>
                </div>
              </Item>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};
export default WhatWeAreAllAboutSection;
