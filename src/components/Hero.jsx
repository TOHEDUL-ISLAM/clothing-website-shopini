import React from "react";
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shop.png";
import Image3 from "../assets/hero/offer.png";
import Slider from "react-slick";
import BackgroundStars from "./BackgroundStars";

const ImageList = [
  {
    id: 1,
    img: Image1, 
    title: "Upto 50% off on all Men's Wear",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2, 
    title: "Elegant Women's Formal Wear - 30% Off",
    description:
      "Enhance your wardrobe! Get 30% off on elegant Mens's formal collections that radiate sophistication.",
  },
  {
    id: 3,
    img: Image3, 
    title: "Exclusive Sale - Flat 20% Off on All Products",
    description:
      "Don't miss out! Shop now and enjoy a flat 20% discount on every product, limited time only.",
  },
];



const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div
      className="rounded-2xl relative mx-auto overflow-hidden w-full max-w-[1500px] min-h-[400px]
     sm:min-h-[550px] lg:min-h-[650px] bg-gray-100 flex justify-center items-center
      dark:bg-gray-950 dark:text-white duration-200 mt-3"
    >
  
     
       <BackgroundStars/>
      
      <div className="z-10 w-full max-w-[1200px] px-6 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={ImageList.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
               
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
             
                <div className="sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className=" h-[300px] sm:h-[450px] ] lg:h-[500px] object-contain sm:object-top mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
