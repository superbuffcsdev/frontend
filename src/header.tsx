import React from 'react';
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-8xl py-6 px-4 px-8 lg:px-10 space-y-6">
                <div className='grid grid-cols-2 gap-2'>
                    <div className='text-left text-6xl font-bold'>
                        <Link to="/">HEIST</Link>
                    </div>
                    <div className='place-self-end grid grid-cols-2 gap-2'>
                        <a href="https://discord.gg/Y5rB2d9dYF" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <img className='h-6 place-self-center' src='./discord.png'/>
                            </button>
                        </a>
                        <a href="https://twitter.com/heistedd" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <img className='h-6' src='./twitter.png'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}