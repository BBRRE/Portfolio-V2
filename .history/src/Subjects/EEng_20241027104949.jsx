import React from 'react'
import schema from '../assets/Schematics.png'
import wiring from '../assets/pcb.png'
import final from '../assets/final.png'

const EEng = () => {
  return (
    <div className='bg-[#e5fbe8] flex flex-row overflow-x-scroll'>
      <div className='w-full h-scree grid grid-cols-2'>
        <div>

        </div>
        <img src={schema} alt="" />

        <img src={wiring} alt="" />
        <div></div>

        <div></div>
        <img src={final} alt="" />

      </div>
    </div>
  )
}

export default EEng