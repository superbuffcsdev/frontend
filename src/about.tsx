import React from 'react';
import { Team } from './team';
import { Footer } from './footer';

export const About = () => {
    return (
        <div className='bg-white'>
            {/* HORIZONTAL */}
            <div className='mx-auto hidden sm:grid grid-cols-2 space-y-[.5vw]'>
                <div className='w-[70%] relative inset-x-40'>
                    <h2 className="text-[4vw] font-bold text-[#c04035]">the nft</h2>
                    <div className='text-[1.2vw]'>Azuki is a brand. A new kind of brand that we build together. A brand for the metaverse. By the community. A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together. The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten.</div>
                </div>
                <img src='./girl.png'/>
                <img className='place-self-end' src='./job.png'/>
                <Team />
            </div>
            <Footer />
            {/* VERTICAL */}
            <div className="block sm:hidden mx-auto max-w-screen-xl py-12 px-4 sm:px-6 space-y-12">
                <div className=''>
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