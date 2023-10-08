import React from "react";

const Sidebar = ({city,setCity,weather,units,handleSearch}) => {


  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
               'Thursday', 'Friday', 'Saturday'];
  var d = new Date(weather?.dt * 1000);
  var dayName = days[d.getDay()];

  const weatherImages = {
    'Clear': '/images/clear-cloud.jpg',
    'Clouds': '/images/clouds.png',
    'Rain': '/images/rain.png',
    'Snow': '/images/snow.jpeg',
    'few clouds': '/images/clear-cloud.png',
    'scattered clouds': '/images/scattered-clouds.png',
    "mist": '/images/mist.png',
    "broken clouds": '/images/broken-clouds.png',
    "clear sky": '/images/clear-sky.png',
    "haze": '/images/haze.png',
  };

  const getWeatherImage = (description) => {
    const defaultImage = 'https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=600';   
    return weatherImages[description] || defaultImage;
  };
  return (
    <div className="flex items-center flex-col justify-between gap-5">
      <div className="flex items-center justify-between">
        <img
          className="w-7 h-7 cursor-pointer"
          src="/icons/search.svg"
          alt="city"
        />

        <input
          type="text"
          placeholder="Search for city...."
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full rounded-md outline-none text-2xl font-extralight px-3 py-2"
        />
        <div className="bg-bgMain rounded-full p-2 px-2">
          <img
            className="w-7 h-7 cursor-pointer"
            src="/icons/location.svg"
            alt="city"
          />
        </div>
      </div>

     {
      !weather ? <p className="text-xl font-semibold">No Data found</p> :
      <>
          <div className="flex flex-col gap-4">
         <img
          className="w-[200px] h-[200px] object-contain cursor-pointer"
          src={weather?.iconUrl ? weather?.iconUrl : "/icons/sun2.png"}
          alt="city"
        />
        <h1 className=" font-light text-8xl">{`${Math.round(weather?.temp)} °${units === "metric" ? "C" : "F"}`}</h1>
        <p className="text-xl">
          {dayName}, <span className="text-xl text-txtTime">{weather?.timeFormat}</span> {" "} - {" "}
          <span className="text-2xl text-indigo-500 font-semibold">{weather?.description}</span>
        </p>
      </div>
      <hr className="bg-gray-300" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 object-contain"
            src="/icons/therma.svg"
            alt="thermometerimg"
          />
          <span className="text-[18px]">Feels like {`${weather?.feels_like} °${units === "metric" ? "C" : "F"}`}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 object-contain"
            src="/icons/cloud1.png"
            alt="cloudimg"
          />
          <span className="text-[18px]">Cloudly - {weather?.all}%</span>
        </div>
      </div>
      <div className="w-[350px] h-[80px] md:w-[250px] md:h-[150px] mb-2  flex items-center justify-center relative">
        <img
          className="w-full h-full object-cover rounded-2xl  md:rounded-3xl mb-2"
          src={getWeatherImage(weather?.description)}
          alt={weather?.description}
        />
        <span className="text-white text-2xl font-semibold absolute">{weather?.name} , {weather?.country}</span>
      </div>
      </>
     }
    </div>
  );
};

export default Sidebar;
