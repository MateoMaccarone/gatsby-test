import React from "react";
import styled from "styled-components";
import DoubleArrowDown from "../../../images/double-arrow-down.svg";
import DoubleArrowUp from "../../../images/double-arrow-up.svg";

const Wrapper = styled.div`
  & .strongly-believe {
    max-width: 873px;
    margin: 30px 0;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #000000;

    @media (max-width: 992px) {
      font-weight: 400;
      font-size: 27px;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.05em;
    }
  }

  & .highlight {
    background: #48ffcb;
  }

  & .arrow-top {
    animation: bounceToDown 2s both;
    animation-iteration-count: infinite;
  }

  & .arrow-bottom {
    animation: bounceToUp 2s both;
    animation-iteration-count: infinite;
  }
`;

const WeStronglyBelieve: React.FC = () => {
  return (
    <Wrapper>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <img className="arrow-top" src={DoubleArrowDown} alt="" />
        </div>
        <div className="strongly-believe">
          We strongly believe in {" "}
          <span className="highlight">cross-collaboration</span> between our design
          and development teams.
        </div>
        <div className="d-flex justify-content-center">
          <img className="arrow-bottom" src={DoubleArrowUp} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default WeStronglyBelieve;
