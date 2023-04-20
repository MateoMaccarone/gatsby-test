import React from "react";
import DoubleCaretDownCyan from "../../../images/double-caret-down-cyan.svg";
import HappyFace from "../../../images/happy-face.svg";
import styled from "styled-components";
import Display from "../../Display";

const TitleSection = styled.div`
  margin-bottom: 100px;
  padding-right: 20px;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }

  .happy-face {
    height: 23px;
    margin-left: 30px;
  }
`;

const JoinTheTeamTitle = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 115px;
  text-align: right;
  letter-spacing: 1px;

  @media (max-width: 992px) {
    font-size: 50px;
    line-height: 64px;
    letter-spacing: 1px;
  }
`;

const JoinTheTeamHomeHeader: React.FC = () => {
  return (
    <>
      <Display on="desktop">
        <div className="d-flex flex-column align-items-end">
          <img
            className="arrow-home"
            src={DoubleCaretDownCyan}
            alt="Arrows Down"
          />
          <TitleSection className="d-flex align-items-center justify-content-end">
            <JoinTheTeamTitle className="text-end">
              Join the team!
            </JoinTheTeamTitle>
            <img
              className="d-none d-lg-block happy-face"
              src={HappyFace}
              alt="Happy Face"
            />
          </TitleSection>
        </div>
      </Display>
      <Display on="mobile">
        <TitleSection className="d-flex flex-column align-items-end justify-content-end">
          <div className="d-flex flex-column justify-content-end align-items-end">
            <img
              className="arrow"
              src={DoubleCaretDownCyan}
              alt="Arrows Down"
              style={{ marginBottom: "20px" }}
            />
            <JoinTheTeamTitle className="text-end">
              Join the <br />
              team!{" "}
              <img className="happy-face" src={HappyFace} alt="Happy Face" />
            </JoinTheTeamTitle>
          </div>
        </TitleSection>
      </Display>
    </>
  );
};

export default JoinTheTeamHomeHeader;
