import React from 'react';
import Carousel from './Carousel';
import ChefInfo from './cards/ChefInfo';
import NewItem from './lunchItem/NewItem';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ChefInfo></ChefInfo>
            <NewItem></NewItem>
        </div>
    );
};

export default Home;