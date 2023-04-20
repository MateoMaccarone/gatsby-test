import * as React from "react";
import { Suspense } from "react";
import "./../../customBootstrap.scss";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";
import Footer from "../Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import Display from "../Display";
import { Helmet } from "react-helmet";

import Favicon16 from "./../../images/favicon/favicon-16x16.png";
import Favicon32 from "./../../images/favicon/favicon-32x32.png";
import { useScrollRestoration } from "gatsby";

const Layout: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const ulScrollRestoration = useScrollRestoration(``);

  return (
    <div {...ulScrollRestoration}>
      <Helmet>
        <html lang="en" />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        <title>
          Braintly: Crafting Digital Products for companies and startups.
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>
      <Suspense fallback={<h1>Loading</h1>}>
        <SSRProvider>
          <Display className="sticky-top" on="desktop">
            <Navbar />
          </Display>
          <Display className="sticky-top" on="mobile">
            <NavbarMobile />
          </Display>
          <main>{props.children}</main>
          <Footer />
        </SSRProvider>
      </Suspense>
    </div>
  );
};

export default Layout;
