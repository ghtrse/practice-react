import React from "react";

const Card = (props) => {
  return (
      <React.Fragment>
          <div className="box">
              <i className="fas fa-quote-left"></i>
              <div className="para">
                  <p>{props.desc}</p>
              </div>
              <hr />

              <div className="details flex">
                  <div className="img">
                      <img src={props.profile} alt="" />
                  </div>
                  <div className="name">
                      <h3>{props.name}</h3>
                      <span>{props.post}</span>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default Card;
