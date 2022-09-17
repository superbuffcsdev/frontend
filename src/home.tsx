import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className='bg-white'>
            <div className='block sm:grid sm:grid-cols-2 space-y-12 sm:gap-4'>
                <img className='h-auto' src='./man.png'/>
                <div className='text-4xl sm:text-6xl xl:text-9xl text-center sm:text-left mx-2'>
                    <div className='font-bold mb-10'>WE ARE BUYING A NIGHT CLUB</div>
                    <Link to="/about">
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
                            DISCOVER
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};