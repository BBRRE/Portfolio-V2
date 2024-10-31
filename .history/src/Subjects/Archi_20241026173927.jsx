import React, { useState } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";
import old from "../assets/Old.jpg";
import newL from "../assets/New.jpg";
import kitchen from "../assets/Kitchen.png";
import balcony from "../assets/Balcony.png";
import bathroom from "../assets/Bathroom.png";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define animation variants
  const imageVariants = {
    initial: { x: 0, width: '65%', }, // Initial position next to text
    expanded: { x: '25%', width: '100%', margin: '0 auto', transition: { duration: 2 } } // Move to center
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 }, // Initial position visible
    fading: { opacity: 0, transition: { duration: 0.5 } }, // Fade out
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } } // Move up from center of image
  };

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-inconsolata w-full h-auto '>
      <div className='flex flex-col pt-[100px] gap-8 w-full'>
        <div className='flex w-full mx-auto max-w-[1200px]  flex-col'>
          <div className={`flex w-full mx-auto max-w-[1200px] h-[80vh] `} onClick={() => { setIsExpanded(!isExpanded); }}>

            {/* Image component */}
            <motion.img
              className={`object-contain rounded-sm`}
              src={old}
              initial="initial"
              animate={isExpanded ? "expanded" : "initial"}
              variants={imageVariants}// Adjust width based on state
            />    

            {/* Text component */}
            <motion.div
              className={`w-1/3 pl-[20px] pt-[20px] my-auto`}
              initial="initial"
              animate={isExpanded ? "fading" : "initial"}
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
            >
              <h1 className='text-xl font-inconsolata'>Redesigning the layout of an apartment</h1>
              <p className='ml-[20px] my-[15px] font-inconsolata'>UK tower block built in the 1960s designed to reduce the
                post-war housing shortage. Many of these structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality. A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                with a complementary interior renovation.</p>
            </motion.div>

          </div>
          <div
            className={`bg-green-600 duration-500 w-full grid grid-cols-2 grid-rows-5 gap-4 place-items-center overflow-hidden  ${isExpanded ? 'max-h-[5000px] p-4' : 'max-h-0'
              }`}
          >
            <img src={balcony} alt="" />
            <div className='pl-[20px] pt-[20px] my-auto'>
              <h1 className='text-xl font-inconsolata'>Redesigning the layout of an apartment</h1>
              <p className='ml-[20px] my-[15px] font-inconsolata'>UK tower block built in the 1960s designed to reduce the
                post-war housing shortage. Many of these structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality. A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                with a complementary interior renovation.</p>
            </div>

            <div className='pl-[20px] pt-[20px] my-auto'>
              <h1 className='text-xl font-inconsolata'>Redesigning the layout of an apartment</h1>
              <p className='ml-[20px] my-[15px] font-inconsolata'>UK tower block built in the 1960s designed to reduce the
                post-war housing shortage. Many of these structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality. A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                with a complementary interior renovation.</p>
            </div>
            <img src={kitchen} alt="" />

            <img src={bathroom} alt="" />
            <div className='pl-[20px] pt-[20px] my-auto'>              <h1 className='text-xl font-inconsolata'>Redesigning the layout of an apartment</h1>
              <p className='ml-[20px] my-[15px] font-inconsolata'>UK tower block built in the 1960s designed to reduce the
                post-war housing shortage. Many of these structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality. A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                with a complementary interior renovation.</p></div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default Arcchi;
