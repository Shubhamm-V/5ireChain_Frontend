import { Card, Col, Row } from "antd";
import classes from "./index.module.scss";
import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
let cardData = [
  {
    title: "Testnet Beta",
    live: true,
  },
  {
    title: "5ire Documentation",
    live: false,
  },
  {
    title: "Partner with Us",
    live: false,
  },
];
const QuickCards = () => {
  return (
    <div className={`container ${classes.cardContainer}`}>
      <Row
        style={{
          justifyContent: "space-between",
          paddingBottom: "2rem",
          gap: "1rem",
        }}
      >
        {cardData.map((card) => {
          return (
            <Col span={7} xl={7} md={11} sm={24} xs={24}>
              <Card className={classes.card} bodyStyle = {{padding: '1rem'}}>
                <Row style={{ gap: "1rem" }}>
                  <img src="logo.svg" alt="5irechain logo" />
                  <div>
                    <Col span={24}>
                      <Col span={24} sm = {24} xs = {18}>
                        <h2>{card.title}</h2>
                      </Col>
                      {card.live && (
                        <label>
                          <strong>Live</strong>
                        </label>
                      )}
                    </Col>
                  </div>
                  <ArrowUpOutlined className={classes.arrow} />
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default QuickCards;
