import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import classes from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import { EVENTS } from "../../../utils/export-images";
import "slick-carousel/slick/slick-theme.css";
const Events = () => {
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
    centerMode: windowWidth > 400 ? true : false,
    autoplay: true,
    speed: 2000,
    slideToShow: 1,
    autoplaySpeed: 3000,
    variableWidth: true,
  };
  return (
    <div className={`container ${classes.holder}`}>
      <Row>
        <Col span={24}>
          <Slider {...settings} arrows={false}>
              {EVENTS.map((event) => (
                <img
                  className={classes.sliderImage}
                  src={`assets/images/slider-images/${event}.png`}
                  alt="company"
                />
              ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Events;
