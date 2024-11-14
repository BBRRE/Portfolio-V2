import React from 'react'
import cs from '../assets/aaaa.png'
import ph from '../assets/Monkey.png'
import tr from '../assets/tra.png'

const CompSci = () => {
  return (
    <div className='bg-[#B5C0B7] w-full h-auto min-h-screen grid grid-cols-1'>
      <div className='flex md:flex-row flex-col justify-center align-middle w-[85%] h-[500px] mx-auto mt-24'>
        <img src={cs} />
        <div className="flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Travel Log
          </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Website to share you Travel Logs, whether its a day trip to a neighbouring city or a 3 week long vacations spanning countries. Built with react
          and Firebase. It is still in development but I have linked a working prototype <a href="https://journey-3930f.web.app/" className='underline text-gray-600'>journey-3930f.web.app</a>
        </p>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-center align-middle w-[85%] h-[500px] mx-auto mt-24 mb-8'>
        <img src={ph} />
        <div className="flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Monkey Hunder Physics Problem
          </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[400px]">
        Includes mathematical proof and a more intuitive simulation to explain the Monkey and Hunter Problem  <a href="https://bbrre.github.io/Monkey-Hunter-Problem/index.html" className='underline text-gray-600'>https://bbrre.github.io/Monkey-Hunter-Problem/index.html</a>
        </p>
        </div>
      </div>

    </div>
  )
}

export default CompSci
