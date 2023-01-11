import React from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import NewestProduct from '../NewestProduct/NewestProduct';
import FeatureProduct from '../FeatureProducts/FeatureProduct';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NewestProduct></NewestProduct>
        <FeatureProduct></FeatureProduct>
        <Footer></Footer>
    </div>
  );
};

export default Home;