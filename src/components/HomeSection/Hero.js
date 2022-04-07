import React from "react";
import Slide from "./Slide";
import Data from "./Data";
import './Home.css';
const Hero = () => {
  return (
      <React.Fragment>
          <Slide slides={Data}/>
      </React.Fragment>
  );
};

export default Hero;
