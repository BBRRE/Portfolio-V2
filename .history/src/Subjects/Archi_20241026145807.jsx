import React, { useState } from 'react'
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='bg-[#F9F7F0] bg-dot-pattern font-italiana w-full h-full '>
      <div className='flex flex-col pt-[100px] gap-8 w-full'>


        <div className='flex w-full mx-auto max-w-[1200px] h-[80vh]' >
          
          <img className={` object-cover rounded-sm duration-500
          ${isExpanded ? '' : 'w-full '}
          `}
           src={archi}
           />
          
          <div className='w-3/5 pl-[20px] pt-[20px] my-auto' >
            <h1 className='text-xl font-inconsolata' >Redesiging the layout of an apartment</h1>
            <p className='ml-[20px] my-[15px] font-inconsolata' > Uk tower block built in the 1960's where designed to reduce the
              post-war housing shortage, many of these structures embraced a brutalist architectural style,
              building with concrete and other durable materials, focousing soeley on functionality.A recent exterior
              renovation introduced a minimalist black-and-white design, and I have chosen to extend this transformation
              with a complementary interior renovation.</p>
          </div>

        </div>
     
     
      </div>
    </div>
  )
}

export default Arcchi