import React from 'react';
import { Team } from './team';

export const About = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 space-y-12">
                <div className='hidden sm:block grid grid-cols-4'>
                    <div className='grid grid-cols-2'>
                        <div >
                            <img className='place-self-start' src='./logo.jpg'/>
                        </div>
                        <div className='space-y-12'>
                            <h2 className="text-8xl font-bold">THE NFT</h2>
                            <div className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante sit amet tortor scelerisque sollicitudin et at nibh. Phasellus in ante diam. Vivamus id dignissim neque, eget bibendum mi. Mauris ullamcorper dui et erat hendrerit, at consectetur nulla viverra. Proin nec augue condimentum, semper felis at, euismod ligula. Praesent id purus tincidunt, viverra orci sed, molestie orci. Nunc mattis nisi facilisis metus suscipit, vel bibendum mi ultricies. Donec nec arcu ex. Aliquam convallis ac nibh eget scelerisque. Vestibulum faucibus laoreet eros quis rhoncus. In congue aliquet felis a mattis. Morbi tellus dui, interdum sed lectus euismod, consectetur dapibus orci.</div>
                        </div>
                    </div>
                </div>
                <div className='block sm:hidden'>
                    <div className='space-y-12'>
                        <h2 className="text-8xl font-bold text-center">THE NFT</h2>
                        <div className='object-center'>
                            <img className='object-center' src='./logo.jpg'/>
                        </div>
                        <div className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante sit amet tortor scelerisque sollicitudin et at nibh. Phasellus in ante diam. Vivamus id dignissim neque, eget bibendum mi. Mauris ullamcorper dui et erat hendrerit, at consectetur nulla viverra. Proin nec augue condimentum, semper felis at, euismod ligula. Praesent id purus tincidunt, viverra orci sed, molestie orci. Nunc mattis nisi facilisis metus suscipit, vel bibendum mi ultricies. Donec nec arcu ex. Aliquam convallis ac nibh eget scelerisque. Vestibulum faucibus laoreet eros quis rhoncus. In congue aliquet felis a mattis. Morbi tellus dui, interdum sed lectus euismod, consectetur dapibus orci.</div>
                    </div>
                </div>
            </div>
            <Team />
        </div>
    );
};