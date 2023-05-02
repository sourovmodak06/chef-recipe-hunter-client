import React from 'react';
import Carousel from './Carousel';
import ChefInfo from './cards/ChefInfo';
import NewItem from './lunchItem/NewItem';
import LunchSpecials from './lunchItem/LunchSpecials';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ChefInfo></ChefInfo>
            <NewItem></NewItem>
            <LunchSpecials></LunchSpecials>
        </div>
    );
};

export default Home;