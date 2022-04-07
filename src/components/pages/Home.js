import React from "react";
import DestinationHome from "../HomeSection/DestinationHome/DestinationHome";
import Download from "../HomeSection/Download/Download";
import Gallery from "../HomeSection/Gallery/Gallery";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import MostPopular from "../HomeSection/PopularHotel/MostPopular";
import Work from "../HomeSection/Work/Work";

const Home = () => {
  return <React.Fragment>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Work />
      <Gallery />
  </React.Fragment>;
};

export default Home;
