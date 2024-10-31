import React, { useState } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define animation variants
  const containerVariants = {
    initial: { width: "33%", height: "80%", x: 0 }, // Initial size and position
    expanded: { width: "80%", height: "80%", x: "10%", transition: { duration: 0.5 } }, // Increased size and centered
    center: { x: "50%", transition: { duration: 0.5 }, transitionEnd: { x: "-50%" } } // Centered horizontally
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 }, // Initial position visible
    fading: { opacity: 0, transition: { duration: 0.5 } }, // Fade out
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } } // Move up from center of image
  };

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full flex justify-center items-center'>
      <div className='flex flex-col gap-8 w-full'>
        <motion.div
          className={`flex mx-auto max-w-[1200px]`}
          onClick={() => { 
            setIsExpanded(!isExpanded); 
          }}
        >
          <motion.img
            className={`object-cover rounded-sm`}
            src={archi}
            initial={{ scale: 1 }} // Initial scale
            animate={isExpanded ? { scale: 1.2 } : { scale: 1 }} // Scale up when expanded
            style={{ width: '100%', height: '100%' }}
          />
          
          <motion.div
            className={`w-1/3 pl-[20px] pt-[20px] my-auto`}
            initial="initial"
            animate={isExpanded ? "fading" : "initial"}
            variants={textVariants}
          >
            <h1 className='text-xl font-inconsolata'>Redesigning the layout of an apartment</h1>
            <p className='ml-[20px] my-[15px] font-inconsolata'>UK tower block built in the 1960s designed to reduce the
              post-war housing shortage. Many of these structures embraced a brutalist architectural style,
              built with concrete and other durable materials, focusing solely on functionality. A recent exterior
              renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
              with a complementary interior renovation.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className={`bg-white rounded-lg shadow-lg flex justify-center items-center`}
          initial="initial"
          animate={isExpanded ? "expanded" : "initial"}
          variants={containerVariants}
        >
          {/* Center content goes here, for example: */}
          <h2 className="text-xl font-inconsolata">Expanded Content Here</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Arcchi;
