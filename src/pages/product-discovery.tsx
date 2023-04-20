import * as React from "react";
import Layout from "../components/Layout/Layout";
import ProductDiscoveryMainSection from "../components/Sections/ProductDiscovery/ProductDiscoveryMainSection";
import AnyQuestionSection from "../components/Sections/AnyQuestionsSection/AnyQuestionSections";
import LineSeparator from "../components/UiKit/LineSeparator/LineSeparator";
import TheDiscoveryProcessSection from "../components/Sections/ProductDiscovery/TheDiscoveryProcessSection";
import WhyUsSection from "../components/WhyUsSection";

import WhyUsImage from "./../images/discovery-why-us.png";
import MoreServicesSection from "../components/MoreServicesSection";
import ScaleAndGrowthImage from "../images/service-scale-growth.png";
import DesignAndBuildImage from "../images/service-design-build.png";
import Display from "../components/Display";
import ProductDiscoveryMainSectionMobile from "../components/Sections/ProductDiscovery/ProductDiscoveryMainSectionMobile";

const ProductDiscoveryPage = () => {
  return (
    <Layout>
      <Display on="desktop">
        <ProductDiscoveryMainSection />
      </Display>
      <Display on="mobile">
        <ProductDiscoveryMainSectionMobile />
      </Display>
      <TheDiscoveryProcessSection />
      <LineSeparator />
      <WhyUsSection
        image={WhyUsImage}
        text={
          <div>
            We’re a team of strategists, UX designers, coders and product
            managers who bring hands-on expertise based on years and years of{" "}
            <strong>
              experience in building, launching and growing digital products
            </strong>
            . We always focus on the value your product needs to create for the
            user, and the rist that the MVP needs to mitigate. We work lean and
            push for real <strong>data instead of guessing</strong>.
          </div>
        }
      />
      <AnyQuestionSection />
      <MoreServicesSection
        service1={{
          title: "Scale & Growth",
          image: ScaleAndGrowthImage,
          href: "/scale-growth",
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

export default ProductDiscoveryPage;
