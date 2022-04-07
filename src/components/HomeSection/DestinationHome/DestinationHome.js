import React from "react";
import AllItem from "../../Destination/AllItem";
const DestinationHome = () => {
  return (
      <React.Fragment>
          <div className="popular top">
              <div className="full_container">
                  <div className="heading">
                      <h1>Most popular destination</h1>
                      <div className="line"></div>
                  </div>

                  <div className="content">
                      <AllItem />
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default DestinationHome;
