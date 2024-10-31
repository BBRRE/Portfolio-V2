import React, { useState } from 'react';
import { motion } from 'framer-motion';
import model from '../assets/model.png';
import inspo from '../assets/Inspo (1).png';
import Des1 from '../assets/Des1.png';
import Des2 from '../assets/Des2.png';
import Des3 from '../assets/Des3.png';
import schema from '../assets/Schematics.png';
import wiring from '../assets/pcb.png';
import final from '../assets/Final - copy.png';
import { ChevronRight, ChevronLeft, Settings, Microchip, Wrench } from 'lucide-react';

const EEng = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleSlide = () => {
    setShowSecondSection(!showSecondSection);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-amber-50 w-full overflow-x-hidden min-h-screen">
      <motion.div
        className="flex"
        animate={{ x: showSecondSection ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* First Section */}
        <div className="min-w-full min-h-screen flex relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-hubballi absolute top-4 left-4 md:top-6 md:left-8 text-gray-800"
          >
            MacroPad V1
          </motion.h1>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-20 md:mt-24">
            {/* Section 1 */}
            <Section
              title="Designing the Schematics"
              icon={<Settings className="text-amber-600" size={28} />}
              delay={0.2}
              text="The choice of components was made largely by what I already had, including the Pi Pico, 9 mechanical switches and the 3-state switch. I then decided to buy 3 rotary encoders. The biggest mistake was not considering functionality before designing the schematics, which I plan to improve in the second version alongside many other aspects."
              imageSrc={schema}
              imageAlt="Schematics"
              delayImg={0.3}
            />
            <Section
              title="Finalizing the PCB"
              icon={<Microchip className="text-amber-600" size={28} />}
              delay={0.5}
              text="Using KiCad, an open source electronics CAD software, I completed both the schematics and PCB routing. The direct routing approach was feasible thanks to the Pi Pico's built-in pull-up resistors. After ordering from JLCpcb and testing all 5 PCBs successfully, I began component assembly."
              imageSrc={wiring}
              imageAlt="Wiring"
              delayImg={0.4}
            />
            <Section
              title="Firmware and Final Touches"
              icon={<Wrench className="text-amber-600" size={28} />}
              delay={0.6}
              text="I designed a transparent plate for component mounting to maintain visibility of the PCB silkscreen. The firmware development was streamlined using QMK library. This MacroPad served as a valuable learning experience, and after months of use, I identified several areas for improvement in the second version."
              imageSrc={final}
              imageAlt="Final design"
              delayImg={0.7}
            />
          </div>

          <NavButton
            direction="Next"
            handleClick={handleSlide}
            icon={<ChevronRight />}
            position="right-4 md:right-8"
          />
        </div>

        {/* Second Section */}
        <div className="min-w-full min-h-screen flex relative">
          <div className="w-full mx-auto p-4 md:p-8">
            <NavButton
              direction="Back"
              handleClick={handleSlide}
              icon={<ChevronLeft />}
              position="left-4 md:left-8"
            />
            <motion.h1
              className="text-4xl md:text-5xl font-hubballi absolute top-4 md:top-6 left-20 text-gray-800"
            >
              MacroPad V2
            </motion.h1>

            <div className="h-full w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
              <Section
                title="Major Design Changes"
                icon={<Wrench className="text-amber-600" size={28} />}
                delay={0.2}
                text="I kept the 3 X 3 configuration for the keys but decided to switch to low-profile mechanical switches. I also kept the 3 rotary encoders but removed the 3-state switch due to functionality limitations. I’m considering a 3-color e-ink or LCD display, with modular design improvements and customizable key mapping."
                imageSrc={model}
                imageAlt="Model Image"
                delayImg={0.3}
              />
              {[inspo, Des1, Des2, Des3].map((src, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  src={src}
                  alt={`Design Image ${index + 1}`}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Section = ({ title, icon, delay, text, imageSrc, imageAlt, delayImg }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="my-auto space-y-4"
  >
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        {title}
      </h2>
    </div>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
      {text}
    </p>
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delayImg }}
      src={imageSrc}
      alt={imageAlt}
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    />
  </motion.div>
);

const NavButton = ({ direction, handleClick, icon, position }) => (
  <motion.button
    initial={{ opacity: 0, x: direction === 'Next' ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    onClick={handleClick}
    className={`absolute ${position} top-4 md:top-8 bg-amber-100 hover:bg-amber-200 duration-300 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg flex items-center gap-2 group`}
  >
    {direction === 'Next' ? direction : icon}
    {direction === 'Next' ? icon : direction}
  </motion.button>
);

export default EEng;
