import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full min-h-screen'>
      <div className='flex flex-col pt-[100px] gap-8 w-full'>
        <div 
          className={`bg-slate-200 max-w-[1200px] mx-auto cursor-pointer transition-all duration-700 ease-in-out
            ${isExpanded ? 'min-h-screen' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={`relative transition-all duration-700 ease-in-out
            ${isExpanded ? 'flex-col' : 'flex'}
            w-full mx-auto max-w-[1200px]`}
          >
            {/* Text Section */}
            <div className={`transition-all duration-700 ease-in-out
              ${isExpanded 
                ? 'w-full px-8 py-12 text-center' 
                : 'w-3/5 pl-[20px] pt-[20px] my-auto'}`}
            >
              <h1 className={`font-inconsolata transition-all duration-700 ease
                ${isExpanded ? 'text-4xl mb-8' : 'text-xl'}`}
              >
                Redesiging the layout of an apartment
              </h1>
              <p className={`font-inconsolata transition-all duration-700
                ${isExpanded 
                  ? 'text-lg max-w-3xl mx-auto leading-relaxed' 
                  : 'ml-[20px] my-[15px]'}`}
              >
                Uk tower block built in the 1960's where designed to reduce the
                post-war housing shortage, many of these structures embraced a brutalist architectural style,
                building with concrete and other durable materials, focousing soeley on functionality.
                A recent exterior renovation introduced a minimalist black-and-white design, 
                and I have chosen to extend this transformation with a complementary interior renovation.
              </p>
            </div>

            {/* Image Section */}
            <div className={`transition-all duration-700 ease-in-out
              ${isExpanded 
                ? 'w-full h-[60vh] mt-8' 
                : 'w-full h-[80vh]'}`}
            >
              <img 
                className={`w-full h-full object-cover rounded-sm transition-all duration-700
                  ${isExpanded ? 'object-contain' : 'object-cover'}`}
                src={archi}
                alt="Architectural floor plan"
              />
            </div>

            {/* Expand/Collapse Indicator */}
            <ChevronDown 
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 text-gray-600
                transition-transform duration-700
                ${isExpanded ? 'rotate-180' : 'animate-bounce'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arcchi;