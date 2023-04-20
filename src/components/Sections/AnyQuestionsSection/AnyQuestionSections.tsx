import React from "react";

import BackgroundGrey from "./../../../images/bg-QA.svg";
import styled from "styled-components";
import TertiaryButton from "../../UiKit/TertiaryButton/TertiaryButton";

const BackgroundGreySection = styled.div`
  background: url("${BackgroundGrey}") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 495px;

  text-align: center;

  @media (max-width: 992px) {
    margin-top: -130px;
  }
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 0;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 37px;

  text-align: center;
  letter-spacing: 5px;

  color: #000000;

  @media (max-width: 992px) {
    font-size: 28px;
    line-height: 30px;
    letter-spacing: 5px;
  }
`;

const Text = styled.p`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  padding: 0 !important;
  margin-top: 15px;
  margin-bottom: 53px;
  max-width: 500px;

  text-align: center;

  color: #000000;

  @media (max-width: 992px) {
    font-size: 17px;
    line-height: 28px;

    max-width: 350px;
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  padding-top: 265px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AnyQuestionSections: React.FC = () => {
  return (
    <BackgroundGreySection>
      <Content>
        <Title>Any Questions?</Title>
        <Text>
          Let’s have a meeting and clear up any doubts. We’ll gladly answer any
          questions about our services.
        </Text>
        <div className="d-flex justify-content-center">
            <TertiaryButton onClick={() => {
              window.location = "/contact";
            }}>BOOK A MEETING</TertiaryButton>
        </div>
      </Content>
    </BackgroundGreySection>
  );
};

export default AnyQuestionSections;
