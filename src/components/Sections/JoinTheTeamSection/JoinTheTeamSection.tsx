import React from "react";
import styled from "styled-components";
import JobBox from "../../JobBox";

import DoubleCaretRight from "./../../../images/double-caret-right-cyan.svg";
import DoubleCaretDownCyan from "./../../../images/double-caret-down-cyan.svg";

import HappyFace from "./../../../images/happy-face.svg";
import { Col, Row } from "react-bootstrap";
import Display from "../../Display";
import CustomCarousel from "../../CustomCarousel";
import JobBoxMobile from "../../JobBoxMobile";
import JoinTheTeamHomeHeader from "./JoinTheTeamHomeHeader";
import JoinTheTeamCultureHeader from "./JoinTheTeamCultureHeader";

const StyledJoinTheTeamSection = styled.section`
  margin-top: 120px;

  @media (max-width: 992px) {
    margin-top: 80px;
  }

  & .arrow-home {
    height: 50px;
    margin-right: 32px;
    position: relative;
    top: -130px;
    left: 30px;

    @media (max-width: 992px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  & .arrow-culture {
    height: 50px;
    margin-right: 32px;
    position: relative;

    @media (max-width: 992px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

interface JoinTheTeamSectionProps {
  mode: "home" | "culture";
}

const JoinTheTeamSection: React.FC<JoinTheTeamSectionProps> = (props) => {
  return (
    <StyledJoinTheTeamSection className="container">
      {props.mode === "home" && <JoinTheTeamHomeHeader />}
      {props.mode === "culture" && <JoinTheTeamCultureHeader />}
      <Display on="mobile">
        <CustomCarousel
          autoPlay={true}
          interval={4000}
          loop={true}
          arrows={false}
        >
          <JobBoxMobile
            title="Full Stack Semi Senior"
            link="https://www.notion.so/braintly/Full-Stack-Ssr-Developer-27ea5fbe12b544eda18a933f395cc039"
            location="Argentina - Remote"
          />
          <JobBoxMobile
            title="Project Leader"
            link="https://www.notion.so/braintly/Project-Leader-0e332357d59d46259de8018e80f27acf"
            location="Argentina - Remote"
          />
          <JobBoxMobile
            title="QA Analyst"
            link="https://www.notion.so/braintly/QA-Analyst-eb1a6bf3f6e6442a853e8f45a50696c2"
            location="Argentina - Remote"
          />
          <JobBoxMobile
            title="UX/UI Designer"
            link="https://www.notion.so/braintly/UX-UI-Designer-d51aaf16236c4089a6347305a8202c92"
            location="Argentina - Remote"
          />
        </CustomCarousel>
      </Display>
      <Display on="desktop">
        <Row>
          <Col lg={6}>
            <JobBox
              title="Full Stack Semi Senior"
              link="https://www.notion.so/braintly/Full-Stack-Ssr-Developer-27ea5fbe12b544eda18a933f395cc039"
              location="Argentina - Remote"
            />
          </Col>
          <Col lg={6}>
            <JobBox
              title="Project Leader"
              link="https://www.notion.so/braintly/Project-Leader-0e332357d59d46259de8018e80f27acf"
              location="Argentina - Remote"
            />
          </Col>
          <Col lg={6}>
            <JobBox
              title="QA Analyst"
              link="https://www.notion.so/braintly/QA-Analyst-eb1a6bf3f6e6442a853e8f45a50696c2"
              location="Argentina - Remote"
            />
          </Col>
          <Col lg={6}>
            <JobBox
              title="UX/UI Designer"
              link="https://www.notion.so/braintly/UX-UI-Designer-d51aaf16236c4089a6347305a8202c92"
              location="Argentina - Remote"
            />
          </Col>
        </Row>
      </Display>
    </StyledJoinTheTeamSection>
  );
};

export default JoinTheTeamSection;
