import React, { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import model from '../assets/model.png'
import inspo from '../assets/Inspo (1).png'
import Des1 from '../assets/Des1.png'
import Des2 from '../assets/Des2.png'
import Des3 from '../assets/Des3.png'
import schema from '../assets/Schematics.png'
import wiring from '../assets/pcb.png'
import final from '../assets/Final - copy.png'
import { ChevronRight, ChevronLeft, Settings, Microchip, Wrench } from 'lucide-react';

const EEng = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleSlide = () => {
    setShowSecondSection(!showSecondSection);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-amber-50 w-full">
      {/* Outer container with no height restriction */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex flex-row w-[200%]"
          animate={{ x: showSecondSection ? '-50%' : '0%' }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* First Section */}
          <div className="w-full">
            <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-hubballi text-gray-800 mb-12"
              >
                MacroPad V1
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Content sections */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="text-amber-600" size={28} />
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                      Designing the Schematics
                    </h2>
                  </div>
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
                  alt="schema"
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              src={wiring}
              alt="wiring"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 my-auto"
            />

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="my-auto space-y-4"
            >
              <div className="flex items-center gap-3">
                <Microchip className="text-amber-600" size={28} />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Finalizing the PCB
                </h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Using KiCad, an open source electronics CAD software, I completed both the schematics
                and PCB routing. The direct routing approach was feasible thanks to the Pi Pico's
                built-in pull-up resistors. After ordering from JLCpcb and testing all 5 PCBs successfully,
                I began component assembly.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="my-auto space-y-4"
            >
              <div className="flex items-center gap-3">
                <Wrench className="text-amber-600" size={28} />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Firmware and Final Touches
                </h2>
              </div>
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
              alt="final"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 my-auto"
            />
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleSlide}
            className="absolute right-8 top-8 bg-amber-100 hover:bg-amber-200 duration-300 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 group"
          >
            Next
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Second Section */}
        <div className="min-w-full min-h-screen flex relative">
          <div className="w-full h-auto mx-auto ">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleSlide}
              className="absolute left-8 top-8 bg-amber-100 hover:bg-amber-200 duration-300 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 group"
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              Back
            </motion.button>
            <div className="h-full w-[85%] mx-auto grid grid-cols-2 items-center justify-center mt-24">
              <motion.h1
                className="text-5xl font-hubballi absolute top-6 left-44 text-gray-800"
              >
                MacroPad V2
              </motion.h1>

              <motion.div
                className="my-auto space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="text-amber-600" size={28} />
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Major Design Changes
                  </h2>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  I kept the 3 X 3 configuration for the keys but decided to swich them to a low profile mechanical switches to fit the new aesthetic.
                  I also kept the 3 rotary encoders but decided to remove the 3 state switch due to its lack of funtionality. I also changed the oled screen with an 3 colour e-ink display
                  or lcd, the final decision is yet to be made. In terms of keymaping I decided on having the rotary encoder next to the screen change the layers, this allows you to add how many
                  layers as you would like. I have also desinged it to be modular, more details below.
                </p>
              </motion.div>
              <motion.img
                src={model}
                alt="final"
                className=""
              />
              <motion.img
                src={inspo}
                alt="final"
                className="col-span-2 mx-auto mt-4"
              />
              <motion.img
                src={Des1}
                alt="final"
                className="col-span-2 mx-auto mt-4"
              />
              <motion.img
                src={Des2}
                alt="final"
                className="col-span-2 mx-auto mt-4"
              />
              <motion.img
                src={Des3}
                alt="final"
                className="col-span-2 mx-auto mt-4"
              />

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EEng;