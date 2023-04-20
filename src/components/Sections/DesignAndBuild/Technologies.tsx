import React from "react";
import Display from "../../Display";
import { Col, Row } from "react-bootstrap";
import Technologies1 from "../../../images/technologies-1.png";
import Technologies2 from "../../../images/technologies-2.png";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #000000;

  & li {
    margin: 10px 0;
    padding: 0;
  }

  @media (max-width: 992px) {
    padding: 4px 12px;
  }
`;

const TechnologiesDiv = styled.div`
  margin-top: 80px;
`;

const ImageColumn = styled.div`
  width: 96px;
  border-right: 2px solid #edf3f2;
  padding: 2px;

  & img {
    width: 90px;
  }
`;

const Technologies: React.FC = () => {
  return (
    <TechnologiesDiv>
      <Display on="desktop">
        <Row>
          <Col md={6}>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-end align-items-center p-0"
              >
                <img style={{ width: "240px" }} src={Technologies1} alt="" />
              </Col>
              <Col md={6} className="d-flex align-items-center p-0">
                <List>
                  <li>Web Stack: NodeJS, PHP, ReactJS, Python.</li>
                  <li>SQL & NoSql databases.</li>
                  <li>Cloud Solutions: AWS & GCP.</li>
                </List>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-end align-items-center p-0"
              >
                <img style={{ width: "240px" }} src={Technologies2} alt="" />
              </Col>
              <Col md={6} className="d-flex align-items-center p-0">
                <List>
                  <li>Native Stack: Kotlin & Swift.</li>
                  <li>Hybrid: React Native.</li>
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </Display>
      <Display on="mobile">
        <div className="d-flex">
          <ImageColumn>
            <img src={Technologies1} alt="" />
          </ImageColumn>
          <div>
            <List>
              <li>Web Stack: NodeJS, PHP, ReactJS, Python.</li>
              <li>SQL & NoSql databases.</li>
              <li>Cloud Solutions: AWS & GCP.</li>
            </List>
          </div>
        </div>
        <div className="d-flex mt-4">
          <ImageColumn>
            <img src={Technologies2} alt="" />
          </ImageColumn>
          <div>
            <List>
              <li>Native Stack: Kotlin & Swift.</li>
              <li>Hybrid: React Native.</li>
            </List>
          </div>
        </div>
      </Display>
    </TechnologiesDiv>
  );
};

export default Technologies;
