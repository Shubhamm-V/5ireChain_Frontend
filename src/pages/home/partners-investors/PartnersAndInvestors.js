import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Col, Row } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PARTNERS_AND_INVESTORS } from "../../../utils/export-images";
const PartnersAndInvestors = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  let settings = {
    infinite: true,
    slidesToShow: windowWidth <= 400 ? 2 : windowWidth <= 750 ? 3 : 6,
    speed: 3000,
    rows: windowWidth <= 750 ? 2 : 6,
    variableWidth: true,
  };
  return (
    <div className={`container ${classes.PIContainer}`}>
      <Row className={classes.PIHeader}>
        <h1>Partners and Investors</h1>
      </Row>
      <Row className={classes.sliderContainer}>
        <Col span={24}>
          <Slider {...settings}>
            {PARTNERS_AND_INVESTORS.map((company, ind) => (
              <img
                id={ind}
                className={classes.sponserImage}
                src={`assets/images/sponsers-and-investors/${company}.png`}
                loading="lazy"
                alt={company}
              />
            ))}
          </Slider>
        </Col>
      </Row>
      <Row className={classes.PIHeader} style = {{marginTop: '2rem'}}>
        <h1>Technology Partners</h1>
      </Row>
      <Row style = {{display: 'flex', justifyContent: 'center'}}>
        <Col span={10} md = {16} lg = {12} xl = {10} sm = {19} xs = {24}>
          <Row>
            <Col span={12} sm = {12} xs = {24} className={classes.techPartners}>
              <img src="assets/images/technology-partners/img-1.png" alt = "tech-sponser"/>
            </Col>
            <Col span={12} sm = {12} xs = {24} className={classes.techPartners}>
              <img src="assets/images/technology-partners/img-2.png" alt = "tech-sponser"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PartnersAndInvestors;
