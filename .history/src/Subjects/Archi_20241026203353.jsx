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
    if (isExpanded) {setDelayedExpanded(true)
    } else {
      timer = setTimeout(() => setDelayedExpanded(false), 1000);
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
      <div className="flex flex-col pt-[60px] md:pt-[100px] gap-4 md:gap-8 w-full">
        <div className="flex w-full mx-auto max-w-[1200px] flex-col px-4 md:px-6">
          {/* Initial hero section */}
          <div 
            className="flex flex-col md:flex-row w-full mx-auto max-w-[1200px] h-[60vh] md:h-[80vh] cursor-pointer relative" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Mobile Image */}
            <motion.img
              className="object-contain rounded-sm z-10 mx-auto md:hidden"
              src={old}
              initial="initial"
              animate={isExpanded ? "expanded" : "initial"}
              variants={imageVariants}
            />    

            {/* Desktop Image */}
            <motion.img
              className="hidden md:block object-contain rounded-sm z-10"
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
              <h1 className="text-xl md:text-2xl font-semibold mb-4">Redesigning the layout of an apartment</h1>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Many UK tower blocks were built in the 1960s, designed to reduce the
                post-war housing shortage, These structures embraced a brutalist architectural style,
                built with concrete and other durable materials, focusing solely on functionality and not so much aesthetics. A recent exterior
                renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
                with a complementary interior renovation while paying homage to the brutalist orogins.
              </p>
            </motion.div>
          </div>

          {/* Expanded grid section */}
          <motion.div
            className={`w-full max-w-[1200px] mx-auto transition-all duration-1000 ease-in-out
              ${isExpanded ? 'opacity-100 mt-[-200px] md:mt-8' : 'opacity-0 mt-[-400px]'}
              `}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 justify-center">
              {/* Balcony Section */}
              <div className="flex flex-col space-y-4 md:space-y-6">
                <img 
                  src={balcony} 
                  alt="Balcony view" 
                  className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-2 md:space-y-4 px-4 md:px-0">
                  <h2 className="text-lg md:text-xl font-semibold">Balcony Transformation</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  What appeared to be a balcony was actually an awkward space connecting the main bedroom to the living room.
                   Despite not protruding from the building's facade, this area had defaulted to storage use. By removing this space,
                    I was able to expand the smaller bedrooms and provide them with direct access to exterior windows. The responsibility of storage would be removed from balcony and distrabuted accross the home
                     requiring alternative storage solutions to be disscused later.
                  </p>
                </div>
              </div>

              {/* Kitchen Section */}
              <div className="flex flex-col space-y-4 md:space-y-6">
                <img 
                  src={kitchen} 
                  alt="Kitchen design" 
                  className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-2 md:space-y-4 px-4 md:px-0">
                  <h2 className="text-lg md:text-xl font-semibold">Modern Kitchen Design</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The kitchen was and small narrow with one small window, and despite it's size it was being used as also being used as a laundry
                    room. I decided to expand the kitchen out into the living room and incorporate a large window to not only help with ventilation but 
                    to bring some natural light giving a more enjoyable cooking experience. I also removed many small storage rooms in the kitchen and repurposed
                    it into one large laundry / storage room. This alleviates some stress off the kitchen, and as the door is angled away from the kitchen you wouldn't be
                     interupted while baking. The larger laundry / storage room would act as the central storage and as each bedroom is now larger, there would be
                     space for separated storage within each room.
                  </p>
                </div>
              </div>

              {/* Bathroom Section */}
              <div className="flex flex-col space-y-4 md:space-y-6 md:my-[-200px]">
                <img 
                  src={bathroom} 
                  alt="Bathroom design" 
                  className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="space-y-2 md:space-y-4 px-4 md:px-0">
                  <h2 className="text-lg md:text-xl font-semibold">Luxurious Bathroom</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The bathroom was 2 seperate small rooms, while it came with it's advantages, could be used in parralell, it also had many disadvantages, including the small size.
                     A combined washroom gives you a larger space and with the additional
                    divider it would provide the benifit of seperating the toilet from the bathroom. Within the neighberhood this tower block 
                    resides, it is very common to have a pair of crocs / flip flops in the bathroom, with the new sliding doors the sandlas can remain
                    at the enterance while you both open and close the door. 
                  </p>
                </div>
              </div>

              {/* Floor Plan Section */}
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="h-auto md:h-[400px] bg-white rounded-lg shadow-lg p-4 md:p-6 md:mt-[450px]">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Floor Plans & Technical Details</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base ">
                  Built in the 1960s, this tower block features a typical construction style of its era: load-bearing exterior 
                  walls and central columns, with non-load-bearing interior walls. This structural arrangement provided complete freedom 
                  in redesigning the interior layout to meet modern living standards. The renovated floor plan, created in AutoCAD, is shown below.
                  </p>
                </div>
              </div>

              {/* Final Image */}
              <img 
                src={newL} 
                className="col-span-1 md:col-span-2 mt-8 md:mt-[200px] w-full max-w-[800px] mx-auto rounded-lg shadow-lg" 
                alt="New Layout"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Arcchi;