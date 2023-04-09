import React from "react";
import classes from "./Footer.module.scss";
import { Button, Col, Input, Row } from "antd";
const Footer = () => {
  return (
    <div className={`container ${classes.footerContainer}`}>
      <Row>
        <Col span={12} sm={12} xs={24}>
          <h1>Join the 5ireverse</h1>
          <p>Subscribe to our Newsletter.</p>
        </Col>
        <Col span={12} lg={12} md={18} xs={24}>
          <Row style={{ gap: "1rem", marginTop: "1rem" }}>
            <Col lg={17} sm={24} xs={24}>
              <Input size="large" placeholder="Enter the Email Address" />
            </Col>
            <Col span={6}>
              <Button size="large" type="primary">
                Subscribe Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
