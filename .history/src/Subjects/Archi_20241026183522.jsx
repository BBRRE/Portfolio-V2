import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";
import old from "../assets/Old.jpg";
import newL from "../assets/New.jpg";
import kitchen from "../assets/Kitchen.png";
import balcony from "../assets/Balcony.png";
import bathroom from "../assets/Bathroom.png";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [delayedExpanded, setDelayedExpanded] = useState(false);

  useEffect(() => {
    let timer;
    if (isExpanded) {
      timer = setTimeout(() => setDelayedExpanded(true), 500);
    } else {
      timer = setTimeout(() => setDelayedExpanded(false), 150);
    }
    return () => clearTimeout(timer);
  }, [isExpanded]);

  const imageVariants = {
    initial: { x: 0, width: '65%' },
    expanded: { x: '15%', width: '100%', margin: '0 auto', transition: { duration: 2 } }
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 },
    fading: { opacity: 0, transition: { duration: 0.5 } },
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#F9F7F0] bg-dot-pattern font-inconsolata w-full min-h-screen">
      <div className="flex flex-col pt-[100px] gap-8 w-full">
        <div className="flex w-full mx-auto max-w-[1200px] flex-col">
          {/* Initial hero section */}
          <div 
            className="flex w-full mx-auto max-w-[1200px] h-[80vh] cursor-pointer" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <motion.img
              className="object-contain rounded-sm z-10"
              src={old}
              initial="initial"
              animate={isExpanded ? "expanded" : "initial"}
              variants={imageVariants}
            />    

            <motion.div
              className="w-1/3 pl-[20px] pt-[20px] my-auto"
              initial="initial"
              animate={isExpanded ? "fading" : "initial"}
              variants={textVariants}
            >
              <h1 className="text-2xl font-semibold mb-4">Redesigning the layout of an apartment</h1>
              <p className="text-gray-700 leading-relaxed">
                UK tower block built in the 1960s designed to reduce the
                post-war housing shortage. Many of these structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality.
              </p>
            </motion.div>
          </div>

          {/* Expanded grid section */}
          <motion.div
            className={`w-full max-w-[1200px] mx-auto transition-all duration-1000 ease-in-out
              ${delayedExpanded ? 'opacity-100 mt-8' : 'opacity-0 mt-[-400px]'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-8 justify-center">
              {/* Balcony Section */}
              <div className="flex flex-col space-y-6 ">
                <img 
                  src={balcony} 
                  alt="Balcony view" 
                  className="w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Balcony Transformation</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The balcony space has been reimagined as an extension of the living area,
                    creating a seamless indoor-outdoor transition.
                  </p>
                </div>
              </div>

              {/* Kitchen Section */}
              <div className="flex flex-col space-y-6">
                <img 
                  src={kitchen} 
                  alt="Kitchen design" 
                  className="w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Modern Kitchen Design</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The kitchen has been completely redesigned with a focus on functionality
                    and contemporary aesthetics, featuring clean lines and efficient storage solutions.
                  </p>
                </div>
              </div>

              {/* Bathroom Section */}
              <div className="flex flex-col space-y-6 my-[-200px]">
                <img 
                  src={bathroom} 
                  alt="Bathroom design" 
                  className="w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Luxurious Bathroom</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The bathroom renovation embraces modern minimalism while maximizing
                    space utilization through thoughtful layout and storage solutions.
                  </p>
                </div>
              </div>

              {/* Floor Plan Section */}
              <div className="flex flex-col space-y-6">
                <div className="h-[400px] bg-white rounded-lg shadow-lg p-6">
                  {/* This could be where you showcase floor plans */}
                  <h2 className="text-xl font-semibold mb-4">Floor Plans & Technical Details</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The renovation process involved careful space planning and optimization,
                    resulting in a more efficient and contemporary living environment that
                    maintains the building's historical character while meeting modern needs.
                  </p>
                </div>
              </div>
              <img src={newL} className='col-span-2 mt-[200px]' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Arcchi;