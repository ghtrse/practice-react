import React from "react";
import GalleryData from "./Data";
import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="collection">
        <div className="container top">
          <Slider {...settings}>
            {GalleryData.map((value) => {
              return (
                <div className="box">
                  <img src={value.cover} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
