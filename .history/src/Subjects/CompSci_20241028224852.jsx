import React from 'react'
import cs from '../assets/old.jpg'

const CompSci = () => {
  return (
    <div className='bg-[#B5C0B7] w-full h-screen grid grid-cols-1'>
      <div className='flex md:flex-row flex-col justify-center align-middle w-[85%] h-[500px] mx-auto mt-24'>
        <img src={cs} />
        <div className="flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Travel Log
          </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Website to share you Travel Logs, whether its a day trip to a neighbouring city or a 3 week long vacations spanning countries.Built with react
          and Firebase for the backend. It is still in development but I have linked a working prototype <a href="journey-3930f.web.app">journey-3930f.web.app</a>
        </p>
        </div>
      </div>
    </div>
  )
}

export default CompSci