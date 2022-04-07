import React from "react";
import Card from "./Card";
import TestimonialData from "./Data";
import './Testimonial.css';

const AllItem = () => {
  return (
      <React.Fragment>
          <section className="testimonial mtop">
                <div className="container grid1">
                    {TestimonialData.map((value,index) => {
                        return <Card key={index} {...value} />
                    })}
                </div>
          </section>
      </React.Fragment>
  );
};

export default AllItem;
