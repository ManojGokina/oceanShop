import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Categories() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings} className="slider">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4KXcMuMYpmtj9bNeahxJVYBMC35PKH08PA&usqp=CAU"
            alt="1"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmD3RfOSlS8s_CGPpS4kC5CDD_GS7aB1OWvA&usqp=CAU"
            alt="2"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="3"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="4"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="5"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="6"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="7"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB5mbQjokuByLAc-EjlH0_1W9O206l_PhQ&usqp=CAU"
            alt="8"
          />
        </div>
      </Slider>
    </div>
  );
}
export default Categories;
