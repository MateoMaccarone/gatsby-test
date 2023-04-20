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
    margin-top: 110px;
    width: 420px;
  }

  & .photo-2 {
    margin-top: 260px;
  }

  & .photo-3 {
    width: 620px;
  }

  & .photo-4 {
    margin-left: -310px;
    margin-top: 60px;
  }

  & .photo-5 {
    margin-top: 110px;
  }
`;

const Title = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 89px;
  letter-spacing: 1px;

  color: #000000;
  max-width: 763px;
`;

const Layer1 = styled.div`
  position: relative;
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
        <Title>These are the people that make Braintly what it is </Title>
        <Layer1>
          <Layer2>
            <Row>
              <Col lg={6}>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{ position: "relative", right: "90px", top: "18px" }}
                    src={Emoji1}
                    alt=""
                  />
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "230px",
                      left: "-30px",
                    }}
                    src={Emoji10}
                    alt=""
                  />
                </div>
                <div>
                  <ShakerEmoji
                    style={{ position: "relative", top: "440px", left: 0 }}
                    src={Emoji3}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "650px",
                      right: "180px",
                    }}
                    src={Emoji4}
                    alt=""
                  />
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "750px",
                      right: "370px",
                    }}
                    src={Emoji5}
                    alt=""
                  />
                </div>
                <div>
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "1350px",
                      left: "80px",
                    }}
                    src={Emoji8}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "1350px",
                      right: "20px",
                    }}
                    src={Emoji7}
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "-180px",
                      right: "160px",
                    }}
                    src={Emoji2}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "380px",
                      right: "30px",
                    }}
                    src={Emoji4}
                    alt=""
                  />
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "600px",
                      right: "45px",
                    }}
                    src={Emoji6}
                    alt=""
                  />
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "760px",
                      right: "55px",
                    }}
                    src={Emoji2}
                    alt=""
                  />
                </div>
                <div>
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "1000px",
                      left: "20px",
                    }}
                    src={Emoji10}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-end flex-column">
                  <ShakerEmoji
                    style={{
                      position: "relative",
                      top: "1200px",
                      right: "-10px",
                    }}
                    src={Emoji9}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Layer2>
          <Row>
            <Col lg={6} className="d-flex flex-column align-items-center">
              <img className="photo-1" src={Photos1} alt="Photo 1" />
              <img className="photo-2" src={Photos2} alt="Photo 2" />
            </Col>
            <Col lg={6} className="d-flex flex-column align-items-center">
              <img className="photo-3" src={Photos3} alt="Photo 3" />
              <img className="photo-4" src={Photos4} alt="Photo 4" />
              <img className="photo-5" src={Photos5} alt="Photo 5" />
            </Col>
          </Row>
        </Layer1>
      </Container>
    </Wrapper>
  );
};

export default BrokenGrid;
