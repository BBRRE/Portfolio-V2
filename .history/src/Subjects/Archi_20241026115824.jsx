import React from 'react'
import archi from "../assets/arch.jpg";

const Arcchi = () => {
  return (
    <div className='bg-[#F9F7F0] font-italiana w-full h-screen '>
        <div className='flex flex-col pt-[100px] gap-8 w-full'>
          <div className='flex w-full px-4 mx-auto max-w-[1200px] h-[80vh]' >
            <img className='w-full object-cover' src={archi}/>
            <div className='w-3/5 bg-[#d8d8d8] pl-[20px]' >
              <h1 className='text-xl' >Redesiging the layout of an apartment</h1>
              <p className='ml-[20px]' > unit built in the 1960's</p>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Arcchi