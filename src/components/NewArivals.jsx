// NewArrivals.js
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://nirjon32.github.io/clothing-api/api.json');
      const data = await response.json();
      
      const combinedProducts = [
        ...data.categories.A,
        ...data.categories.B,
        ...data.categories.C,
      ];
      setProducts(combinedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 tracking-wide relative z-10"
              data-aos="fade-up"
              data-aos-delay={300}>
            New Arrivals
          </h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 rounded-lg blur-xl -z-10"></div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1200px] mx-auto pt-2 gap-4">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div key={index} className="flex-col  transition-transform duration-300 hover:scale-105"
                 data-aos="zoom-in-up"
                 data-aos-duration="700"
                 data-aos-delay={index * 200}>
              <img
              src={item.url}
              
              className="rounded-lg"
             
            />
              <div className="flex justify-between pt-3 align-middle">
                <div>
                  <h2 className="font-bold text-xl">{item.description}</h2>
                  <h2 className="text-neutral-500 font-bold">Explore Now!</h2>
                </div>
                <FaArrowRightLong className="font-bold text-neutral-500 my-auto text-2xl"/>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;