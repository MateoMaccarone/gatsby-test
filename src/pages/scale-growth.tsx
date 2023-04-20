import React from "react";
import Layout from "../components/Layout/Layout";
import ScaleAndGrowthMainSection from "../components/Sections/ScaleAndGrowth/ScaleAndGrowthMainSection";
import TakeYourProjectSection from "../components/Sections/ScaleAndGrowth/TakeYourProjectSection";
import LineSeparator from "../components/UiKit/LineSeparator/LineSeparator";
import WhyUsSection from "../components/WhyUsSection";
import AnyQuestionSections from "../components/Sections/AnyQuestionsSection/AnyQuestionSections";

import WhyUsImage from "./../images/scale-why-us.png";
import MoreServicesSection from "../components/MoreServicesSection";
import ProductDiscoveryImage from "../images/service-product-discovery.png";
import DesignAndBuildImage from "../images/service-design-build.png";
import Display from "../components/Display";
import ScaleAndGrowthMainSectionMobile from "../components/Sections/ScaleAndGrowth/ScaleAndGrowthMainSectionMobile";

const ScaleGrowth: React.FC = () => {
  return (
    <Layout>
      <Display on="desktop">
        <ScaleAndGrowthMainSection />
      </Display>
      <Display on="mobile">
        <ScaleAndGrowthMainSectionMobile />
      </Display>
      <TakeYourProjectSection />
      <LineSeparator />
      <WhyUsSection
        image={WhyUsImage}
        text={
          <div>
            In addition to providing support, we’re often asked to assist in
            product development set-up. As strategic partners of some
            of the world’s most well-respected brands, we continually help
            customers of all sizes to scale.
          </div>
        }
      />
      <AnyQuestionSections />
      <MoreServicesSection
        service1={{
          title: "Product Discovery",
          image: ProductDiscoveryImage,
          href: "/product-discovery",
        }}
        service2={{
          title: "Design & Build",
          image: DesignAndBuildImage,
          href: "/design-and-build",
        }}
      />
    </Layout>
  );
};

export default ScaleGrowth;
