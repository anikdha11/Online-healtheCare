import React from 'react';
import Services from '../services/Services';
import TopBanner from './topbanner/TopBanner';

const Home = () => {
    return (
        <div id="home">
            <TopBanner></TopBanner>
            <Services></Services>
        </div>
    );
};

export default Home;