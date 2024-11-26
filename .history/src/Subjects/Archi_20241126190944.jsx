import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";
import old from "../assets/Old.jpg";
import newL from "../assets/New.jpg";
import render1 from "../assets/NewLevelSequence.0001.jpeg";
import render2 from "../assets/NewLevelSequence.0002.jpeg";
import render3 from "../assets/NewLevelSequence.0003.jpeg";
import render4 from "../assets/NewLevelSequence.0004.jpeg";
import render5 from "../assets/NewLevelSequence.0005.jpeg";
import kitchen from "../assets/Kitchene.PNG";
import balcony from "../assets/Balconye.PNG";
import bathroom from "../assets/Bathroome.PNG";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [delayedExpanded, setDelayedExpanded] = useState(false);

  useEffect(() => {
    let timer;
    if (isExpanded) {
      setDelayedExpanded(true);
    } else {
      timer = setTimeout(() => setDelayedExpanded(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [isExpanded]);

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100, duration: 1 },
    },
  };

  const imageVariants = {
    initial: { width: '65%', x: 0, transition: { duration: 2 } },
    expanded: { width: '100%', x: 0, transition: { duration: 2 } },
  };

  const desktopImageVariants = {
    initial: { width: '65%', x: 0, transition: { duration: 2 } },
    expanded: { width: '100%', x: '15%', transition: { duration: 2 } },
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 },
    fading: { opacity: 0, transition: { duration: 0.5 } },
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } },
  };

  return (
    <div className={`bg-[#F9F7F0] font-inconsolata w-full`}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto p-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* First Card */}
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.img
            className="object-contain rounded-sm mx-auto"
            src={render1}
            initial="initial"
            animate={isExpanded ? "expanded" : "initial"}
            variants={desktopImageVariants}
          />
          <motion.div
            className="p-4"
            initial="initial"
            animate={isExpanded ? "fading" : "initial"}
            variants={textVariants}
          >
            <h1 className="text-xl font-semibold mb-4">
              Redesigning the layout of an apartment
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Many UK tower blocks were built in the 1960s to address the
              post-war housing shortage. These structures embraced the brutalist
              architectural style, characterized by concrete construction, sharp
              edges, and simple silhouettes, with a primary focus on
              functionality rather than aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Second Card */}
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.img
            className="object-contain rounded-sm mx-auto"
            src={render2}
            initial="initial"
            animate={isExpanded ? "expanded" : "initial"}
            variants={desktopImageVariants}
          />
          <motion.div
            className="p-4"
            initial="initial"
            animate={isExpanded ? "fading" : "initial"}
            variants={textVariants}
          >
            <h1 className="text-xl font-semibold mb-4">
              Another Apartment Layout Redesign
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Recently, a renovation introduced a minimalist black-and-white
              exterior. Building on this transformation, I have chosen to
              extend the renovation indoors, creating a complementary interior
              that honors the brutalist origins while incorporating a modern
              touch.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Arcchi;
