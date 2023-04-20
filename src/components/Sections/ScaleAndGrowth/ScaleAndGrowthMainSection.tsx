import ScaleAndGrowthMainImage from "../../../images/home-scale.png";
import DoubleArrowTop from "../../../images/double-arrow-up-outline.svg";
import React from "react";
import styled from "styled-components";

const StyledScaleAndGrowthMainSection = styled.div`
  display: flex;
  margin-top: 45px;

  & .container {
    background: red;
    width: 100%;
  }
`;

const Title = styled.div`
  line-height: 0.7em;
  margin: 20px 0;
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;

  &.scale {
    letter-spacing: 10px;
  }
`;

const Ampersand = styled.div`
  line-height: 0.7em;
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  color: #000000;
  margin-top: 26px;
`;

const Text = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #000000;

  margin: 30px 0 0 110px;
  max-width: 650px;
`;

const DoubleArrowTopImage = styled.img`
  width: 80px;
  margin-left: 25px;
`;

const StyledImg = styled.img`
  width: 567px;
`;

const ScaleAndGrowthMainSection: React.FC = () => {
  return (
    <StyledScaleAndGrowthMainSection className="container">
      <div className="d-flex justify-content-between">
        <div>
          <Title className="text-end scale">Scale</Title>
          <StyledImg src={ScaleAndGrowthMainImage} alt="Product Discovery" />
        </div>
        <div>
          <div className="d-flex">
            <div className="d-flex align-items-end">
              <Ampersand>&</Ampersand>
            </div>
            <div
              style={{
                width: "250px",
                marginBottom: "20px",
                marginLeft: "50px",
              }}
              className="d-flex justify-content-between align-items-end"
            >
              <DoubleArrowTopImage
                src={DoubleArrowTop}
                alt="Double Arrow Top"
              />
              <DoubleArrowTopImage
                src={DoubleArrowTop}
                alt="Double Arrow Top"
              />
              <DoubleArrowTopImage
                src={DoubleArrowTop}
                alt="Double Arrow Top"
              />
              <DoubleArrowTopImage
                src={DoubleArrowTop}
                alt="Double Arrow Top"
              />
            </div>
          </div>
          <div>
            <Title className="growth">Growth</Title>
          </div>
          <div>
            <Text>
              With an emphasis on turning our clients into fans, we understand
              the importance of{" "}
              <strong>
                assisting businesses throughout and following the launch
              </strong>{" "}
              of their digital products. At Braintly, we take a proactive
              approach to helping you <strong>scale your solution</strong>.
            </Text>
          </div>
        </div>
      </div>
    </StyledScaleAndGrowthMainSection>
  );
};

export default ScaleAndGrowthMainSection;
