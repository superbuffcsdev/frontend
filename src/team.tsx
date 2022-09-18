import React from 'react';

const people = [
    {
      name: 'satoshi nakamomo',
      role: 'miscellaneous',
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
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-12 space-y-12">
            <div className="space-y-5">
                <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-center font-bold">THE TEAM</h2>
            </div>
            <ul
                role="list"
                className="max-w-8xl space-y-12 grid grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
                {people.map((person) => (
                <li key={person.name} className="place-self-center">
                    <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                        <a href={person.twitterUrl} target="_blank"><img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" /></a>
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                        <ul className="flex space-x-5">
                            <li><h3 className='font-mono text-gray-800 lg:text-sm xl:text-base text-xs'>{person.name}</h3></li>
                        </ul>
                        <p className="text-gray-600 font-mono text-gray-800 lg:text-sm xl:text-base text-xs">{person.role}</p>
                        </div>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
  