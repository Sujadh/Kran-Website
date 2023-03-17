import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../asset/slide1.jpg";
import slide2 from "../../asset/slide2.jpg";
import slide3 from "../../asset/slide3.jpg";
import slide4 from "../../asset/slide4.jpg";
import slide5 from "../../asset/slide5.jpg";
import slide6 from "../../asset/slide6.jpg";
import slide7 from "../../asset/slide7.jpg";
import slide8 from "../../asset/slide8.jpg";

const sliders = [
  { slideimage: slide1 , alt : "slide1"},
  { slideimage: slide2 , alt : "slide2"},
  { slideimage: slide3 , alt : "slide3"},
  { slideimage: slide4 , alt : "slide4"},
  { slideimage: slide5 , alt : "slide5"},
  { slideimage: slide6 , alt : "slide6"},
  { slideimage: slide7 , alt : "slide7"},
  { slideimage: slide8 , alt : "slide8"},
];

function Slider() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        {sliders.map((sliderImages) => (
          <div>
            <img src={sliderImages.slideimage} alt={sliderImages.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
