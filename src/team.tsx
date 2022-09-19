import React from 'react';

const people = [
    {
      name: 'zach',
      role: 'idk',
      imageUrl:
        './azuki1.png',
      twitterUrl: 'https://twitter.com/2dwaifusimplord',
    },
    {
        name: 'kushnan',
        role: 'party',
        imageUrl:
          './azuki2.png',
        twitterUrl: 'https://twitter.com/defiluffy',
      },
      {
        name: 'sarah',
        role: 'market',
        imageUrl:
          './azuki3.png',
        twitterUrl: '#',
      },
      {
        name: 'joanne',
        role: 'art',
        imageUrl:
          './azuki4.png',
        twitterUrl: '#',
      },
  ]
  
  export const Team = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-12 space-y-6">
            <div>
                <h2 className="text-[4vw] font-bold text-[#c04035]">the team</h2>
                <div className='text-[1.2vw]'>The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future.</div>
            </div>
            <ul
                role="list"
                className="max-w-8xl space-y-12 grid grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4 xl:gap-x-6">
                {people.map((person) => (
                <li key={person.name} className="place-self-center">
                    <div className="space-y-[1vw]">
                      <div className="aspect-w-3 aspect-h-2">
                          <a href={person.twitterUrl} target="_blank"><img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" /></a>
                      </div>
                      <div className="font-medium leading-6">
                        <ul className="flex">
                            <li>
                              <h3 className='text-[#c04035] text-[1.5vw]'>{person.name}</h3>
                            </li>
                        </ul>
                      </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
  