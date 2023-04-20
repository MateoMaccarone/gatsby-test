import React from "react";
import styled from "styled-components";

import CustomerVWImage from "../../../images/customer-logos/customer-vw.svg";
import CustomerVWImageColor from "../../../images/customer-logos/customer-vw-color.svg";
import CustomerGroboImage from "../../../images/customer-logos/customer-grobo.svg";
import CustomerGroboImageColor from "../../../images/customer-logos/customer-grobo-color.svg";
import CustomerTupperwareImage from "../../../images/customer-logos/customer-tupperware.svg";
import CustomerTupperwareImageColor from "../../../images/customer-logos/customer-tupperware-color.svg";
import CustomerNikonImage from "../../../images/customer-logos/customer-nikon.svg";
import CustomerNikonImageColor from "../../../images/customer-logos/customer-nikon-color.svg";
import CustomerItauImage from "../../../images/customer-logos/customer-itau.svg";
import CustomerItauImageColor from "../../../images/customer-logos/customer-itau-color.svg";
import HoverableImage from "../../HoverableImage";
import { Col, Row } from "react-bootstrap";
import WavyLine from "./WavyLine";
import WavyLineMobile from "./WavyLineMobile";

const CustomerSectionMobileStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  & .lines {
    width: 100%;
  }

  & .customer-logos {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    padding: 0 15px;

    .logo {
      width: 200px;
    }

    .top {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 15px;
    }

    .bottom {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 15px;
    }
  }
`;

const CustomersSectionMobile: React.FC = () => {
  return (
    <CustomerSectionMobileStyled>
      <WavyLineMobile />
      <div className="customer-logos container d-flex justify-content-center">
        <Row>
          <Col xs={6} className="d-flex flex-column">
            <HoverableImage
              style={{ marginTop: "70px", marginLeft: "-12px" }}
              width="62px"
              src={CustomerVWImage}
              srcHover={CustomerVWImageColor}
            />
            <HoverableImage
              style={{ position: "relative", top: "80px", left: "-20px" }}
              width="161px"
              src={CustomerTupperwareImage}
              srcHover={CustomerTupperwareImageColor}
            />
            <HoverableImage
              style={{ position: "relative", top: "142px", left: "-20px" }}
              width="161px"
              src={CustomerGroboImage}
              srcHover={CustomerGroboImageColor}
            />
          </Col>
          <Col
            xs={6}
            style={{ height: "450px" }}
            className="d-flex flex-column align-items-end"
          >
            <HoverableImage
              style={{
                position: "relative",
                top: "115px",
                left: "-22px",
              }}
              width="97px"
              src={CustomerNikonImage}
              srcHover={CustomerNikonImageColor}
            />
            <HoverableImage
              style={{
                position: "relative",
                top: "225px",
              }}
              width="65px"
              src={CustomerItauImage}
              srcHover={CustomerItauImageColor}
            />
          </Col>
        </Row>
      </div>
    </CustomerSectionMobileStyled>
  );
};

export default CustomersSectionMobile;
