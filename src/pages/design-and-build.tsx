import * as React from "react";
import Layout from "../components/Layout/Layout";
import LineSeparator from "../components/UiKit/LineSeparator/LineSeparator";
import AnyQuestionSection from "../components/Sections/AnyQuestionsSection/AnyQuestionSections";
import DesignAndBuildSection from "../components/Sections/DesignAndBuild/DesignAndBuildSection";
import DesignSection from "../components/Sections/DesignAndBuild/DesignSection";
import BuildSection from "../components/Sections/DesignAndBuild/BuildSection";
import WhyUsSection from "../components/WhyUsSection";

import WhyUsImage from "./../images/design-why-us.png";
import MoreServicesSection from "../components/MoreServicesSection";
import ProductDiscoveryImage from "../images/service-product-discovery.png";
import ScaleAndGrowthImage from "../images/service-scale-growth.png";
import Display from "../components/Display";
import DesignAndBuildSectionMobile from "../components/Sections/DesignAndBuild/DesignAndBuildSectionMobile";

const DesignAndBuildPage = () => {
  return (
    <Layout>
      <Display on="desktop">
        <DesignAndBuildSection />
      </Display>
      <Display on="mobile">
        <DesignAndBuildSectionMobile />
      </Display>
      <DesignSection />
      <BuildSection />
      <LineSeparator />
      <WhyUsSection
        image={WhyUsImage}
        text={
          <div>
            We solve problems of all shapes and sizes. We have the benefit of
            working alongside our dev & design team to create{" "}
            <strong>seamless user-centric experiences</strong>, while delivering
            digital products with our team of full-stack web and mobile
            developers. We’re experienced in frontend development, backend
            infrastructure and strategy advising.
          </div>
        }
      />
      <AnyQuestionSection />
      <MoreServicesSection
        service1={{
          title: "Product Discovery",
          image: ProductDiscoveryImage,
          href: "/product-discovery",
        }}
        service2={{
          title: "Scale & Growth",
          image: ScaleAndGrowthImage,
          href: "/scale-growth",
        }}
      />
    </Layout>
  );
};

export default DesignAndBuildPage;
