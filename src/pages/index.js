import React, { Fragment } from "react";
import Banner from "./home/banner/Banner";
import Companies from "./home/quick-check/Companies";
import QuickCards from "./home/quick-check/QuickCards";
import InfoCard from "./home/info-cards/InfoCard";
import FeatureCards from "./home/info-cards/FeatureCards";
import PartnersAndInvestors from "./home/partners-investors/PartnersAndInvestors";
import Events from "./home/Events/Events";

// Home Page with different sections
const Home = () => {
  return (
    <Fragment>
      <Banner />
      <QuickCards />
      <Companies />
      <InfoCard />
      <FeatureCards/>
      <PartnersAndInvestors/>
      <Events/>
    </Fragment>
  );
};

export default Home;
