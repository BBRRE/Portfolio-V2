import React, { useState } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define animation variants
  const imageVariants = {
    expanded: { x: 0, transition: { duration: 0.5 } },
    collapsed: { x: '-100%', transition: { duration: 0.5 } }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full '>
      <div className='flex flex-col pt-[100px] gap-8 w-full'>

        <div className={`flex w-full mx-auto max-w-[1200px] h-[80vh]`} onClick={() => { setIsExpanded(!isExpanded); }}>
          
          <motion.img
            className={`object-cover rounded-sm duration-500 transition-all`}
            src={archi}
            initial={isExpanded ? "collapsed" : "expanded"}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={imageVariants}
            style={{ width: isExpanded ? '66.67%' : '100%', height: isExpanded ? 'auto' : '100%', margin: isExpanded ? '0 ' : '0 auto' }} // Adjust image size based on state
          />
          
          <motion.div
            className={`w-2/6 pl-[20px] pt-[20px] my-auto`}
            initial=""
            animate={isExpanded ? "visible" : "hidden"}
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

      </div>
    </div>
  );
}

export default Arcchi;
