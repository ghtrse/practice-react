import React from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <React.Fragment>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>features</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              nam explicabo dolor nostrum maxime iusto totam ratione, ipsa odit
              porro minima quas reprehenderit, molestiae quam rem! Odio, nam
              quod? Beatae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              asperiores aspernatur commodi obcaecati nam doloremque ab corporis
              officia at cupiditate? Est tempora accusamus accusantium, commodi
              qui sed et laboriosam tenetur.
            </p>
            <button className="secondary-btn">
              Explore more <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
