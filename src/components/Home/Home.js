import React from 'react';
import ContractUs from '../contract/ContractUs';
import Services from '../services/Services';
import TopBanner from './topbanner/TopBanner';

const Home = () => {
    return (
        <div id="home">
            <TopBanner></TopBanner>
            <Services></Services>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;