import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularData from "./PopData";
const Card = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        {PopularData.map((value) => {
          return (
            <div className="cards">
              <div className="item">
                <div className="image">
                  <img src={value.image} alt="" />
                  <i className="fas fa-map-marker-alt"><label>{value.country}</label></i>
                  
                </div>

                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <div className="details">
                  <h2>{value.name}</h2>
                  <div className="boarder">
                    <h3>
                      {value.price} / <span>per night</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </React.Fragment>
  );
};

export default Card;
