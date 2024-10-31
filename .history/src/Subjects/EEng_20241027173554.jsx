import React, { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import schema from '../assets/Schematics.png'
import wiring from '../assets/pcb.png'
import final from '../assets/Final - copy.png'
import { ChevronRight, ChevronLeft, Settings, Microchip, Wrench } from 'lucide-react';

  

const Model = () => {
  const obj = useLoader(OBJLoader, '/path/to/your/model.obj');
  
  return (
    <primitive 
      object={obj} 
      scale={1} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]}
    />
  );
};

const Scene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

const EEng = () => {

  const handleSlide = () => {
    setShowSecondSection(!showSecondSection);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-amber-50 w-screen overflow-x-hidden min-h-screen">
      <motion.div
        className="flex flex-row"
        animate={{ x: showSecondSection ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* First Section */}
        <div className="min-w-full min-h-screen flex relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-hubballi absolute top-6 left-8 text-gray-800"
          >
            MacroPad V1
          </motion.h1>

          <div className="w-[85%] mx-auto grid grid-cols-2 gap-8 mt-24 relative">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="my-auto space-y-4"
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
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              src={wiring}
              alt="wiring"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
          <div className="w-full h-screen mx-auto ">
            <Canvas>
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />
              <mesh >
              <Scene/>
              </mesh>
            </Canvas>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleSlide}
              className="absolute left-8 top-8 bg-amber-100 hover:bg-amber-200 duration-300 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 group"
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              Back
            </motion.button>
            <div className="h-full flex items-center justify-center">
              <h2 className="text-2xl">Second Section Content</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EEng;