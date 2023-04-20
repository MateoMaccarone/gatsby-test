import React from "react";
import styled from "styled-components";
import { window } from "browser-monads";

import ArrowLink from "./../images/arrow_link.svg";
import LocationPin from "./../images/location-pin.svg";

const BoxStyled = styled.div`
  padding: 10px;
  width: 100%;
`;

const BorderedBox = styled.div`
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 18px;
  height: 195px;

  &:hover {
    cursor: pointer;
    background: #edf3f2;
  }

  &:active {
    background: #e1eeec;
    border: 2px solid #000000;
    padding: 20px 22px;
  }

  .arrow {
    width: 24px !important;
    height: 24px !important;
  }
`;

const JobBoxTitle = styled.h3`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;

  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
`;

const JobBoxLocation = styled.h4`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 1px;
`;

const SeeDetailsLink = styled.a`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 3px;
  text-decoration-line: underline;
  color: #000000;

  &:hover {
    color: #000000 !important;
  }

  &:active {
    color: #000000 !important;
  }
`;

const LocationPinImage = styled.img`
  width: 24px !important;
  height: 24px !important;
  margin-right: 8px;
`;

interface JobBoxProps {
  className?: string;
  title: string;
  location: string;
  link: string;
}

const JobBoxMobile: React.FC<JobBoxProps> = (props) => {
  return (
    <BoxStyled
      onClick={() => window.open(props.link, "_blank")}
      className={props.className}
    >
      <BorderedBox>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center flex-column">
            <JobBoxTitle>{props.title}</JobBoxTitle>
            <JobBoxLocation className="d-flex align-items-center mt-2">
              <LocationPinImage src={LocationPin} alt="Location Pin" />{" "}
              {props.location}
            </JobBoxLocation>
          </div>
          <div className="d-flex align-items-center mt-5">
            <SeeDetailsLink href={props.link} target="_blank">
              See Details
            </SeeDetailsLink>
            <img className="arrow" src={ArrowLink} alt="Arrow" />
          </div>
        </div>
      </BorderedBox>
    </BoxStyled>
  );
};

export default JobBoxMobile;
