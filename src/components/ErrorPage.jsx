import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '/images/error-page.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center md:px-32'>
            <div className='text-[#c5a86b] px-5'>
                <h2 className='text-4xl md:text-6xl font-medium pb-4'>Page Not found</h2>
                <p className='py-2 font-medium'>We looked everywhere for this page</p>
                <p className='md:py-2 font-medium'>Are you sure the website URL is correct?</p>
                <div className='mt-10'>
                    <Link className='py-2 font-medium border-2 px-4 border-red-700 rounded-lg' to='/'>GO Home</Link>
                </div>
            </div>
            <img src={errorPage} alt="Error Img"/>
        </div>
    );
};

export default ErrorPage;