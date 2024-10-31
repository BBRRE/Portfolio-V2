import React, { useState } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define animation variants
  const imageVariants = {
    initial: { x: 0, width: '65%',}, // Initial position next to text
    expanded: { x: '25%', width: '100%', margin: '0 auto', transition: { duration: 2 } } // Move to center
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 }, // Initial position visible
    fading: { opacity: 0, transition: { duration: 0.5 } }, // Fade out
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } } // Move up from center of image
  };

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full '>
      <div className='flex flex-col pt-[100px] gap-8 w-full'>
        <div className={`flex w-full mx-auto max-w-[1200px] h-[80vh] `} onClick={() => { setIsExpanded(!isExpanded); }}>

          {/* Image component */}
          <motion.img
            className={`object-contain rounded-sm`}
            src={archi}
            initial="initial"
            animate={isExpanded ? "expanded" : "initial"}
            variants={ imageVariants }// Adjust width based on state
          />
          
          {/* Text component */}
          <motion.div
  className={`w-1/3 pl-[20px] pt-[20px] my-auto`}
  initial="initial"
  animate={isExpanded ? "fading" : "appearing"} // Use appearing variant when not expanded
  onAnimationComplete={() => {
    if (isExpanded) {
      // Trigger text appearing animation after fading out
      setTimeout(() => {
        setTextVisible(true);
      }, 500); // Match duration with fading
    } else {
      setTextVisible(false);
    }
  }}
  variants={textVariants}
  style={{
    position: isExpanded ? 'absolute' : 'relative', // Set position to absolute when expanded
    top: isExpanded ? '-100%' : '0', // Move the text above the image when expanded
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Center adjustment
    transition: 'top 0.5s', // Smooth transition for position
  }}
>
  <h2>Redesigning the layout of an apartment</h2>
  <p>
    UK tower block built in the 1960s designed to reduce the
    post-war housing shortage. Many of these structures embraced a brutalist architectural style,
    built with concrete and other durable materials, focusing solely on functionality. A recent exterior
    renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
    with a complementary interior renovation.
  </p>
</motion.div>

        </div>
      </div>
    </div>
  );
}

export default Arcchi;
