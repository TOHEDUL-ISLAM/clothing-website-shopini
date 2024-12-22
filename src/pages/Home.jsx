import React from 'react';
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'

import Logos from '../components/Logos'
import NewArivals from '../components/NewArivals'
import CustomerFeedBack from '../components/CustomerFeedBack'
import Footer from '../components/Footer'
import TrendingProduct from './TrendingProducts'
import Login from '../firebase/login';
import Register from '../firebase/register';

const Home = () => {
    return (
        <div>
       
{/* 
       <Login>  </Login>
       <Register></Register> */}

       <Hero></Hero>
       <Logos></Logos>
       <NewArivals/>
       <TrendingProduct></TrendingProduct>
        <CustomerFeedBack/>
    

        </div>
    );
};

export default Home;