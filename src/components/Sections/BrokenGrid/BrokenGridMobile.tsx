import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Photos1 from "../../../images/photos/photos-1.png";
import Photos2 from "../../../images/photos/photos-2.png";
import Photos3 from "../../../images/photos/photos-3.png";
import Photos4 from "../../../images/photos/photos-4.png";
import Photos5 from "../../../images/photos/photos-5.png";
import styled from "styled-components";

import Emoji1 from "../../../images/emojis/emoji1.svg";
import Emoji2 from "../../../images/emojis/emoji2.svg";
import Emoji3 from "../../../images/emojis/emoji3.svg";
import Emoji4 from "../../../images/emojis/emoji4.svg";
import Emoji5 from "../../../images/emojis/emoji5.svg";
import Emoji6 from "../../../images/emojis/emoji6.svg";
import Emoji7 from "../../../images/emojis/emoji7.svg";
import Emoji8 from "../../../images/emojis/emoji8.svg";
import Emoji9 from "../../../images/emojis/emoji9.svg";
import Emoji10 from "../../../images/emojis/emoji10.svg";
import ShakerEmoji from "../../ShakerEmoji";

const Wrapper = styled.div`
  & .photo-1 {
    width: 185px;
  }

  & .photo-2 {
    width: 315px;
  }

  & .photo-3 {
    width: 273px;
  }

  & .photo-4 {
    width: 185px;
  }

  & .photo-5 {
    width: 189px;
  }
`;

const Title = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 57px;
  text-align: center;
  letter-spacing: 1px;
  max-width: 315px;
`;

const Layer1 = styled.div`
  position: relative;
  max-width: 400px;
`;

const Layer2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BrokenGrid: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div className="d-flex justify-content-center">
          <Title>These are the people that make Braintly what it is </Title>
        </div>
        <div className="d-flex justify-content-center">
          <Layer1>
            <Layer2>
              <ShakerEmoji
                style={{
                  position: "relative",
                  left: "20px",
                  top: "18px",
                  height: "24px",
                }}
                src={Emoji1}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "400px",
                  left: "240px",
                  height: "24px",
                }}
                src={Emoji10}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "200px",
                  left: "260px",
                  height: "24px",
                }}
                src={Emoji3}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "460px",
                  left: "200px",
                  height: "24px",
                }}
                src={Emoji6}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "680px",
                  left: "30px",
                  height: "24px",
                }}
                src={Emoji5}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "-165px",
                  right: "-274px",
                  height: "24px",
                }}
                src={Emoji2}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "447px",
                  left: "33px",
                  height: "24px",
                }}
                src={Emoji4}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "543px",
                  left: "315px",
                  zIndex: "999",
                  height: "24px",
                }}
                src={Emoji2}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "1000px",
                  left: "20px",
                  height: "24px",
                }}
                src={Emoji10}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "700px",
                  left: "270px",
                  height: "24px",
                  zIndex: "999",
                }}
                src={Emoji9}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "1140px",
                  left: "20px",
                  height: "24px",
                }}
                src={Emoji8}
                alt=""
              />
              <ShakerEmoji
                style={{
                  position: "relative",
                  top: "1140px",
                  left: "220px",
                  height: "24px",
                }}
                src={Emoji7}
                alt=""
              />
            </Layer2>
            <div className="d-flex flex-column align-items-center">
              <img
                style={{ position: "relative", left: 0, marginTop: "60px" }}
                className="photo-3"
                src={Photos3}
                alt="Photo 3"
              />
              <img
                style={{
                  position: "relative",
                  left: "-70px",
                  marginTop: "30px",
                }}
                className="photo-1"
                src={Photos1}
                alt="Photo 1"
              />
              <img
                style={{
                  position: "relative",
                  left: "60px",
                  marginTop: "70px",
                }}
                className="photo-4"
                src={Photos4}
                alt="Photo 4"
              />
              <img
                style={{
                  position: "relative",
                  left: "-40px",
                  marginTop: "60px",
                }}
                className="photo-5"
                src={Photos5}
                alt="Photo 5"
              />
              <img
                style={{ position: "relative", marginTop: "60px" }}
                className="photo-2"
                src={Photos2}
                alt="Photo 2"
              />
            </div>
          </Layer1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BrokenGrid;
