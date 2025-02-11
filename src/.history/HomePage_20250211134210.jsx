import React from 'react'
import ProjectsOverview from './Projects Overview';
import arrow from "./assets/down-arrow-svgrepo-com.svg";
import wrd from "./assets/uuundulate.svg"

export const HomePage = () => {
  return (
    <div className='h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[##fff6e9]'>
      <div className='snap-start'>
        <div className='flex flex-col w-full h-screen snap-center relative overflow-hidden text-[#bddfbd]'>
          <img 
            alt="Background wave" 
            className='absolute h-full lg:h-auto scale-x-[-1]  md:right-0 top-0 w-full z- md:w-auto bg-[#343434]' 
          />
          
          <div className='px-4 md:px-0 z-30'>
            <h1 className='font-inconsolata text-4xl md:text-8xl mt-24 md:mt-[150px] md:ml-[50px] z-20'>
              Bilaal Bare
            </h1>
            
            <p className='font-inconsolata text-lg md:text-2xl w-full md:w-[500px] md:ml-[150px] mt-4 md:mt-[40px] mb-6 z-20'>
              Aspiring Architect. <br/>
              I'm interested in: Maths, Science and Web Development.
            </p>
            
            <div className='ml-4 md:ml-[150px] z-20'>
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
