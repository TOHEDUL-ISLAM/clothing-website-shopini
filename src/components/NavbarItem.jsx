import React from 'react';
import { useNavigate } from "react-router-dom";

const NavbarItem = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === 'HOME') {
      navigate('/');
    } else {
      navigate('/trending-products');
    }
  };

  return (
    <div
      className='mt-2 text-black flex items-center gap-3 text-[15px] font-semibold hover:underline underline-offset-8 cursor-pointer'
      onClick={handleClick}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default NavbarItem;
