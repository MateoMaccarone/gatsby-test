import React, { useEffect, useState } from "react";
import { window } from "browser-monads";
import BraintlyLogo from "../../images/logos/logo-color.svg";
import BraintlyLogoCollapsed from "../../images/logos/logo-min-color.svg";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
} from "react-bootstrap";
import styled from "styled-components";
import { clsx } from "clsx";

import TwitterImage from "../../images/social-media/twitter.svg";
import TwitterPressedImage from "../../images/social-media/twitter-pressed.svg";
import InstagramImage from "../../images/social-media/instagram.svg";
import InstagramPressedImage from "../../images/social-media/instagram-pressed.svg";
import LinkedInImage from "../../images/social-media/linked-in.svg";
import LinkedInPressedImage from "../../images/social-media/linked-in-pressed.svg";

import CaretDown from "./../../images/caret-down.svg";
import SwitcherImage from "../SwitcherImage";
import GrowerImage from "../GrowerImage";
import NavbarCollapserImage from "./../../images/navbar-collapser.svg";
import "./Navbar.css";
import HidableComponentWithAnimation from "../HidableComponentWithAnimation";
import useScroll from "../../hooks/useScroll";
import useDebouncer from "../../hooks/useDebouncer";

const CustomNavbar = styled(BootstrapNavbar)`
  background: white;
  font-family: "Archivo", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;

  padding: 5px !important;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  
  .custom--margin {
    @media (max-width: 1024px) {
      margin: 0 !important;
    }
  }

  .nav-item.selected .nav-link {
    border-bottom: 4px solid #48ffcb;
  }

  .nav-link {
    color: #000000 !important;

    box-sizing: border-box;
    height: 38px;
    padding: 0.5rem 0 !important;

    &:hover {
      border-bottom: 2px solid black;
    }

    &:active {
      border-bottom: 4px solid black;
    }

    &.selected {
      border-bottom: 4px solid #48ffcb;
    }
  }
`;

const NavbarCollapserButton = styled.button`
  border: 0;
  background: transparent;

  & > img {
    width: 32px;
    height: 32px;
  }
`;

const StyledGrowerImage = styled(GrowerImage)``;

const StyledHidableComponentWithAnimation = styled(
  HidableComponentWithAnimation
)`
  position: absolute;
  right: 20px;
`;

const Navbar: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [collapseNavbar, setCollapseNavbar] = useState<boolean>(false);
  const collapseDebounced = useDebouncer(collapse, 200);
  const collapseNavbarDebounced = useDebouncer(collapseNavbar, 200);
  const [showServicesDropdown, setShownServicesDropdown] = useState<boolean>(false);
  const [showProjectsDropdown, setShownProjectsDropdown] = useState<boolean>(false);
  const [pathname, setPathmame] = useState("");

  const { scrollTop } = useScroll({
    onScrollCallback: (direction) => {
      if (direction == "up") {
        setCollapse(false);
        setCollapseNavbar(false);
      } else if (direction == "down") {
        setCollapse(true);
        setCollapseNavbar(true);
      }
    },
  });

  useEffect(() => {
    setPathmame(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <CustomNavbar className="sticky-top" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <div className="d-lg-block d-sm-none d-md-none d-none">
            <SwitcherImage
              src1={BraintlyLogo}
              src2={BraintlyLogoCollapsed}
              alt="Braintly Logo"
              switch={scrollTop > 0}
              milliseconds={200}
            />
          </div>
          <div className="d-lg-none d-sm-block d-md-block">
            <SwitcherImage
              src1={BraintlyLogo}
              src2={BraintlyLogoCollapsed}
              alt="Braintly Logo"
              switch={collapseDebounced}
              milliseconds={200}
            />
          </div>
        </BootstrapNavbar.Brand>

        <div className="d-flex">
          <Nav className="gap-5 me-5 position-relative">
            <HidableComponentWithAnimation
              milliseconds={200}
              isVisible={!collapseNavbarDebounced}
              className="d-flex"
              appearAnimation="appear"
              disappearAnimation="disappear"
              style={{ height: "38px" }}
            >
              <Nav className="gap-5 me-5 position-relative custom--margin">
                <NavDropdown
                  onMouseEnter={() => setShownServicesDropdown(true)}
                  onMouseLeave={() => setShownServicesDropdown(false)}
                  show={showServicesDropdown}
                  className={clsx({
                    "navbar-item": true,
                    selected:
                      pathname.includes("product-discovery") ||
                      pathname.includes("design-and-build") ||
                      pathname.includes("scale-growth"),
                  })}
                  title={
                    <div>
                      SERVICES <img src={CaretDown} alt="" />
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    className={clsx({
                      selected: pathname.includes("product-discovery"),
                    })}
                    href="/product-discovery"
                  >
                    Product Discovery
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={clsx({
                      selected: pathname.includes("design-and-build"),
                    })}
                    href="/design-and-build"
                  >
                    Design & Build
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={clsx({
                      selected: pathname.includes("scale-growth"),
                    })}
                    href="/scale-growth"
                  >
                    Scale & Growth
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    onMouseEnter={() => setShownProjectsDropdown(true)}
                    onMouseLeave={() => setShownProjectsDropdown(false)}
                    show={showProjectsDropdown}
                    className={clsx({
                      "navbar-item": true,
                      selected:
                          pathname.includes("decreditos")
                    })}
                    title={
                      <div>
                        PROJECTS <img src={CaretDown} alt="" />
                      </div>
                    }
                    id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                      className={clsx({
                        selected: pathname.includes("decreditos"),
                      })}
                      href="/projects/decreditos"
                  >
                    Decreditos
                  </NavDropdown.Item>
                  <NavDropdown.Item disabled={true}>
                    More coming soon
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    selected: pathname.includes("culture"),
                  })}
                  href="/culture"
                >
                  CULTURE
                </Nav.Link>
                <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    selected: pathname.includes("contact"),
                  })}
                  href="/contact"
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </HidableComponentWithAnimation>
            <StyledHidableComponentWithAnimation
              milliseconds={200}
              isVisible={collapseNavbarDebounced}
              appearAnimation="appear"
              disappearAnimation="disappear"
              style={{ height: "38px" }}
            >
              <NavbarCollapserButton
                style={{ height: "38px" }}
                className="gap-5 d-flex align-items-center"
                onClick={() => setCollapseNavbar(false)}
              >
                <img
                  style={{ height: "32px" }}
                  src={NavbarCollapserImage}
                  alt=""
                />
              </NavbarCollapserButton>
            </StyledHidableComponentWithAnimation>
          </Nav>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/braintly/"
            >
              <StyledGrowerImage
                milliseconds={200}
                src={LinkedInImage}
                pressed={LinkedInPressedImage}
                alt="LinkedIn Link"
              />
            </a>
            <a target="_blank" href="https://twitter.com/wearebraintly">
              <StyledGrowerImage
                milliseconds={200}
                src={TwitterImage}
                pressed={TwitterPressedImage}
                alt="Twitter Link"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/wearebraintly/">
              <StyledGrowerImage
                milliseconds={200}
                src={InstagramImage}
                pressed={InstagramPressedImage}
                alt="Instagram Link"
              />
            </a>
          </div>
        </div>
      </Container>
    </CustomNavbar>
  );
};

export default Navbar;
