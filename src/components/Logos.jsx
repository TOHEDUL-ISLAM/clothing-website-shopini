import React from 'react';
import logo1 from '../assets/logo/image/pngegg.png';
import logo2 from '../assets/logo/image/pngegg (1).png';
import logo3 from '../assets/logo/image/pngegg (2).png';
import logo4 from '../assets/logo/image/pngegg (3).png';
import logo5 from '../assets/logo/image/pngegg (4).png';
import logo6 from '../assets/logo/image/pngegg (5).png';

const logoArray = [
  { id: 1, image: logo1 },
  { id: 2, image: logo2 },
  { id: 3, image: logo3 },
  { id: 4, image: logo4 },
  { id: 5, image: logo5 },
  { id: 6, image: logo6 },
];

const Logos = () => {
  return (
    <div 
      className="px-4 py-8 mx-auto max-w-[1500px] bg-slate-100 rounded-xl mt-2 "
      data-aos="fade-left"
      data-aos-duration="1000"
      // data-aos-once="true"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logoArray.map((logo, index) => (
          <div 
            key={logo.id} 
            className="w-full flex justify-center"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-delay={index * 200}
            data-aos-once="true"
          >
            <img
              src={logo.image}
              alt={`Logo ${logo.id}`}
              className=" h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}   
      </div>
    </div>
  );
};

export default Logos;