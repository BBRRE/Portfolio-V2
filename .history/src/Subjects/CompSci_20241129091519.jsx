import React from 'react'
import cs from '../assets/aaaa.png'
import ph from '../assets/Monkey.png'
import tr from '../assets/tra.png'

const CompSci = () => {
  return (
    <div className='bg-[#B5C0B7] w-full h-auto min-h-screen flex gap-4'>
      <div className='relative mx-auto mt-24 w-[700px] h-[400px]'>
        <img src={cs} style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} />
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

      <div className='relative mx-auto mt-24 w-[700px]'>
        <img src={ph} style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} />
        <div className=" absolute bottom-2 left-2 flex flex-col ml-4 gap-3 justify-center">
          <h2 className=" text-left text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Monkey Hunder Physics Problem
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[500px]">
            Includes mathematical proof and a more intuitive simulation to explain the Monkey and Hunter Problem  <a href="https://bbrre.github.io/Monkey-Hunter-Problem/index.html" className='underline text-gray-600'>https://bbrre.github.io/Monkey-Hunter-Problem/index.html</a>        </p>
        </div>
      </div>

      <div className='relative mx-auto mt-24 w-[700px]'>
        <img src={tr} style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)' }} />
        <div className=" absolute bottom-2 left-2 flex flex-col ml-4 gap-3 justify-center">
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
