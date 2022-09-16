import React from 'react';

export const Home = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-8xl py-12 px-4 sm:px-6 lg:px-8 space-y-12">
                <div className='grid grid-cols-2 gap 4'>
                    <img src='./header.png'/>
                    <img className='place-self-end' src='./header.png'/>
                    <img src='./header.png'/>
                    <img className='place-self-end' src='./header.png'/>
                </div>
            </div>
        </div>
    );
};