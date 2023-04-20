import Layout from "../components/Layout/Layout";
import * as React from "react";
import styled from "styled-components";
import SecondaryButton from "../components/UiKit/SecondaryButton/SecondaryButton";
import CustomersSection from "../components/Sections/Home/CustomersSection";
import MainServicesSection from "../components/Sections/Home/MainServicesSection";
import BlackSection from "../components/Sections/Home/BlackSection";
import SuccessfulCasesSection from "../components/Sections/Home/SuccessfulCasesSection";
import JoinTheTeamSection from "../components/Sections/JoinTheTeamSection/JoinTheTeamSection";
import GreenArrow from "../components/UiKit/GreenArrow/GreenArrow";
import ObliqueLine from "../components/ObliqueLine";
import IndexContactForm from "../components/Sections/Home/IndexContactForm";
import Display from "../components/Display";
import CustomersSectionMobile from "../components/Sections/Home/CustomersSectionMobile";
import SuccessfulCasesSectionMobile from "../components/Sections/Home/SuccessfulCasesSectionMobile";
import { window } from "browser-monads";
import { scroller } from "react-scroll";

const MainSection = styled.section`
  position: relative;
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 108px;
  margin-top: 80px;
  margin-bottom: 100px;
  padding: 0 60px;
  color: #000000;
  
  @media (max-width: 991px) {
    font-size: 50px;
    
    line-height: 60px;
    padding: 0 30px;
    margin-top: 40px;
    margin-bottom: 0;

    p {
      max-width: 313px;
    }
  }
`;

const StyledGreenArrow = styled(GreenArrow)`
  position: absolute;
  bottom: 190px;
  left: 960px;

  @media (min-width: 991px) and (max-width: 1199px) {
    bottom: 290px;
    left: 746px;
  }

  @media (max-width: 991px) {
    bottom: 55px;
    left: 247px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  @media (max-width: 992px) {
    margin-top: 50px;
  }
`;

const StyledObliqueLine1 = styled(ObliqueLine)`
  margin: 30px 0;

  @media (max-width: 992px) {
    margin: -60px 0 -60px 0;
  }
`;

const StyledObliqueLine2 = styled(ObliqueLine)`
  margin: 30px 0;

  @media (max-width: 992px) {
    margin: -60px 0 -180px 0;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainSection className="container">
        <p>
          Crafting Digital
          <br />
          Products <br /> for companies and <br />
          startups.
        </p>
        <StyledGreenArrow
          onClick={() => {
            scroller.scrollTo("what-we-bring-to-the-table", {
              duration: 800,
              offset: -100,
              delay: 0,
              smooth: false,
            });
          }}
        />
        <StyledSecondaryButton
          onClick={() => {
            window.location = "/contact";
          }}
        >
          Let's Talk!
        </StyledSecondaryButton>
      </MainSection>

      <Display on="desktop">
        <CustomersSection />
      </Display>
      <Display on="mobile">
        <CustomersSectionMobile />
      </Display>
      <MainServicesSection />
      <BlackSection />
      <Display on="desktop">
        <SuccessfulCasesSection />
      </Display>
      <Display on="mobile">
        <SuccessfulCasesSectionMobile />
      </Display>
      <StyledObliqueLine1 />
      <IndexContactForm />
      <StyledObliqueLine2 />
      <JoinTheTeamSection mode="home" />
    </Layout>
  );
};

export default IndexPage;
