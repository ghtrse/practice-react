import React from "react";
import Card from "./Card";
import './MostPopular.css';
const MostPopular = () => {
  return (
      <React.Fragment>
          <div className="popular top">
              <div className="full_container">
                  <div className="heading">
                      <h1>Most popular hotel</h1>
                      <div className="line"></div>
                  </div>

                  <div className="content">
                    <Card />
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default MostPopular;
