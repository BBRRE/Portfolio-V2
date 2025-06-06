import React from 'react'
import cs from '../assets/aaaa.png'
import ph from '../assets/Monkey.png'
import tr from '../assets/tra.png'

const CompSci = () => {
  return (
    <div className='bg-[#B5C0B7] w-full h-auto min-h-screen grid grid-cols-1'>
      <div className='relative mx-auto mt-24 w-[700px]'>
        <img src={cs} style={{WebkitMaskImage: 'linear-gradient(to top, transparent 10%, black 40%)'}} />
        <div className=" absolute bottom-2 left-2 flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Travel Log
          </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[500px]">
          Website to share you Travel Logs, whether its a day trip to a neighbouring city or a 3 week long vacations spanning countries. Built with react
          and Firebase. It is still in development but I have linked a working prototype <a href="https://Travel-Logs.com/" className='underline text-gray-600'>Travel-Logs.com</a>
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

      <div className='flex md:flex-row flex-col justify-center align-middle w-[85%] h-[500px] mx-auto mt-24 mb-8'>
        <img src={tr} />
        <div className="flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            React Gallery Component
          </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[400px]">
        Decided to release a simple gallery component I built for a personal website, not finding one online that fit the circumstance. I am currently developing it further to make it more intelligent.<a href="https://www.npmjs.com/package/react-gallery-component2" className='underline text-gray-600'>https://www.npmjs.com/package/react-gallery-component2</a>
        </p>
        </div>
      </div>

    </div>
  )
}

export default CompSci
