import React from "react";
import Banner from "../assets/footer/footer-pattern.jpg";
import Logo from "../assets/logo/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      style={{ backgroundImage: `url(${Banner})` }}
      className="text-white py-16 "
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="space-y-4">
            <Logo  key={1} className={"white"} />
            <p className="text-gray-300 text-sm leading-relaxed">
            Crafting timeless style for the modern individual. We blend 
              contemporary design with premium quality fabrics to create 
              clothing that empowers and inspires your unique fashion journey.
            </p>
            <div className="flex space-x-4 pt-4">
              <FaInstagram className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaFacebook className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaLinkedin className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-lg text-gray-300" />
              <span className="text-sm text-gray-300">
                123 Tech Innovation Street, Silicon Valley, CA 94000
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-lg text-gray-300" />
              <span className="text-sm text-gray-300">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-lg text-gray-300" />
              <span className="text-sm text-gray-300">
                contact@fashion.com
              </span>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "/contact" }
              ].map((item) => (
                <li 
                  key={item.name} 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;