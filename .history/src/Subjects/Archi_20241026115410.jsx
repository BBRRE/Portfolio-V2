import React from 'react'
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  return (
    <div className='bg-[#F9F7F0] font-italiana w-full h-screen '>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex w-full px-4 max-w-[600px] h-[30vh]' >
            <img className='w-full object-cover' src={archi}/>
            <div className='w-1/4 bg-[#d8d8d8]' >

            </div>
          </div>
        </div>
    </div>  
  )
}

export default Arcchi