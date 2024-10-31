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

  // Separate variants for mobile and desktop
  const imageVariants = {
    initial: { 
      width: '65%',
      x: 0,
      transition: { duration: 2 }
    },
    expanded: {
      width: '100%',
      x: 0,
      transition: { duration: 2 }
    }
  };

  // Desktop-specific variants
  const desktopImageVariants = {
    initial: { 
      width: '65%',
      x: 0,
      transition: { duration: 2 }
    },
    expanded: {
      width: '100%',
      x: '15%',
      transition: { duration: 2 }
    }
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 },
    fading: { opacity: 0, transition: { duration: 0.5 } },
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#F9F7F0] bg-dot-pattern font-inconsolata w-full min-h-screen">
      <div className={`flex flex-col pt-[60px] md:pt-[100px] gap-4 md:gap-8 w-full ${isExpanded ? 'pb-16' : ''}`}>
        <div className="flex w-full mx-auto max-w-[1200px] flex-col px-4 md:px-6">
          {/* Initial hero section - Remove fixed height, use aspect ratio instead */}
          <div 
            className={`flex flex-col md:flex-row w-full mx-auto max-w-[1200px] cursor-pointer relative 
              ${isExpanded ? 'mb-8' : 'mb-0'}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Mobile Image */}
            <motion.img
              className="object-contain rounded-sm z-10 mx-auto md:hidden aspect-[4/3]"
              src={old}
              initial="initial"
              animate={isExpanded ? "expanded" : "initial"}
              variants={imageVariants}
            />    

            {/* Desktop Image */}
            <motion.img
              className="hidden md:block object-contain rounded-sm z-10 aspect-[4/3]"
              src={old}
              initial="initial"
              animate={isExpanded ? "expanded" : "initial"}
              variants={desktopImageVariants}
            />    

            <motion.div
              className="w-full md:w-1/3 p-4 md:pl-[20px] md:pt-[20px] my-auto"
              initial="initial"
              animate={isExpanded ? "fading" : "initial"}
              variants={textVariants}
            >
              {/* ... text content ... */}
            </motion.div>
          </div>

          {/* Expanded grid section - Change from margin-top to height transition */}
          <motion.div
            className={`w-full max-w-[1200px] mx-auto overflow-hidden transition-all duration-1000 ease-in-out
              ${delayedExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
          >
            {/* ... rest of the grid content ... */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Arcchi;