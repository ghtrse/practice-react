import React from "react";
import Card from "./Card";
import WorkData from "./Data";
import './Work.css'

const Work = () => {
  return (
      <React.Fragment>
          <section className="popular works">
              <div className="container">
                <div className="heading">
                    <h1>How it works</h1>
                    <div className="line"></div>
                </div>
                <div className="content grid">
                    {WorkData.map((value,index) => {
                        return (
                            <Card key={index} cover={value.cover} title={value.title} desc = {value.desc} />
                        );
                    })}
                    
                </div>
              </div>
          </section>
      </React.Fragment>
  );
};

export default Work;
