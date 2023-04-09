import React from "react";
import classes from "./index.module.scss";
import { Button, Card, Col, Row } from "antd";
const featureCards = [
  {
    title: "Government",
    img: "card-image-1.png",
    description:
      "5ire provides a novel way for governments to engage with citizens and scale their capacities for effective administration with transparency, efficiency, and speed. ",
  },
  {
    title: "Fortune 500",
    img: "card-image-2.png",
    description:
      "Fortune 500 companies have a disproportionate impact on the future of the world's sustainability. By encoding SGDs and ESG in our blockchain, 5ire makes it easy for businesses to do good.",
  },
  {
    title: "Social Entrepreneurs",
    img: "card-image-3.svg",
    description:
      "5ire is fast, secure, and cheap. This makes us an ideal ecosystem for entrepreneurs who want to combine impact with business as they scale their mission.",
  },
  {
    title: "Universities",
    img: "card-image-4.svg",
    description:
      "5ire helps universities leverage the power of sustainability and make their administration and operations digitalized, real-time and transparent.",
  },
];
const FeatureCards = () => {
  return (
    <div className={`container ${classes.featureCards}`}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col
          span={18}
          md={18}
          sm={20}
          xs={24}
          className={classes.missionDescription}
        >
          <label>
            Our ultimate mission is to make it easy for businesses, governments,
            entrepreneurs, and institutions to incentivize sustainability. By
            aligning economic growth with global sustainability, we want to make
            it easy to be ‘good’.
          </label>
        </Col>
      </Row>
      <Row className={classes.managePadding}>
        {featureCards.map((card) => {
          return (
            <Col
              span={12}
              xs={24}
              sm={24}
              md={12}
              className={classes.featureCardContainer}
            >
              <Card className={classes.featureCard}>
                <Row>
                  <Col span={24}>
                    <h1>{card.title}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{ textAlign: "center" }}
                    className={classes.imageGradient}
                  >
                    <img
                      src={`assets/images/card-images/${card.img}`}
                      className={classes.cardImage}
                      alt="card logo"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <p className={classes.cardDescription}>
                      {card.description}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className={classes.expoloreCardContainer}>
        <Card className={classes.exploreCard}>
          <Row>
            <Col span={18} sm = {18} xs = {24} className={classes.exploreDescription}>
              <h1>#BreakTheInternet</h1>
              <p>Join Us in Making 5ireChain the Strongest it Can Be.</p>
            </Col>

            <Col span={6} sm={6} xs={24}>
              <Button
                style={{ width: "100%", margin: "1.5rem 0" }}
                size="large"
                type="primary"
              >
                Explore
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className={classes.exploreContainer}>
              <img
                src="assets/images/card-images/card-image-5.png"
                alt="explore"
                className={classes.exploreImage}
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default FeatureCards;
