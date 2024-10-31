import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Settings, Microchip, Wrench } from 'lucide-react';
import model from '../assets/model.png'
import inspo from '../assets/Inspo (1).png'
import Des1 from '../assets/Des1.png'
import Des2 from '../assets/Des2.png'
import Des3 from '../assets/Des3.png'
import schema from '../assets/Schematics.png'
import wiring from '../assets/pcb.png'
import final from '../assets/Final - copy.png'

// Component for section headers with icons
const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3">
    <Icon className="text-amber-600" size={28} />
    <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
      {title}
    </h2>
  </div>
);

// Component for navigation buttons
const NavButton = ({ direction, onClick, children }) => (
  <motion.button
    initial={{ opacity: 0, x: direction === 'next' ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    onClick={onClick}
    className="fixed md:absolute z-10 bottom-4 md:top-8 
               ${direction === 'next' ? 'right-4 md:right-8' : 'left-4 md:left-8'}
               bg-amber-100 hover:bg-amber-200 duration-300 
               px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg 
               flex items-center gap-2 group"
  >
    {direction === 'next' ? (
      <>
        {children}
        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
      </>
    ) : (
      <>
        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        {children}
      </>
    )}
  </motion.button>
);

const MacroPadShowcase = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleSlide = () => setShowSecondSection(!showSecondSection);

  return (
    <div className="bg-gradient-to-br from-green-50 to-amber-50 w-full min-h-screen overflow-hidden">
      <motion.div
        className="flex flex-row"
        animate={{ x: showSecondSection ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* First Section - MacroPad V1 */}
        <div className="min-w-full min-h-screen relative px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-hubballi pt-6 md:pt-8 text-gray-800"
          >
            MacroPad V1
          </motion.h1>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
            {/* Schematics Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <SectionHeader icon={Settings} title="Designing the Schematics" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                The choice of components was made largely by what I already had, including the Pi Pico,
                9 mechanical switches and the 3-state switch. I then decided to buy 3 rotary encoders.
                The biggest mistake was not considering functionality before designing the schematics,
                which I plan to improve in the second version alongside many other aspects.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              src={schema}
              alt="Schematics diagram"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              src={wiring}
              alt="PCB wiring"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
            />

            {/* PCB Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <SectionHeader icon={Microchip} title="Finalizing the PCB" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Using KiCad, an open source electronics CAD software, I completed both the schematics
                and PCB routing. The direct routing approach was feasible thanks to the Pi Pico's
                built-in pull-up resistors. After ordering from JLCpcb and testing all 5 PCBs successfully,
                I began component assembly.
              </p>
            </motion.div>

            {/* Firmware Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <SectionHeader icon={Wrench} title="Firmware and Final Touches" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                I designed a transparent plate for component mounting to maintain visibility of the PCB
                silkscreen. The firmware development was streamlined using QMK library. This MacroPad
                served as a valuable learning experience, and after months of use, I identified several
                areas for improvement in the second version.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              src={final}
              alt="Final product"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
            />
          </div>

          <NavButton direction="next" onClick={handleSlide}>Next</NavButton>
        </div>

        {/* Second Section - MacroPad V2 */}
        <div className="min-w-full min-h-screen relative px-4 md:px-8">
          <motion.h1
            className="text-3xl md:text-5xl font-hubballi pt-6 md:pt-8 text-gray-800 ml-8 md:ml-36"
          >
            MacroPad V2
          </motion.h1>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
            <motion.div className="space-y-4 md:col-span-1">
              <SectionHeader icon={Wrench} title="Major Design Changes" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                I kept the 3 X 3 configuration for the keys but decided to switch them to low profile 
                mechanical switches to fit the new aesthetic. I also kept the 3 rotary encoders but 
                removed the 3-state switch due to its lack of functionality. The OLED screen has been 
                replaced with a 3-colour e-ink display or LCD (final decision pending). The rotary 
                encoder next to the screen now changes layers, allowing for unlimited layer configurations. 
                The design is now fully modular for enhanced flexibility.
              </p>
            </motion.div>

            <motion.img
              src={model}
              alt="3D model"
              className="w-full rounded-lg shadow-lg"
            />

            {['inspo', 'des1', 'des2', 'des3'].map((img, index) => (
              <motion.img
                key={img}
                src={images[img]}
                alt={`Design ${index + 1}`}
                className="w-full col-span-1 md:col-span-2 rounded-lg shadow-lg"
              />
            ))}
          </div>

          <NavButton direction="prev" onClick={handleSlide}>Back</NavButton>
        </div>
      </motion.div>
    </div>
  );
};

export default MacroPadShowcase;