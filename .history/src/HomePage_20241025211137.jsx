import React from 'react'
import ProjectsOverview from './Projects Overview';
import arrow from "./assets/down-arrow-svgrepo-com.svg";
import wrd from "./assets/uuundulate.svg"

export const HomePage = () => {
  return (<div className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
  <div className='snap-start'>
  <div className='flex flex-col w-full h-screen bg-noise snap-center relative'>
      <img src={wrd} className='absolute scale-x-[-1]' />
      <h1 className='font-inconsolata text-8xl mt-[150px] ml-[50px] z-10'>Bilaal Bare</h1>
      <p className='font-inconsolata mr-auto text-2xl w-[500px] ml-[150px] mt-[40px] mb-[35px] z-10'>I'm interested in : Maths, Electronics, Physics, Biochemistry, Web Development and Architecture</p>
      <div className='ml-[150px] z-10'>
        <h1 className='font-inconsolata text-2xl font-bold'>Contact me</h1>
        <ul className='font-inconsolata text-xl'>
          <li>Github : <a className='italic' href="https://github.com/BBRRE">BBRRE</a></li>
          <li>Email &nbsp;: <a className='italic' href="mailto:bilaalbarre@hotmail.com?subject=Email from Portfolio">bilaalbarre@hotmail.com</a></li>
        </ul>
      </div>
      <div className='flex flex-col mt-auto animate-bounce'>
        <h1 className='mx-auto text-xl mb-[10px] text-[#898989]'>Projects Below</h1>
        <img src={arrow} className='w-[50px] mt-auto mx-auto' />
      </div>
    </div>
  </div>
  <div className='snap-start'>
  <ProjectsOverview></ProjectsOverview>
  </div>
  </div>
    
  )
}
