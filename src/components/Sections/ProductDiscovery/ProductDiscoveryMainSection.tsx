import React from "react";
import styled from "styled-components";
import ProductDiscoveryMain from "../../../images/home-discovery.png";
import StrokeOutlineImage from "../../../images/stroke-outline.png";

const StyledProductDiscoveryMainSection = styled.section``;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & .primary {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    color: #000000;
  }

  & .secondary {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 120px;
    letter-spacing: 7px;
    color: #000000;
    margin-left: 68px;
    margin-top: -17px;
  }

  & .text {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    color: #000000;
    max-width: 472px;
  }

  & .stroke-outline {
    margin-left: 40px;
  }
`;

const StyledImg = styled.img`
  width: 591px;
`;

const ProductDiscoveryMainSection: React.FC = () => {
  return (
    <StyledProductDiscoveryMainSection className="container mt-5">
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center">
          <StyledImg src={ProductDiscoveryMain} alt="" />
        </div>
        <Text>
          <div className="primary">
            Product{" "}
            <img className="stroke-outline" src={StrokeOutlineImage} alt="" />
          </div>
          <div className="secondary">Discovery</div>
          <p className="text">
            We help you mitigate risk <strong>by understanding</strong> your
            business models and value propositions, focusing on your{" "}
            <strong>customers</strong> and adding the necessary{" "}
            <strong>technology</strong>.
          </p>
        </Text>
      </div>
    </StyledProductDiscoveryMainSection>
  );
};

export default ProductDiscoveryMainSection;
