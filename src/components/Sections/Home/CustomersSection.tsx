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

import WavyLine from "./WavyLine";
import HoverableImage from "../../HoverableImage";

const CustomerSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  & .lines {
    width: 100%;
  }

  & .customer-logos {
    display: flex;
    justify-content: space-between;
    width: 1290px;
    height: 120px;
    position: absolute;

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

const CustomersSection: React.FC = () => {
  return (
    <CustomerSectionStyled>
      <WavyLine offset="-273px" width="2150px" height="266px" />
      <div className="customer-logos">
        <div className="logo top">
          <HoverableImage
            width="80px"
            src={CustomerVWImage}
            srcHover={CustomerVWImageColor}
          />
        </div>
        <div className="logo bottom">
          <HoverableImage
            width="120px"
            src={CustomerNikonImage}
            srcHover={CustomerNikonImageColor}
          />
        </div>
        <div className="logo top">
          <HoverableImage
            width="200px"
            src={CustomerTupperwareImage}
            srcHover={CustomerTupperwareImageColor}
          />
        </div>
        <div className="logo bottom">
          <HoverableImage
            width="200px"
            src={CustomerGroboImage}
            srcHover={CustomerGroboImageColor}
          />
        </div>
        <div className="logo top">
          <HoverableImage
            width="80px"
            src={CustomerItauImage}
            srcHover={CustomerItauImageColor}
          />
        </div>
      </div>
    </CustomerSectionStyled>
  );
};

export default CustomersSection;
