import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import schema from '../assets/Schematics.png'
import wiring from '../assets/pcb.png'
import final from '../assets/final.png'


const EEng = () => {
 const [showSecondSection, setShowSecondSection] = useState(false);

  const handleSlide = () => {
    setShowSecondSection(!showSecondSection);
  };

  return (
<div className="bg-[#e5fbe8] w-screen overflow-x-hidden">
      <motion.div 
        className="flex flex-row"
        animate={{ x: showSecondSection ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* First Section */}
        <div className="min-w-full h-screen flex">
          <h1 className='text-5xl'>MacroPad V1</h1>
          <div className="w-[80%] mx-auto grid grid-cols-2 gap-4 relative">
            <div></div>
            <img src={schema} alt="schema" />
            <img src={wiring} alt="wiring" />
            <div></div>
            <div></div>
            <img src={final} alt="final" />
            
          </div>
        </div><button 
              onClick={handleSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-4 rounded-l-lg shadow-lg"
            >
              Next →
            </button>

        {/* Second Section */}
        <div className="min-w-full h-screen flex">
          <div className="w-[80%] mx-auto relative">
            <button 
              onClick={handleSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-4 rounded-r-lg shadow-lg"
            >
              ← Back
            </button>
            {/* Add your content for the second section here */}
            <div className="h-full flex items-center justify-center">
              <h2 className="text-2xl">Second Section Content</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default EEng