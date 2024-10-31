import React from 'react'
import ProjectsOverview from './Projects Overview';
import arrow from "./assets/down-arrow-svgrepo-com.svg";
import wrd from "./assets/uuundulate.svg"

export const HomePage = () => {
  return (
    <div className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
      <div className='snap-start'>
        <div className='flex flex-col w-full h-screen snap-center relative overflow-hidden'>
          <img 
            src={wrd} 
            alt="Background wave" 
            className='absolute scale-x-[-1] opacity-20 md:opacity-100  md:right-0 top-0 w-full -z-10 md:w-auto' 
          />
          
          <div className='px-4 md:px-0'>
            <h1 className='font-inconsolata text-4xl md:text-8xl mt-24 md:mt-[150px] md:ml-[50px] z-10'>
              Bilaal Bare
            </h1>
            
            <p className='font-inconsolata text-lg md:text-2xl w-full md:w-[500px] md:ml-[150px] mt-4 md:mt-[40px] mb-6 z-10'>
              I'm interested in: Maths, science, Web Development and Architecture.

            </p>
            
            <div className='ml-4 md:ml-[150px] z-10'>
              <h2 className='font-inconsolata text-xl md:text-2xl font-bold'>Contact me</h2>
              <ul className='font-inconsolata text-base md:text-xl space-y-2'>
                <li>
                  Github: <a 
                    className='italic hover:text-blue-600 transition-colors' 
                    href="https://github.com/BBRRE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    BBRRE
                  </a>
                </li>
                <li>
                  Email: <a 
                    className='italic hover:text-blue-600 transition-colors' 
                    href="mailto:bilaalbarre@hotmail.com?subject=Email from Portfolio"
                  >
                    bilaalbarre@hotmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='flex flex-col mt-auto mb-8 animate-bounce'>
            <h3 className='mx-auto text-lg md:text-xl mb-2 text-[#898989]'>
              Projects Below
            </h3>
            <img 
              src={arrow} 
              alt="Scroll down arrow" 
              className='w-8 md:w-[50px] mt-auto mx-auto' 
            />
          </div>
        </div>
      </div>
      
      <div className='snap-start'>
        <ProjectsOverview />
      </div>
    </div>
  )
}

export default HomePage;