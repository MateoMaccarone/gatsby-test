import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import ObliqueLine from "../../../images/oblique-line.svg";
import ContactForm from "../../ContactForm";

const Title = styled.h2`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 84px;
  max-width: 526px;

  @media (max-width: 992px) {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
  }

  color: #000000;
`;

const Subtitle = styled.h3`
  margin-top: 50px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 992px) {
    margin-top: 20px;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 3px;
  }

  color: #000000;
`;

const Lines = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    align-items: end;
    margin: 16px 16px 32px;
  }

  & .margin {
    margin-top: -40px;
  }
`;

const Success = styled.div`
  margin-top: 12px;
  text-align: center;

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

const StyledDiv = styled.div`
  width: 426px;
`;

const StyledContainer = styled(Container)`
  margin-top: -80px;
`;

const IndexContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<
    React.ReactNode | undefined
  >(undefined);

  return (
    <StyledContainer>
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <Title>We'd love to hear about your project!</Title>
            <Subtitle>
              Let’s <br /> collaborate.
            </Subtitle>
            <Lines>
              <img src={ObliqueLine} alt="Oblique Line" />
              <img className="margin" src={ObliqueLine} alt="Oblique Line" />
            </Lines>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <StyledDiv>
            <ContactForm
              mode="home"
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
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default IndexContactForm;
