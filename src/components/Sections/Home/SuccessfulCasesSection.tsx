import React from "react";

import BlendedStatic from "../../../images/successfull-cases/Blended_Static.png";
import BlendedHover from "../../../images/successfull-cases/Blended_Hover.png";
import DecreditosStatic from "../../../images/successfull-cases/Decreditos_Static.png";
import DecreditosHover from "../../../images/successfull-cases/Decreditos_Hover.png";
import TupperwareStatic from "../../../images/successfull-cases/Tupperware_Static.png";
import TupperwareHover from "../../../images/successfull-cases/Tupperware_Hover.png";
import Time2talkStatic from "../../../images/successfull-cases/Time2talk_Static.png";
import Time2talkHover from "../../../images/successfull-cases/Time2talk_Hover.png";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import HoverableImage from "../../HoverableImage";
import PrimaryButton from "../../UiKit/PrimaryButton/PrimaryButton";

const StyledContainer = styled(Container)`
  margin-top: -45px;
`;

const SuccessFulTitle = styled.h3`
  margin-top: 40px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;
  /* identical to box height */

  letter-spacing: 2px;
`;

const SuccessFulText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;
  max-width: 486px;
  /* or 127% */
`;

const SuccessFulImage = styled(HoverableImage)`
  width: 520px;
  height: 380px;
`;

const SuccessFulCase = styled.div`
  margin-bottom: 140px;
`;

const Offset = styled.div`
  margin-top: 210px;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 330px;
`;

const SuccessfulCasesSection: React.FC = () => {
  return (
    <StyledContainer>
      <Row>
        <Col md={1} />
        <Col md={5}>
          <SuccessFulCase>
            <SuccessFulImage
              srcHover={TupperwareHover}
              src={TupperwareStatic}
              alt="Tupperware Image"
            />
            <SuccessFulTitle>Tupperware</SuccessFulTitle>
            <SuccessFulText>
              We took their ecommerce to the next level: automations,
              integrations and a brand new tool for their sales force.{" "}
            </SuccessFulText>
          </SuccessFulCase>
          <SuccessFulCase>
            <SuccessFulImage
              className="mt-5"
              src={DecreditosStatic}
              srcHover={DecreditosHover}
              alt="Decreditos Image"
            />
            <SuccessFulTitle>Decréditos</SuccessFulTitle>
            <SuccessFulText>
              A digital transformation that helped this company to lend money
              100% online and give user car dealerships a huge app ecosystem to
              improve their businesses.
            </SuccessFulText>
          </SuccessFulCase>
        </Col>
        <Col md={5}>
          <Offset />
          <SuccessFulCase>
            <SuccessFulImage
              srcHover={Time2talkHover}
              src={Time2talkStatic}
              alt="Time2Talk Image"
            />
            <SuccessFulTitle>Time2Talk</SuccessFulTitle>
            <SuccessFulText>
              A simple, accessible, and student-oriented mobile app that helps
              institutions and end-users to learn and practice Spanish with
              native speakers from Latin America on-demand.
            </SuccessFulText>
          </SuccessFulCase>
          <SuccessFulCase>
            <SuccessFulImage
              className="mt-5"
              srcHover={BlendedHover}
              src={BlendedStatic}
              alt="Blended Image"
            />
            <SuccessFulTitle>BlendED</SuccessFulTitle>
            <SuccessFulText>
              BlendEd is an easy-to-use course-building web platform that
              empowers educators to create on-demand and diversely accessible
              learning experiences, one week at a time!.
            </SuccessFulText>
          </SuccessFulCase>
        </Col>
        <Col md={1} />
      </Row>

      <div className="d-flex justify-content-center">
          <StyledPrimaryButton onClick={() => {
            window.location = "/contact";
          }}>Book a Meeting</StyledPrimaryButton>
      </div>
    </StyledContainer>
  );
};

export default SuccessfulCasesSection;
