import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Logo from "../assets/logo/Logo";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/Aos.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; // Firebase configuration
import { signOut, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  };

  const menu = [
    {
      name: "HOME",
    },
    {
      name: "Kids Wear",
    },
    {
      name: "Mens Wear",
    },
    {
      name: "Shoes",
    },
    {
      name: "Trending Products",
    },
  ];

  return (
    <div className="max-w-[1540px] mx-auto flex items-center justify-between gap-5 px-2 md:px-[50px] pt-1 place-content-center rounded-lg bg-white">
      <div className="flex gap-10 items-center">
        <div data-aos="fade-up" className="text-2xl md:text-4xl">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          {menu.map(
            (item) =>
              item.name !== "Trending Products" && (
                <NavbarItem key={item.name} name={item.name} />
              )
          )}
          <div className="group">
            <div className="mt-2 text-black flex items-center gap-1 text-[15px] font-semibold hover:underline underline-offset-8">
              Trending Products
              <span>
                <MdOutlineArrowDropDown
                  className="group-hover:rotate-180 transition-all duration-300"
                  size="20"
                />
              </span>
            </div>
            <div className="p-3 rounded bg-slate-50 absolute z-[1] hidden group-hover:block duration-300">
              <ul className="font-semibold p-1 hover:bg-orange-100 rounded">
                <Link to="/trending-products">Trending Products</Link>
              </ul>
              <ul className="font-semibold p-1 hover:bg-orange-100 rounded">
                <Link to="/trending-products">Best Selling</Link>
              </ul>
              <ul className="font-semibold p-1 hover:bg-orange-100 rounded">
                <Link to="/trending-products">Top Rated</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-10 place-content-center">
        <SearchBar />
        
        {user ? (
          <>
            
              <button onClick={handleSignOut} className="sign-out-btn">
                 <h2 className="font-semibold">Sign Out</h2>
              </button>
          
          
          </>
        ) : (
          
            <Link to="/login" className="sign-in-btn">
              <h2 className="font-semibold">Sign In</h2>
            </Link>
         
        )}
        <PiShoppingCartFill className="my-auto size-7 text-orange-500 hover:text-orange-600 hover:size-8 transition-all duration-300" />
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[35px] md:w-[40px] rounded-full hidden md:flex"
        />
        <FaBars className="md:hidden size-6 mt-[3px] mr-1" />
      </div>
    </div>
  );
};

export default Header;
