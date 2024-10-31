import React from 'react';
import ProjectsOverview from './ProjectsOverview';
import arrow from "./assets/down-arrow-svgrepo-com.svg";
import wrd from "./assets/uuundulate.svg";

export const HomePage = () => {
  return (
    <main className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
      {/* Hero Section */}
      <header className='snap-start'>
        <div className='flex flex-col w-full h-screen bg-noise snap-center relative items-start justify-center p-8'>
          <img src={wrd} alt="Background Pattern" className='absolute scale-x-[-1] z-0' />
          
          <h1 className='font-inconsolata text-8xl z-10 text-primary'>Bilaal Bare</h1>
          
          <p className='font-inconsolata text-2xl w-full max-w-[500px] mt-5 mb-8 z-10'>
            I'm interested in Maths, Electronics, Physics, Biochemistry, Web Development, and Architecture.
          </p>
          
          <div className='z-10'>
            <h2 className='font-inconsolata text-2xl font-bold'>Contact me</h2>
            <ul className='font-inconsolata text-xl'>
              <li>Github: <a className='italic text-link hover:underline' href="https://github.com/BBRRE">BBRRE</a></li>
              <li>Email: <a className='italic text-link hover:underline' href="mailto:bilaalbarre@hotmail.com?subject=Email from Portfolio">bilaalbarre@hotmail.com</a></li>
            </ul>
          </div>
          
          <div className='flex flex-col items-center mt-auto animate-bounce'>
            <p className='text-xl mb-2 text-[#898989]'>Projects Below</p>
            <img src={arrow} alt="Scroll down indicator" className='w-[50px]' aria-label="Scroll down to view projects" />
          </div>
        </div>
      </header>
      
      {/* Projects Section */}
      <section className='snap-start'>
        <ProjectsOverview />
      </section>
    </main>
  );
};