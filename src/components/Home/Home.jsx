import React,{ lazy, Suspense } from 'react';
import Carousel from './Carousel';
// import ChefInfo from './cards/ChefInfo';
import NewItem from './lunchItem/NewItem';
import LunchSpecials from './lunchItem/LunchSpecials';
import LazyLoader from './cards/LazyLoader';

const ChefInfo = lazy(() => import('./cards/ChefInfo'));

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <ChefInfo></ChefInfo>
            </Suspense>
            <NewItem></NewItem>
            <LunchSpecials></LunchSpecials>
        </div>
    );
};

export default Home;