import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [x, setX] = useState(8); // Initialize to show 8 products initially
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://TOHEDUL-ISLAM.github.io/clothing-api/api.json');
      const data = await response.json();
      setProducts(data.categories.Trending_Product);
    };

    fetchProducts();
  }, []);

  const handleCardClick = (url, description, price) => {
    navigate('/product-detail', { state: { url, description, price } });
  };

  const handleShowMore = () => {
    setX(x+8); 
  };

  return (
    <div className="max-w-[1540px] mx-auto p-5 mt-8">
      <div className="flex justify-center items-center my-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 relative z-10">
          Today's Trending Products
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map(
            (product, index) =>
              index < x && (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleCardClick(product.url, product.description, product.price)}
                >
                  <img src={product.url} alt={product.description} className="w-full object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.description}</h2>
                    <p className="text-lg text-gray-700 mt-2">{product.price}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
          )
        ) : (
          <p className="text-center text-lg">Loading products...</p>
        )}
      </div>
      {x < products.length && ( 
     <button
     onClick={handleShowMore}
     className="font-bold flex mx-auto mt-10 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:ring-2 focus:ring-gray-300 focus:outline-none"
   >
     Show More
   </button>
   
     
      )}
    </div>
  );
};

export default TrendingProducts;
