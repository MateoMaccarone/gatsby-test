import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Gif4c4 from "./../../../images/gifs/4c4u.gif";
import GifBeta from "./../../../images/gifs/beta.gif";
import GifExperience from "./../../../images/gifs/experience.gif";
import GifFreedom from "./../../../images/gifs/freedom.gif";
import GifFun from "./../../../images/gifs/fun.gif";
import GifHome from "./../../../images/gifs/home.gif";
import GifWow from "./../../../images/gifs/wow.gif";
import CustomCarousel from "../../CustomCarousel";

const Title = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 89px;
  text-align: center;
  letter-spacing: 3px;

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

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 320px;
  }
`;

const ItemTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 3px;
  margin-top: 24px;
`;

const ItemText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  text-align: center;
`;

const Gif = styled.img`
  max-width: 315px;
  width: auto;
`;

const WhatWeAreAllAboutSectionMobile: React.FC = () => {
  return (
    <Container>
      <Title>What we are all about</Title>
      <div className="mt-5">
        <CustomCarousel loop={true} arrows={true}>
          <Item>
            <Gif src={GifExperience} />
            <ItemTitle>People-centered</ItemTitle>
            <ItemText>
              We are used to hearing about User Experience or Customer
              Experience, but what about Employee Experience? We love to work on
              these three EXP constantly.
            </ItemText>
          </Item>
          <Item>
            <Gif src={GifFreedom} />
            <ItemTitle>
              With great freedom, comes great responsibility.
            </ItemTitle>
            <ItemText>
              Be free. This is undoubtedly the best way to reach your maximum
              potential. Just be c ends where another's begins. Watch out for
              others, so your coworkers’ job isn’t affected.
            </ItemText>
          </Item>
          <Item>
            <Gif src={GifBeta} />
            <ItemTitle>Permanently on Beta</ItemTitle>
            <ItemText>
              We were taught that making a mistake was the end of the world. Our
              western culture is educated with carrots and sticks. We are here
              to change that. If a person doesn’t make mistakes, it’s only
              because they never try to do something new.
            </ItemText>
          </Item>
          <Item>
            <Gif src={GifFun} />
            <ItemTitle>Let’s have fun with it.</ItemTitle>
            <ItemText>
              Who said work is just for working? If you have fun working, you’ll
              get up with a smile on your face every morning. Wise people say
              that if you do what you love, you won’t work a day in your life.
            </ItemText>
          </Item>
          <Item>
            <Gif src={GifHome} />
            <ItemTitle>There’s no place like home.</ItemTitle>
            <ItemText>
              The working environment is different to all you have known.
              Really. We’re obsessed with making Braintly feel like home and not
              a cold place.
            </ItemText>
          </Item>
          <Item>
            <Gif src={Gif4c4} />
            <ItemTitle>4C 4U</ItemTitle>
            <ItemText>
              Collaboration. Communication. Confidence. Commitment. Those are
              our standards. We listen and understand, and then we seek to be
              understood. Communicate in a clear way. Provide and build trust
              with the people you surround yourself with. Commit to yourself and
              to your career.
            </ItemText>
          </Item>
          <Item>
            <Gif src={GifWow} />
            <ItemTitle>
              Be a{" "}
              <strong>
                <i>Wow!</i>
              </strong>
            </ItemTitle>
            <ItemText>
              There’s nothing better than hearing the words ‘Hey dude, what a
              great work you’ve done”. Or maybe that someone comes up to you and
              says “Thanks to you my life has changed”. It’s comforting to the
              soul. If we want that, we have to beat our expectations. Be
              humble. Help and let yourself be helped.
            </ItemText>
          </Item>
        </CustomCarousel>
      </div>
    </Container>
  );
};
export default WhatWeAreAllAboutSectionMobile;
