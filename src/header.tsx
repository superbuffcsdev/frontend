import React from 'react';
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-8xl py-6 px-4 sm:px-8 lg:px-10 space-y-6">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className='text-center sm:text-left text-9xl font-bold'>
                        <Link to="/">HEIST</Link>
                    </div>
                    <div className='sm:col-end-4 place-self-center sm:place-self-end grid grid-cols-4 gap-2'>
                        <div className='col-span-2 place-self-end'>
                            <Link to="/about">
                                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200">
                                    ABOUT
                                </button>
                            </Link>
                        </div>
                        <a href="https://discord.gg/Y5rB2d9dYF" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <img className='h-8 place-self-center' src='./discord.png'/>
                            </button>
                        </a>
                        <a href="https://twitter.com/heistedd" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <img className='h-8' src='./twitter.png'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}