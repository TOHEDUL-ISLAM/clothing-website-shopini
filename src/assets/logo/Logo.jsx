import React from 'react';

const Logo = ({color}) => {
  const clr = color;
  return (
    <div className="flex items-center text-2xl md:text-3xl font-bold ">
      <span className='text-${clr}'>Shop</span>
      <span className='text-${clr}'>
        i 
      </span>
      <span className="text-orange-500">Ni</span>
    </div>
  );
};

export default Logo;
