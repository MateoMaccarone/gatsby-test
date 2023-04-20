import * as React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

import TravoltaGif from "./../images/gifs/404-optimized.gif";

import CrossImage from "./../images/cross.svg";

const Title = styled.h1`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 108px;
  text-align: center;
  letter-spacing: 3px;

  color: #000000;

  @media (max-width: 992px) {
    font-size: 72px;
  }
`;

const Text = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 3px;
  max-width: 630px;
  color: #000000;

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;

const SubText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  max-width: 760px;

  text-align: center;
  color: #000000;

  @media (max-width: 992px) {
    font-size: 17px;
  }
`;

const Highlight = styled.a`
  background: #49ffca;
  font-weight: 600;
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
    color: inherit;
  }
  &:active {
    color: #ffffff;
    background: black;
  }
`;

const StyledDiv = styled.div`
  @media (max-width: 992px) {
    padding: 0 12px;
  }
`;

const TravoltaImage = styled.img`
  @media (min-width: 992px) {
    width: 594px;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-around container-sm">
        <div className="flex-column align-items-center gap-4 mt-5 d-none d-md-flex">
          <img src={CrossImage} alt="Cross Image" />
          <img src={CrossImage} alt="Cross Image" />
          <img src={CrossImage} alt="Cross Image" />
        </div>
        <StyledDiv>
          <Title className="mt-4">Oops!</Title>
          <div className="d-flex flex-column align-items-center mt-3">
            <TravoltaImage
              className="img-fluid"
              src={TravoltaGif}
              alt="Not found gif"
            />
            <Text className="mt-5">
              It seems the page you were looking for doesn’t exist
            </Text>
            <SubText>
              Maybe you would like to find out about{" "}
              <Highlight href="/">our services</Highlight> instead, learn about{" "}
              <Highlight href="/culture">our culture</Highlight>, or{" "}
              <Highlight href="/contact">send us a message</Highlight> to start
              working together.{" "}
            </SubText>
          </div>
        </StyledDiv>
        <div className="flex-column align-items-center justify-content-end gap-4 mt-5 d-none d-md-flex">
          <img src={CrossImage} alt="Cross Image" />
          <img src={CrossImage} alt="Cross Image" />
          <img src={CrossImage} alt="Cross Image" />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
