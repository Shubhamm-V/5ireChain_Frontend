import React from 'react'
import { Helmet } from "react-helmet";
import { Row, Col, Input, Button } from "antd";
import classes from  './Banner.module.scss';
const Banner = () => {
  return (
    <div className={`container ${classes.banner}`}>
    <Helmet title="5ire - Blockchain Meets Sustainability">
      <script src="./background.js" type="text/javascript" />
    </Helmet>
    <Row>
      <Col span={13} md={13} sm={24} xs={24} className={classes.info}>
        <h2>BLOCKCHAIN MEETS</h2>
        <h1 className={classes.title}>SUSTAINABILITY</h1>
        <p className={classes.detail}>
          5ireChain is a layer-1 EVM compatible smart contract platform that
          focuses on developing a for-benefit blockchain ecosystem based on
          the Sustainable Development Goals (SDGs) defined by the United
          Nations (UN)
        </p>
        <Row style={{ gap: "0.5rem" }}>
          <Col span={16} sm={16} xs={24}>
            <Input size="large" placeholder="Enter Your Email Address" />
          </Col>
          <Col span={7} sm={7} xs={24}>
            <Button
              size="large"
              type="primary"
              className={classes.startButton}
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={11} sm={11} xs={24} className={classes.bannerImage}>
        <img src="assets/images/banner-image.gif" alt="banner" />
      </Col>
    </Row>
  </div>
  )
}

export default Banner