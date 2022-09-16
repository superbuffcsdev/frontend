import React from 'react';

const people = [
    {
      name: 'satoshi nakamomo',
      role: 'gmeow',
      imageUrl:
        'https://i.seadn.io/gae/44p3wMtYJxBufympFL3CoYOADVML-su7b6WlhJozJqnLMlayh6Rf4my0nv0GjVnMe2qFSEdzjKrT8gOrrrshgk15OdaF7f3mGWU6?w=500&auto=format',
      twitterUrl: 'https://twitter.com/2dwaifusimplord',
    },
    {
        name: 'kushnan',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/KL4-XQ-rjARWqGtPiIpM9l12ygeNvDLv0bNeFHv_MGjellQmHiB9GwmrT_Yubf4TZAWoOkXPkbPc2gfnASQYuscY-rNaetUrMs2ELXE?w=500&auto=format',
        twitterUrl: 'https://twitter.com/defiluffy',
      },
      {
        name: 'sarah',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/3Htr7GrocLXF14YmuVtkT1Ne_eqXkCdtIM4ezeysieMn1E15YmTMD2aIJg6asnQViy1XYB4ePGeuerCTGCIo6JqvYE0S4tCmhPGb?w=500&auto=format',
        twitterUrl: '#',
      },
      {
        name: 'johanne',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/bPDMxJm4OANpPSl-Ja2f7rab27tkKYvyc31xP3gvQjIOLhIu0MM4skKQ13KDW198MKDju9NX64HW70rZZxXvBO0lxQ2rX9Q6zQjo6Q?auto=format&dpr=1&w=500',
        twitterUrl: '#',
      },
  ]
  
  export const Team = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-12 space-y-12">
            <div className="space-y-5">
                <h2 className="text-8xl text-center font-bold">THE TEAM</h2>
            </div>
            <ul
                role="list"
                className="max-w-8xl space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
                {people.map((person) => (
                <li key={person.name} className="place-self-center">
                    <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                        <a href={person.twitterUrl} target="_blank"><img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" /></a>
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                        <ul className="flex space-x-5">
                            <li><h3 className='font-bold text-xl'>{person.name}</h3></li>
                        </ul>
                        <p className="text-gray-600 text-xl">{person.role}</p>
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
  