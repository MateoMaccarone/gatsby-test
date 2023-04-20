import React from "react";
import styled from "styled-components";

import LogoImage from "./../../images/logo-white.svg";
import ArgFlag from "./../../images/argflag.svg";
import RedHeart from "./../../images/heart.png";

import TwitterImage from "./../../images/social-media/twitter-inv.svg";
import TwitterPressedImage from "./../../images/social-media/twitter-inv-pressed.svg";
import InstagramImage from "./../../images/social-media/instagram-inv.svg";
import InstagramPressedImage from "./../../images/social-media/instagram-inv-pressed.svg";
import LinkedInImage from "./../../images/social-media/linked-in-inv.svg";
import LinkedInPressedImage from "./../../images/social-media/linked-in-inv-pressed.svg";

import ZigZagSeparatorImage from "./../../images/zig-zag-separator.svg";

import { Col, Container, Row } from "react-bootstrap";
import GrowerImage from "../GrowerImage";
import Display from "../Display";
import FooterButton from "../FooterButton";

const StyledFooter = styled.footer`
  background: black;
  padding: 56px 0;
  color: white;
  margin-top: 140px;

  & .red-heart {
    height: 24px;
  }

  & .argentina-flag {
    height: 24px;
  }
`;

const FooterList = styled.h3`
  margin-top: 15px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;

  @media (max-width: 992px) {
    margin: 20px 0;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & ul li {
    margin: 12px 0;
  }
`;

const MailTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height */

  text-align: right;
  text-transform: uppercase;

  @media (max-width: 992px) {
    text-align: center !important;
  }
  @media (max-width: 330px) {
    text-align: center !important;
    font-size: 16px;
  }
`;

const Mail = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  line-height: 45px;
  text-align: right;
  color: #edf3f2;

  & .highlight {
    color: #48ffcb;
  }

  & a {
    color: white;
    text-decoration: none;

    &:hover {
      color: white;
      text-decoration: underline;
    }

    &:active {
      color: #48ffcb;
    }
  }

  @media (max-width: 992px) {
    text-align: center !important;
    font-size: 30px;
  }
  @media (max-width: 330px) {
    text-align: center !important;
    font-size: 24px;
  }
`;

const ExtraInfo = styled(Row)`
  margin-top: 60px !important;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  color: #edf3f2;
  text-align: right;

  .from-argentina {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 1.2px;
  }

  @media (max-width: 992px) {
    text-align: center !important;

    .copyright {
      margin-top: 16px;
      line-height: 13px;
    }

    .from-argentina {
      display: flex;
      justify-content: center;
      flex-direction: column;

      & > img {
        margin: 5px 0;
      }
    }
  }
`;

const StyledCol = styled(Col)`
  @media (min-width: 992px) {
    margin-left: 36px;
  }
`;

const LogoImg = styled.img`
  width: 116px;
  height: 36px;
`;

const ClickableDiv = styled.div`
  @media (max-width: 992px) {
    margin: 0 1.2em;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ZigZagSeparator = styled.img`
  width: 191px;
  height: 8px;
`;

const StyledRow = styled(Row)``;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col xs={6}>
            <div className="d-flex">
              <LogoImg src={LogoImage} alt="" />
            </div>
          </Col>
          <Col xs={6} className="d-flex justify-content-end gap-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/braintly/"
            >
              <GrowerImage
                src={LinkedInImage}
                pressed={LinkedInPressedImage}
                alt={"Linked In"}
              />
            </a>
            <a target="_blank" href="https://twitter.com/wearebraintly">
              <GrowerImage
                src={TwitterImage}
                pressed={TwitterPressedImage}
                alt={"Linked In"}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/wearebraintly/">
              <GrowerImage
                src={InstagramImage}
                pressed={InstagramPressedImage}
                alt={"Instagram"}
              />
            </a>
          </Col>
        </Row>
        <StyledRow className="mt-5">
          <Col lg={2}>
            <ClickableDiv
              onClick={() => (window.location = "/product-discovery")}
            >
              <FooterButton href="/product-discovery">Discovery</FooterButton>
              <FooterList>
                <ul>
                  <li>Product Strategy</li>
                  <li>Business Strategy</li>
                  <li>Proof of Concept</li>
                  <li>Design Sprint</li>
                  <li>MVP Definition</li>
                </ul>
              </FooterList>
            </ClickableDiv>
          </Col>
          <Col lg={2}>
            <ClickableDiv
              onClick={() => (window.location = "/design-and-build")}
            >
              <FooterButton href="/design-and-build">
                Design & Build
              </FooterButton>
              <FooterList>
                <ul>
                  <li>User Experience</li>
                  <li>User Interface</li>
                  <li>Mobile Apps</li>
                  <li>Web Apps</li>
                  <li>APIs & Infrastructure</li>
                </ul>
              </FooterList>
            </ClickableDiv>
          </Col>
          <StyledCol lg={3}>
            <ClickableDiv onClick={() => (window.location = "/scale-growth")}>
              <FooterButton href="/scale-growth">Scale & Growth</FooterButton>
              <FooterList>
                <ul>
                  <li>Time & Materials</li>
                  <li>Development Support</li>
                  <li>Team Scale</li>
                  <li>Continuous improvement</li>
                  <li>Staff Augmentation</li>
                </ul>
              </FooterList>
            </ClickableDiv>
          </StyledCol>
          <Col className="text-center-mobile">
            <Display on="mobile">
              <div
                style={{ margin: "40px 0" }}
                className="d-flex justify-content-center"
              >
                <ZigZagSeparator src={ZigZagSeparatorImage} alt="separator" />
              </div>
            </Display>
            <MailTitle>CONTACT US</MailTitle>
            <Mail>
              <a href="mailto:hey@braintly.com">
                hey@braintly<span className="highlight">.</span>com
              </a>
            </Mail>
            <MailTitle className="mt-4">JOIN OUR TEAM</MailTitle>
            <Mail>
              <a href="mailto:jobs@braintly.com">
                jobs@braintly<span className="highlight">.</span>com
              </a>
            </Mail>
          </Col>
        </StyledRow>
        <ExtraInfo>
          <Col lg={6}>
            <div className="from-argentina">
              <span className="ms-2">
                From{" "}
                <img
                  className="argentina-flag"
                  src={ArgFlag}
                  alt="Argentina Flag"
                />{" "}
                to the World with{" "}
                <img className="red-heart" src={RedHeart} alt="Red Heart" />.
              </span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="copyright">
              © {new Date().getFullYear()} Braintly. All rights reserved.
            </div>
          </Col>
        </ExtraInfo>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
