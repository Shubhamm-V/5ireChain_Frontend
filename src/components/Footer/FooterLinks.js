import React from "react";
import { SOCIAL_ICONS } from "../../utils/export-images";
import { Col, Row } from "antd";
import classes from "./Footer.module.scss";
const FooterLinks = () => {
  return (
    <div className={`container ${classes.footerLinksContainer}`}>
      {" "}
      <Row className={classes.footerLinks}>
        <Col span={8} sm={24} lg={8} xs={24}>
          <Col span={24} className={classes.footerLogoContainer}>
            <img src="assets/images/applogo.svg" alt = "applogo" />
          </Col>
          <Col span={24}>
            <h2>Follow Us</h2>
            <div className={classes.socialContainer}>
              {SOCIAL_ICONS.map((icon, ind) => {
                return (
                  ind > 0 && (
                    <img
                      src={`assets/images/social-icons/${icon}.png`}
                      alt={icon}
                    />
                  )
                );
              })}
            </div>
          </Col>
        </Col>
        <Col span={4} sm={6} lg={4} xs={12} className={classes.footerBlock}>
          <h2>General</h2>
          <label>About Us</label>
          <label>Documentation </label>
          <label>Contact Us</label>
          <label>News & Media</label>
        </Col>
        <Col span={4} sm={6} lg={4} xs={12} className={classes.footerBlock}>
          <h2>Explore</h2>
          <label>Blog</label>
          <label>Community </label>
          <label>Roadmap</label>
          <label>Brand Kit</label>
        </Col>
        <Col span={4} sm={6} lg={4} xs={12} className={classes.footerBlock}>
          <h2>Foundation</h2>
          <label>Research</label>
          <label>Become a Validator</label>
          <label>5ire Ambassador Prorgam </label>
          <label>Careers</label>
        </Col>
        <Col span={4} sm={6} lg={4} xs={12} className={classes.footerBlock}>
          <h2>Legal</h2>
          <label>Privacy Policy</label>
          <label>Sustainablity </label>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: "2rem" }}>
          <label> All Rights Reserved © 5ire 2023 </label>
        </Col>
      </Row>
    </div>
  );
};

export default FooterLinks;
