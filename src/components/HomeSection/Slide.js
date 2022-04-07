import React, { useState } from "react";
import Data from "./Data";

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return;
  }
  return (
    <React.Fragment>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlideHandler}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlideHandler}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.images} alt="Home image" />}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
          <div className="container">
              <h2>Enjoy your day</h2>
              <span>Search and book hotel</span>


              <form action="">
                  <input type="text" placeholder="Search city" />
                  <div className="flex_space">
                    <input type="date" placeholder="Check in" />
                    <input type="date" placeholder="Check out" />
                  </div>
                  <div className="flex_space">
                    <input type="number" placeholder="Adult(s)(+18)" />
                    <input type="number" placeholder="Children(0-17)" />
                  </div>
                  <input type="number" placeholder="Rooms" />
                  <input type="submit" value='Search' className="submit" />

              </form>
          </div>
      </section>
    </React.Fragment>
  );
};

export default Slide;
