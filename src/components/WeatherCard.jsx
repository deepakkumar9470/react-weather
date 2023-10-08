import React from 'react';

const WeatherCard = ({ weather }) => {

 
  return (
    <div className="bg-gray-50 md:bg-white w-full md:w-[300px] h-[200px] shadow-cardShadow rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer">
        <div className='flex justify-center  flex-col gap-4  py-4 px-2'>
          <span className='ml-6 text-xl font-semibold text-gray-400 capitalize'>{weather?.title}</span>
          <span className='ml-6 text-5xl font-semibold text-gray-600 capitalize'>{weather?.data} {" "} {weather?.unit}</span>
        
          <div className="flex items-center justify-center w-12 h-12  rounded-full bg-[#D2E0FB] ml-4">
            <img 
            className='flex items-center justify-center w-8 h-8 object-contain m-auto' 
            src={weather?.icon}
            alt={weather?.title} />
          </div>
        </div>
        

    </div>
  );
};

export default WeatherCard;
