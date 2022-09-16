import React from 'react';

const people = [
    {
      name: 'satoshi nakamomo',
      role: 'gmeow',
      imageUrl:
        'https://i.seadn.io/gae/44p3wMtYJxBufympFL3CoYOADVML-su7b6WlhJozJqnLMlayh6Rf4my0nv0GjVnMe2qFSEdzjKrT8gOrrrshgk15OdaF7f3mGWU6?w=500&auto=format',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'satoshi nakamomo',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/KL4-XQ-rjARWqGtPiIpM9l12ygeNvDLv0bNeFHv_MGjellQmHiB9GwmrT_Yubf4TZAWoOkXPkbPc2gfnASQYuscY-rNaetUrMs2ELXE?w=500&auto=format',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'satoshi nakamomo',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/3Htr7GrocLXF14YmuVtkT1Ne_eqXkCdtIM4ezeysieMn1E15YmTMD2aIJg6asnQViy1XYB4ePGeuerCTGCIo6JqvYE0S4tCmhPGb?w=500&auto=format',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'satoshi nakamomo',
        role: 'gmeow',
        imageUrl:
          'https://i.seadn.io/gae/bPDMxJm4OANpPSl-Ja2f7rab27tkKYvyc31xP3gvQjIOLhIu0MM4skKQ13KDW198MKDju9NX64HW70rZZxXvBO0lxQ2rX9Q6zQjo6Q?auto=format&dpr=1&w=500',
        twitterUrl: '#',
        linkedinUrl: '#',
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
                        <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                        <ul className="flex space-x-5">
                            <li><h3 className='font-bold text-xl'>{person.name}</h3></li>
                            <li>
                                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li>
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
  