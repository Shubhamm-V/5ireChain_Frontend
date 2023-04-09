import React from "react";
import classes from "./index.module.scss";
import { Card, Row, Col, Button} from "antd";
import AboutCard from "./AboutCard";
const InfoCard = () => {
  return (
    <div className={`container ${classes.infoCardContainer}`}>
      <Row>
        <Col span={24}>
          <Card className={classes.infoCard} bodyStyle={{padding: 0}}>
            <Row className={classes.infoContent}>
              <Col span={15} lg = {15} md = {10} sm = {24}  xs = {24} className={classes.infoCardDescription}>
                <h1>#BuildToEarn</h1>
                <ul>
                  <li>
                    Top 10 dApps to receive an incentive after evaluation.
                  </li>
                  <li>
                    An opportunity to earn rewards through our referral program
                    and grants scheme.
                  </li>
                  <li>
                    An incentivization scheme for dApps focused on sustainable
                    development.
                  </li>
                  <li>
                    Reduced gas fees for early adopters and the first 500
                    builders to receive a share of block rewards.
                  </li>
                </ul>
                <Row>
                    <Col span = {24} style = {{marginTop: '1rem'}}>
                        <Button className={classes.learnMoreButton} type = "primary" size = "large">Learn More </Button>
                    </Col> 
                </Row>
              </Col>
              <Col span={9} lg = {9} md = {14} sm = {24}  xs = {24} className={classes.infoCardImage}>
                <img
                  src="assets/images/site-images/card-image.svg"
                  alt="card info"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <AboutCard/>
    </div>
  );
};

export default InfoCard;
