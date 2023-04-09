import React from "react";
import classes from "./index.module.scss";
import {Row, Col} from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{ COMPANIES } from "../../../utils/export-images";
const Companies = () => {
  let settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    variableWidth: true
  };
  return (
    <div className={`container ${classes.holder}`}>
      <Row>
        <Col span={24}>
          <Slider {...settings}arrows = {false} >
            {COMPANIES.map((company) => (
                <img
                  className={classes.image}
                  src={`assets/images/companies/${company}.png`}
                  alt="company"
                />
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Companies;
