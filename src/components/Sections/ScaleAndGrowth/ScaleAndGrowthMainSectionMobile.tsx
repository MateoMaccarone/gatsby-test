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
  margin: 20px 0;
  font-family: "Syne";
  font-weight: 700;
  font-size: 55px;
  line-height: 30px;
`;

const Ampersand = styled.div`
  font-family: "Syne";
  font-weight: 600;
  font-size: 120px;
  line-height: 90px;
  color: #000000;
`;

const Text = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #000000;

  margin: 0 110px;

  @media (max-width: 992px) {
    margin: 0 20px;
    text-align: center;
    margin-top: 20px;
  }
`;

const DoubleArrowTopImage = styled.img`
  width: 36px;
`;

const StyledImg = styled.img`
  width: 315px;
  height: 225px;
`;

const ScaleAndGrowthMainSection: React.FC = () => {
  return (
    <StyledScaleAndGrowthMainSection className="container">
      <div>
        <div className="d-flex justify-content-center">
          <StyledImg src={ScaleAndGrowthMainImage} alt="Scale and Growth" />
        </div>
        <div className="d-flex flex-column px-2">
          <div>
            <Title>Scale</Title>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-end">
                <Ampersand>&</Ampersand>
              </div>
              <div
                style={{ width: "136px", marginBottom: "10px" }}
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
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Title>Growth</Title>
            </div>
            <div>
              <Text>
                With an emphasis on turning our clients into fans, we understand
                the importance of{" "}
                <strong>
                  assisting businesses throughout the launch phase of their digital products and after.
                </strong>{" "}
                At Braintly, we take a proactive
                approach to helping you <strong>scale your solution</strong>.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </StyledScaleAndGrowthMainSection>
  );
};

export default ScaleAndGrowthMainSection;
