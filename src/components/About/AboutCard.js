import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <React.Fragment>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About us</h4>
          <h1>
            We <span>provide solution</span> to grow your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            nam explicabo dolor nostrum maxime iusto totam ratione, ipsa odit
            porro minima quas reprehenderit, molestiae quam rem! Odio, nam quod?
            Beatae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores aspernatur commodi obcaecati nam doloremque ab corporis
            officia at cupiditate? Est tempora accusamus accusantium, commodi
            qui sed et laboriosam tenetur.
          </p>
          <button className="secondary-btn">Explore more <i className="fas fa-long-arrow-alt-right"></i></button>
        </div>

        <div className="row image">
            <img src="/images/about-img-1.jpg" alt="" />
            <div className="control-btn">
                <button className="prev"><i className="fas fa-play"></i></button>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutCard;
