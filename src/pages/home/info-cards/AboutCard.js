import React from "react";
import classes from "./index.module.scss";
import { Row, Col } from "antd";
const AboutCard = () => {
  return (
    <Row  className={classes.aboutCard}>
      <Col span={12} md = {12} sm = {24} xs = {24} className={classes.infoImageContainer}>
        <img src="assets/images/site-images/info-image.svg" alt="about info" />
      </Col>
      <Col span={12} md = {12} sm = {24} xs = {24} className={classes.aboutInfo}>
        <h1>
          We’re a sustainability driven blockchain with reputation-based
          mechanisms.
        </h1>
        <p>
          In the near future, we aim to become an ecosystem focusing on positive
          impact.
        </p>
        <p>
          We also aim on making blockchain sustainable & accessible for 1
          billion+ people by 2030.
        </p>
      </Col>
    </Row>
  );
};

export default AboutCard;
