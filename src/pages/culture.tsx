import * as React from "react";
import Layout from "../components/Layout/Layout";
import CultureSection from "../components/Sections/CultureSection/CultureSection";
import WhatWeAreAllAboutSection from "../components/Sections/CultureSection/WhatWeAreAllAboutSection";
import LineSeparator from "../components/UiKit/LineSeparator/LineSeparator";
import RemoteCulture from "../components/Sections/CultureSection/RemoteCulture";
import JoinTheTeamSection from "../components/Sections/JoinTheTeamSection/JoinTheTeamSection";
import OurValues from "../components/Sections/CultureSection/OurValues";
import BrokenGrid from "../components/Sections/BrokenGrid/BrokenGrid";
import Display from "../components/Display";
import WhatWeAreAllAboutSectionMobile from "../components/Sections/CultureSection/WhatWeAreAllAboutSectionMobile";
import BrokenGridMobile from "../components/Sections/BrokenGrid/BrokenGridMobile";

const CulturePage: React.FC = () => {
  return (
    <Layout>
      <CultureSection />
      <Display on="desktop">
        <WhatWeAreAllAboutSection />
      </Display>
      <Display on="mobile">
        <WhatWeAreAllAboutSectionMobile />
      </Display>
      <LineSeparator />
      <RemoteCulture />
      <OurValues />
      <JoinTheTeamSection mode="culture" />
      <LineSeparator />
      <Display on="desktop">
        <BrokenGrid />
      </Display>
      <Display on="mobile">
        <BrokenGridMobile />
      </Display>
    </Layout>
  );
};

export default CulturePage;
