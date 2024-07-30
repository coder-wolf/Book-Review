import React from 'react';
import Navbar from '../Navbar/Navbar';

const Error404 = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center h-[400px]'>
                <h1 className='text-8xl font-extrabold pb-4'>404</h1>
                <h2 className="text-4xl ">Error! Page not found</h2>
            </div>
        </>
    );
};

export default Error404;