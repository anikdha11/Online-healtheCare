import React from 'react';
import About from '../About/About';
import Services from '../services/Services';
import TopBanner from './topbanner/TopBanner';

const Home = () => {
    return (
        <div id="home">
            <TopBanner></TopBanner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;