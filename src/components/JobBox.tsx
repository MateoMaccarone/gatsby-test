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
  padding: 21px 23px;
  height: 110px;

  &:hover {
    cursor: pointer;
    background: #edf3f2;

    .see-details {
      font-weight: 600;
    }
  }

  &:active {
    background: #e1eeec;
    border: 2px solid #000000;
    padding: 20px 22px;
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
  /* identical to box height */

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
`;

const LocationPinImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

interface JobBoxProps {
  className?: string;
  title: string;
  location: string;
  link: string;
}

const JobBox: React.FC<JobBoxProps> = (props) => {
  return (
    <BoxStyled
      onClick={() => window.open(props.link, "_blank")}
      className={props.className}
    >
      <BorderedBox>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center flex-column">
            <JobBoxTitle>{props.title}</JobBoxTitle>
            <JobBoxLocation className="d-flex align-items-center">
              <LocationPinImage src={LocationPin} alt="Location Pin" />{" "}
              {props.location}
            </JobBoxLocation>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <SeeDetailsLink
              className="see-details"
              href={props.link}
              target="_blank"
            >
              See Details
            </SeeDetailsLink>
            <img src={ArrowLink} alt="Arrow" />
          </div>
        </div>
      </BorderedBox>
    </BoxStyled>
  );
};

export default JobBox;
