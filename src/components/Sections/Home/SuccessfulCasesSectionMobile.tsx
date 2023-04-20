import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BlendedStatic from "../../../images/successfull-cases/Blended_Static.png";
import DecreditosStatic from "../../../images/successfull-cases/Decreditos_Static.png";
import TupperwareStatic from "../../../images/successfull-cases/Tupperware_Static.png";
import Time2talkStatic from "../../../images/successfull-cases/Time2talk_Static.png";

import PrimaryButton from "../../UiKit/PrimaryButton/PrimaryButton";
import CustomCarousel from "../../CustomCarousel";

const StyledContainer = styled(Container)`
  margin-top: 60px;
`;

const ServiceImg = styled.img`
  width: 315px !important;
  height: 230px !important;
`;

const ServiceTitle = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
`;
const ServiceText = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  text-align: center;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 100%;
`;

const SuccessfulCasesSectionMobile: React.FC = () => {
  return (
    <StyledContainer>
      <CustomCarousel>
        <div>
          <ServiceImg src={TupperwareStatic} />
          <ServiceTitle>Tupperware</ServiceTitle>
          <ServiceText>
            We took their ecommerce to the next level: automations, integrations
            and a brand new tool for their sales force.{" "}
          </ServiceText>
        </div>
        <div>
          <ServiceImg src={DecreditosStatic} />
          <ServiceTitle>Decréditos</ServiceTitle>
          <ServiceText>
            A digital transformation that helped this company to lend money 100%
            online and give user car dealerships a huge app ecosystem to improve
            their businesses.
          </ServiceText>
        </div>
        <div>
          <ServiceImg src={Time2talkStatic} />
          <ServiceTitle>Time2Talk</ServiceTitle>
          <ServiceText>
            A simple, accessible, and student-oriented mobile app that helps
            institutions and end-users to learn and practice Spanish with native
            speakers from Latin America on-demand.
          </ServiceText>
        </div>
        <div>
          <ServiceImg src={BlendedStatic} />
          <ServiceTitle>Blended</ServiceTitle>
          <ServiceText>
            BlendEd is an easy-to-use course-building web platform that empowers
            educators to create on-demand and diversely accessible learning
            experiences, one week at a time!.
          </ServiceText>
        </div>
      </CustomCarousel>
      <div className="mt-5 w-100">
          <StyledPrimaryButton onClick={() => {
            window.location = "/contact";
          }}>Book a Meeting</StyledPrimaryButton>
      </div>
    </StyledContainer>
  );
};

export default SuccessfulCasesSectionMobile;
