import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TrendingProducts from "../pages/TrendingProducts";
import ProductDetail from  "../pages/ProductDetail";
import Login from "../firebase/login";
import Register from "../firebase/register";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>} />
      <Route path="/trending-products" element={<TrendingProducts />} />
      <Route path="/product-detail" element={<ProductDetail/>} />
    </Routes>
  );
};

export default AppRoutes;
