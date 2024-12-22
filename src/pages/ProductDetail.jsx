import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ClothingDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const { url, description, price, longDescription } = location.state || {};


  const [product] = useState({
    url,
    description,
    price,
    longDescription: longDescription || 'No additional description available.',
  });


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    size: 'M',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Order submitted successfully!');
    setFormData({ name: '', email: '', size: 'M' });
  };


 

  return (
    <div className="max-w-[1200px] mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
       
        <div className="md:w-1/2">
          <img
            src={product.url}
            alt={product.description}
            className="w-full h-auto rounded-lg border border-gray-200"
          />
        </div>

       
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">{product.description}</h2>
          <p className="text-lg text-gray-600 mt-2">
            Price: <span className="font-semibold text-orange-500">{product.price}</span>
          </p>
          <p className="text-gray-500 mt-4 leading-relaxed">{product.longDescription}</p>

          
          <form onSubmit={handleSubmit} className="mt-6 bg-gray-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Order Now</h3>

        
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none"
              />
            </div>

           
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none"
              />
            </div>

           
            <div className="mb-4">
              <label htmlFor="size" className="block text-gray-700 font-medium mb-2">
                Size
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>

           
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-md font-medium hover:bg-orange-500 transition"
            >
              Place Order
            </button>
          </form>

          
          <button
            className="mt-6 text-gray-600 hover:text-gray-800 transition"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothingDetail;
