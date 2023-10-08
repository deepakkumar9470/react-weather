import React from 'react'

const UnitSwitcher = ({handleUnitSwitch}) => {
  return (
    <div className='flex items-center justify-center md:justify-end md:mr-10 gap-6 '>
        <div
        onClick={(e)=>handleUnitSwitch(e)}
         className='flex items-center justify-center w-20 h-10 text-xl transition-all duration-100 font-bold 
        cursor-pointer bg-white text-black hover:bg-black hover:text-white rounded-3xl shadow-md'>
            °C
            </div>
        {/* <div className='flex items-center justify-center w-10 h-10 text-xl transition-all duration-100 font-bold cursor-pointer bg-black text-white hover:bg-white hover:text-black rounded-full'>
            °F
            </div> */}
    </div>
  )
}

export default UnitSwitcher