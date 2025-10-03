"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
  { 
    id:0,
    img:"/banner1.jpg",
    title:"Trending",
    mainTitle:"ok",
    price:"$20",
  },
  { 
    id:2,
    img:"/banner2.jpg",
    title:"Trending",
    mainTitle:"ok",
    price:"$20",
  },
  { 
    id:3,
    img:"/banner3.jpg",
    title:"Trending",
    mainTitle:"ok",
    price:"$20",
  },

  ];

  return (
   <div>
    <div>
      <Slider {...settings}>
        {slides.map((item)=>
          {
            return (
              <Slide
               key={item.id}
               img={item.img}
               title={item.title}
               mainTitle={item.mainTitle}
               price={item.price}

              
              />
            );
            
          }
        )}

        </Slider>
    </div>
   </div>
  );
};

export default SimpleSlider;
