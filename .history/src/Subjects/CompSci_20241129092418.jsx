import React from 'react'
import cs from '../assets/aaaa.png'
import ph from '../assets/Monkey.png'
import tr from '../assets/tra.png'

const CompSci = () => {
  return (
    <div className='bg-[#B5C0B7] w-full h-auto min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  pb-20'>
      <div className='flex flex-col mx-auto p-4 mt-24'>
      <a href="https://Travel-Logs.com/" className='underline text-gray-600'><img src={cs} className='cursor-pointer' style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} /></a>
        <div className="  flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Travel Logs
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[500px]">
            Website to share you Travel Logs, whether its a day trip to a neighbouring city or a 3 week long vacations spanning countries. Built with react
            and Firebase. It is still in development but I have linked a working prototype <a href="https://Travel-Logs.com/" className='underline text-gray-600'>Travel-Logs.com</a>
          </p>
        </div>
      </div>

      <div className='flex flex-col mx-auto p-4 mt-24'>
      <a href="https://bbrre.github.io/Monkey-Hunter-Problem/index.html" className='underline text-gray-600'><img src={ph} className='cursor-pointer' style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} /></a>
        <div className=" flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Monkey Hunder Physics Problem
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[500px]">
            Includes mathematical proof and a more intuitive simulation to explain the Monkey and Hunter Problem  <a href="https://bbrre.github.io/Monkey-Hunter-Problem/index.html" className='underline text-gray-600'>https://bbrre.github.io/Monkey-Hunter-Problem/index.html</a>        </p>
        </div>
      </div>

      <div className='flex flex-col mx-auto p-4 mt-24'>
      <a href="https://www.npmjs.com/package/react-gallery-component2" className='underline text-gray-600'><img src={tr} className='cursor-pointer' style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} /></a>
        <div className=" flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            React Gallery Component
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[500px]">
          Website to share you Travel Logs, whether its a day trip to a neighbouring city or a 3 week long vacations spanning countries. Built with react 

          </p>
        </div>
      </div>

    </div>
  )
}

export default CompSci
