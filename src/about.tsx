import React from 'react';
import { Team } from './team';

export const About = () => {
    return (
        <div className='bg-white'>
            {/* HORIZONTAL */}
            <div className='mx-auto hidden sm:block'>
                <div className='fixed inset-x-40 w-[40%]'>
                    <h2 className="text-[4vw] font-bold text-[#c04035]">the nft</h2>
                    <div className='text-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante sit amet tortor scelerisque sollicitudin et at nibh. Phasellus in ante diam. Vivamus id dignissim neque, eget bibendum mi. Mauris ullamcorper dui et erat hendrerit, at consectetur nulla viverra. Proin nec augue condimentum, semper felis at, euismod ligula. Praesent id purus tincidunt, viverra orci sed, molestie orci. Nunc mattis nisi facilisis metus suscipit, vel bibendum mi ultricies. Donec nec arcu ex. Aliquam convallis ac nibh eget scelerisque. Vestibulum faucibus laoreet eros quis rhoncus. In congue aliquet felis a mattis. Morbi tellus dui, interdum sed lectus euismod, consectetur dapibus orci.</div>
                </div>
                <img className='fixed w-[44%] right-0' src='./girl.png'/>
            </div>
            {/* VERTICAL */}
            <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 space-y-12">
                <div className='block sm:hidden'>
                    <div className='space-y-12'>
                        <h2 className="text-9xl font-bold text-center">THE NFT</h2>
                        <img className='h-auto' src='./girl.png'/>
                        <div className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante sit amet tortor scelerisque sollicitudin et at nibh. Phasellus in ante diam. Vivamus id dignissim neque, eget bibendum mi. Mauris ullamcorper dui et erat hendrerit, at consectetur nulla viverra. Proin nec augue condimentum, semper felis at, euismod ligula. Praesent id purus tincidunt, viverra orci sed, molestie orci. Nunc mattis nisi facilisis metus suscipit, vel bibendum mi ultricies. Donec nec arcu ex. Aliquam convallis ac nibh eget scelerisque. Vestibulum faucibus laoreet eros quis rhoncus. In congue aliquet felis a mattis. Morbi tellus dui, interdum sed lectus euismod, consectetur dapibus orci.</div>
                    </div>
                </div>
            </div>
            {/* <Team /> */}
        </div>
    );
};