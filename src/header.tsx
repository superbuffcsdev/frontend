import React from 'react';
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-8xl py-6 px-4 px-8 lg:px-10 space-y-6">
                <div className='grid grid-cols-2 gap-2'>
                    <div className='text-left text-6xl lg:text-[2vw] font-bold'>
                        <Link to="/">HEIST</Link>
                    </div>
                    <div className='place-self-end grid grid-cols-2 gap-2'>
                        <a href="https://discord.gg/Y5rB2d9dYF" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-[1vw] py-[.5vw] text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <svg className='h-6 w-6' fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                                </svg>
                            </button>
                        </a>
                        <a href="https://twitter.com/heistedd" target="_blank">
                            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-[1vw] py-[.5vw] text-sm font-medium text-gray-700 hover:bg-gray-200">
                                <svg className='h-6 w-6' fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}