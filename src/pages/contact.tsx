import * as React from "react";
import Layout from "../components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import CalendlyWrapper from "../components/CalendlyWrapper";
import SecondaryButton from "../components/UiKit/SecondaryButton/SecondaryButton";

import ContactoImage from "./../images/contacto.png";
import LocationIcon from "./../images/location-pin-cyan.svg";
import EmailIcon from "./../images/email-pin.svg";
import { useState } from "react";

const Title = styled.h1`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 108px;
  width: 636px;
  color: #000000;

  @media (max-width: 992px) {
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    max-width: 313px;
  }
`;

const BorderLeft = styled.div`
  margin-top: 40px;
  border-left: 2px solid #000000;
  padding: 8px 40px;
`;

const Text = styled.div`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 3px;
  margin-bottom: 26px;

  color: #000000;
`;

const Anchor = styled.a`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 3px;
  margin-bottom: 26px;
  text-decoration: none;

  color: #000000;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;

const Success = styled.div`
  margin-top: 12px;

  & span {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    background: #76ffd8;

    color: #000000;
  }
`;

const PinImg = styled.img`
  margin: 12px 0;
`;

const ContactImg = styled.img`
  margin-bottom: 80px;
  width: 590px;

  @media (max-width: 992px) {
    margin-top: 80px;
    width: 315px;
  }
`;

const StyledDiv = styled.div`
  max-width: 426px;
`;

const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState<
    React.ReactNode | undefined
  >(undefined);

  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col lg={6}>
            <Title>Let's work together</Title>
            <BorderLeft>
              <StyledDiv>
                <ContactForm
                  mode="contact"
                  successMessage={successMessage}
                  onSend={(values) => {
                    setSuccessMessage(
                      <span>
                        Yay! Your message has been sent successfully! <br />
                        We'll get back to you shortly
                      </span>
                    );

                    setTimeout(() => {
                      setSuccessMessage(undefined);
                    }, 3000);
                  }}
                />
                {successMessage && (
                  <Success>
                    <span>{successMessage}</span>
                  </Success>
                )}
              </StyledDiv>
            </BorderLeft>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <ContactImg src={ContactoImage} alt="Contacto Image" />
            {/*<div className="w-100">*/}
            {/*  <StyledCalendlyWrapper*/}
            {/*    className="mt-5"*/}
            {/*    url="https://calendly.com/matias-paura/meeting-braintly"*/}
            {/*  >*/}
            {/*    <StyledSecondaryButton>*/}
            {/*      BOOK A MEETING WITH US*/}
            {/*    </StyledSecondaryButton>*/}
            {/*  </StyledCalendlyWrapper>*/}
            {/*</div>*/}

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center ">
              <PinImg src={LocationIcon} alt="Location Pin" />
              <Text>Argentina</Text>

              <PinImg src={EmailIcon} alt="Location Pin" />
              <Anchor href="mailto:hey@braintly.com">hey@braintly.com</Anchor>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;
