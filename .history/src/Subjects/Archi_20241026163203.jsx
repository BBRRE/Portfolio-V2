import React, { useState } from 'react';
import { motion } from "framer-motion";
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textVisible, setTextVisible] = useState(true); // Track text visibility

  // Define animation variants
  const imageVariants = {
    initial: { x: 0, width: '65%' }, // Initial position next to text
    expanded: {
      x: '0%', // Center the image
      width: '100%', // Maintain aspect ratio
      margin: '0 auto',
      transition: { duration: 2 }
    }
  };

  const textVariants = {
    initial: { opacity: 1, y: 0 }, // Initial position visible
    fading: { opacity: 0, transition: { duration: 0.5 } }, // Fade out
    appearing: { opacity: 1, y: '-50%', transition: { duration: 0.5 } } // Move up from below
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      // Trigger text appearing animation after fading out
      setTimeout(() => {
        setTextVisible(true);
      }, 500); // Match duration with fading
    } else {
      setTextVisible(false);
    }
  };

  return (
    <div onClick={handleToggle}>
      {/* Image component */}
      <motion.img
        src={archi}
        alt="Architectural Design"
        variants={imageVariants}
        initial="initial"
        animate={isExpanded ? "expanded" : "initial"}
        style={{ display: 'block', margin: '0 auto' }} // Centering the image
      />

      {/* Text component */}
      {textVisible && (
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={isExpanded ? "fading" : "appearing"}
          style={{ position: 'relative', top: isExpanded ? '0' : '50%', transition: 'top 0.5s' }} // Position adjustment
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
      )}
    </div>
  );
}

export default Arcchi;
