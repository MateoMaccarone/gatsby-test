import React from "react";
import styled from "styled-components";
import ProductDiscoveryMain from "../../../images/home-discovery.png";
import StrokeOutlineImage from "../../../images/stroke-outline.png";

const StyledProductDiscoveryMainSection = styled.section``;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;

  & .primary {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
  }

  & .secondary {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 7px;
    color: #000000;
    text-align: center;
  }

  & .text {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    color: #000000;
    max-width: 317px;
    text-align: center;
  }

  & .stroke-outline {
    margin-right: 30px;
    width: 124px;
    height: 14px;
  }
`;

const StyledImg = styled.img`
  width: 315px;
`;

const Header = styled.div`
  max-width: 320px;
`;

const ProductDiscoveryMainSectionMobile: React.FC = () => {
  return (
    <StyledProductDiscoveryMainSection className="container mt-5">
      <div className="d-flex justify-content-center">
        <StyledImg src={ProductDiscoveryMain} alt="" />
      </div>
      <div className="d-flex justify-content-around">
        <Text>
          <div className="d-flex justify-content-center">
            <Header>
              <div className="primary d-flex justify-content-between align-items-center">
                Product{" "}
                <img
                  className="stroke-outline"
                  src={StrokeOutlineImage}
                  alt=""
                />
              </div>
              <div className="secondary">Discovery</div>
            </Header>
          </div>
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

export default ProductDiscoveryMainSectionMobile;
