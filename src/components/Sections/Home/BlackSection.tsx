import React from "react";
import styled from "styled-components";
import "./BlackSection.css";

import Separator1 from "../../../images/separator1.svg";

import DoubleCaretLeft from "../../../images/double-caret-left.svg";
import DoubleCaretRight from "../../../images/double-caret-right.svg";
import SlotMachine from "../../SlotMachine";
import Display from "../../Display";

const BorderTop = styled.div`
  background-image: url(${Separator1});
  width: 100%;
  height: 40px;
  background-size: cover;
  background-repeat: repeat-x;
  margin-top: 250px;
  margin-bottom: -3px;

  @media (max-width: 992px) {
    margin-top: 85px;
  }
`;

const BlackSectionStyled = styled.section`
  padding: 100px 100px 80px;
  min-height: 300px;
  width: 100%;
  background-color: #000;
  color: white;
  background-repeat: repeat-x;

  @media (max-width: 992px) {
    padding: 50px 12px 50px;
    line-height: 22px;
    letter-spacing: 3px;
  }
`;

const StyledParagraph = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 27px;
  letter-spacing: 3px;
  margin: 15px 0;

  @media (min-width: 992px) {
    max-width: 420px;
  }
`;

const StyledCreatedWith = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  margin: 5px 0;
  text-align: center;
  color: #ffffff;

  @media (max-width: 992px) {
    font-size: 26px;
    line-height: 33px;
  }
`;

const Words = styled.div`
  margin: 60px 0;
`;

const BlackSection: React.FC = () => {
  return (
    <>
      <BorderTop />
      <BlackSectionStyled>
        <div className="container">
          <div className="d-flex justify-content-start flex-column">
            <StyledParagraph>
              We are an interdisciplinary team specialized in designing and
              developing:
            </StyledParagraph>
            <div>
              <img src={DoubleCaretRight} alt="Arrow Right" />
            </div>
          </div>
          <Words className="d-flex justify-content-center align-items-center flex-column">
            <Display on="desktop">
              <SlotMachine
                texts={[
                  "Great Experiences",
                  "Beautiful Code",
                  "Speed of Light Web Apps",
                  "State of the Art Mobile Apps",
                  "Robust QA",
                  "Crafted Digital Products",
                ]}
              />
              <StyledCreatedWith>created with</StyledCreatedWith>
              <SlotMachine
                texts={[
                  "UX Workshops",
                  "Open Source Techs",
                  "Javascript Stack",
                  "React Native",
                  "CI/CD tools",
                  "Much Love",
                ]}
              />
            </Display>
            <Display on="mobile">
              <SlotMachine
                texts={[
                  <span>
                    Great <br />
                    Experiences
                  </span>,
                  <span>
                    Beautiful <br />
                    Code
                  </span>,
                  <span>
                    Speed of Light <br />
                    Web Apps
                  </span>,
                  <span>
                    State of the Art <br />
                    Mobile Apps
                  </span>,
                  <span>
                    Robust <br />
                    QA
                  </span>,
                  <span>
                    Crafted <br />
                    Digital Products
                  </span>,
                ]}
              />
              <StyledCreatedWith>created with</StyledCreatedWith>
              <SlotMachine
                texts={[
                  <span>
                    UX <br />
                    Workshops
                  </span>,
                  <span>
                    Open Source <br />
                    Techs
                  </span>,
                  <span>
                    Javascript <br />
                    Stack
                  </span>,
                  <span>
                    React <br />
                    Native
                  </span>,
                  <span>
                    CI/CD <br />
                    tools
                  </span>,
                  <span>
                    Much <br />
                    Love
                  </span>,
                ]}
              />
            </Display>
          </Words>
          <div className="d-flex justify-content-end text-end flex-column align-items-end">
            <div>
              <img src={DoubleCaretLeft} alt="Arrow Left" />
            </div>
            <StyledParagraph>
              Always focusing on users, <br /> premium quality and scalability.
            </StyledParagraph>
          </div>
        </div>
      </BlackSectionStyled>
    </>
  );
};

export default BlackSection;
