import React, { useState } from "react";
import { window } from "browser-monads";
import BraintlyLogo from "../../images/logos/logo-color.svg";
import BraintlyLogoCollapsed from "../../images/logos/logo-min-color.svg";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import styled from "styled-components";
import { clsx } from "clsx";

import InstagramImage from "../../images/social-media/instagram.svg";
import InstagramPressedImage from "../../images/social-media/instagram-pressed.svg";
import LinkedInImage from "../../images/social-media/linked-in.svg";
import LinkedInPressedImage from "../../images/social-media/linked-in-pressed.svg";

import GrowerImage from "../GrowerImage";
import NavbarCollapserImage from "./../../images/navbar-collapser-centered.svg";
import NavbarCrossImage from "./../../images/navbar-cross.svg";
import "./Navbar.css";
import { HidableComponent } from "../HidableComponent";
import HidableComponentWithAnimation from "../HidableComponentWithAnimation";
import { use100vh } from "react-div-100vh";
import TwitterImage from "../../images/social-media/twitter.svg";
import TwitterPressedImage from "../../images/social-media/twitter-pressed.svg";
import useScroll from "../../hooks/useScroll";
import SwitcherImage from "../SwitcherImage";

const CustomNavbar = styled(BootstrapNavbar)`
  font-family: "Archivo", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
  display: block;
  background: white;

  padding: 8px 4px !important;

  .services {
    display: flex;
    flex-direction: column;
    align-items: center;

    & .navbar-item {
      margin: 18px 0;
    }
  }

  .nav-item.active .nav-link {
    border-bottom: 4px solid #48ffcb;
  }

  .navbar-brand {
    // Esto remueve un margin-right: 1rem que viene por defecto. No se por que.
    margin-right: 0;
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

    &.active {
      border-bottom: 4px solid #48ffcb;
    }

    &.disabled {
      color: #9ba9a7 !important;
    }
  }

  .navbar-item {
    margin: 35px 0;
    @media (max-height: 730px) {
      margin: 20px 0;
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

const MobileNavbarContent = styled.div<{ height?: number }>`
  width: 100%;
  // height: calc(100vh - 65px);
  height: ${(props) => props.height! - 65}px;
  background: white;
`;

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: center;
  width: 90px;
`;

const StyledGrowerImage = styled(GrowerImage)`
  width: 24px;
  height: 24px;
`;

const StyledSwitcherImage = styled(SwitcherImage)`
  height: 40px !important;
`;

const NavbarMobile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathname = window.location.pathname;
  const height = use100vh();

  const { scrollTop } = useScroll();

  return (
    <>
      <CustomNavbar className="sticky-top">
        <Container>
          <BootstrapNavbar.Brand href="/" style={{ width: "104px" }}>
            <div>
              <StyledSwitcherImage
                src1={BraintlyLogo}
                src2={BraintlyLogoCollapsed}
                alt="Braintly Logo"
                switch={scrollTop > 0}
                milliseconds={200}
              />
            </div>
          </BootstrapNavbar.Brand>
          <StyledNav>
            <HidableComponent isVisible={!showMenu}>
              <NavbarCollapserButton onClick={() => setShowMenu(true)}>
                <img src={NavbarCollapserImage} alt="" />
              </NavbarCollapserButton>
            </HidableComponent>
            <HidableComponent isVisible={showMenu}>
              <NavbarCollapserButton onClick={() => setShowMenu(false)}>
                <img src={NavbarCrossImage} alt="" />
              </NavbarCollapserButton>
            </HidableComponent>
          </StyledNav>
          <div className="d-flex">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/braintly/"
              >
                <StyledGrowerImage
                  src={LinkedInImage}
                  pressed={LinkedInPressedImage}
                  alt="LinkedIn Link"
                />
              </a>
              <a target="_blank" href="https://twitter.com/wearebraintly">
                <StyledGrowerImage
                  src={TwitterImage}
                  pressed={TwitterPressedImage}
                  alt="Twitter Link"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/wearebraintly/"
              >
                <StyledGrowerImage
                  src={InstagramImage}
                  pressed={InstagramPressedImage}
                  alt="Instagram Link"
                />
              </a>
            </div>
          </div>
        </Container>
        <HidableComponentWithAnimation
          appearAnimation="appear"
          disappearAnimation="disappear"
          milliseconds={400}
          isVisible={showMenu}
        >
          <MobileNavbarContent
            height={height}
            className="d-flex flex-column align-items-center justify-content-between"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Nav.Link
                className={clsx({
                  "navbar-item": true,
                  active: pathname === "/",
                })}
                href="/"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className={clsx({
                  "navbar-item": true,
                  disabled: true,
                })}
                disabled={true}
              >
                SERVICES
              </Nav.Link>
              <div className="services">
                <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    active: pathname.includes("product-discovery"),
                  })}
                  href="/product-discovery"
                >
                  PRODUCT DISCOVERY
                </Nav.Link>
                <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    active: pathname.includes("design-and-build"),
                  })}
                  href="/design-and-build"
                >
                  DESIGN & BUILD
                </Nav.Link>
                <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    active: pathname.includes("scale-growth"),
                  })}
                  href="/scale-growth"
                >
                  SCALE & GROWTH
                </Nav.Link>
              </div>
              <Nav.Link
                  className={clsx({
                    "navbar-item": true,
                    disabled: true,
                  })}
                  disabled={true}
              >
                PROJECTS
              </Nav.Link>
              <div className='services'>
                <Nav.Link
                    className={clsx({
                      "navbar-item": true,
                      active: pathname.includes("decreditos"),
                    })}
                    href="/projects/decreditos"
                >
                  DECREDITOS
                </Nav.Link>
              </div>
              <Nav.Link
                className={clsx({
                  "navbar-item": true,
                  active: pathname.includes("culture"),
                })}
                href="/culture"
              >
                CULTURE
              </Nav.Link>
              <Nav.Link
                className={clsx({
                  "navbar-item": true,
                  active: pathname.includes("contact"),
                })}
                href="/contact"
              >
                CONTACT
              </Nav.Link>
            </div>
            <NavbarCollapserButton onClick={() => setShowMenu(false)}>
              <img src={NavbarCrossImage} alt="" />
            </NavbarCollapserButton>
          </MobileNavbarContent>
        </HidableComponentWithAnimation>
      </CustomNavbar>
    </>
  );
};

export default NavbarMobile;
