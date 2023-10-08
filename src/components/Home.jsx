import WeatherCard from "./WeatherCard";
import UnitSwitcher from "./UnitSwitcher";
import Spinner from './Spinner'
const Home = ({ weather, units, days, handleUnitSwitch,loading }) => {
  const tempUnits = units === "metric" ? "°C" : "°F";
  const windUnits = units === "metric" ? "m/s" : "m/h";
  
  const weathercards = [
    {
      id: 1,
      icon: "/icons/arrowdown.svg",
      title: "min",
      data: weather?.temp_min,
      unit: tempUnits,
      myBg: "#33FF57",
    },
    {
      id: 2,
      icon: "/icons/arrowup.svg",
      title: "max",
      data: weather?.temp_max,
      unit: tempUnits,
      myBg: "red",
    },
    {
      id: 3,
      icon: "/icons/pressures.svg",
      title: "pressure",
      data: weather?.pressure,
      unit: tempUnits,
      myBg: "red",
    },
    {
      id: 4,
      icon: "/icons/humidity.svg",
      title: "humidity",
      data: weather?.humidity,
      unit: tempUnits,
      myBg: "red",
    },
    {
      id: 5,
      icon: "/icons/cloud2.png",
      title: "feels_like",
      data: weather?.feels_like,
      unit: tempUnits,
      myBg: "#FF5733",
    },
    {
      id: 6,
      icon: "/icons/wind.png",
      title: "speed",
      data: weather?.speed,
      unit: windUnits,
      myBg: "red",
    },
  ];

  const weekdaysData = days.filter((item) => item.dt_txt.includes("09:00:00"));

  const weekdayData = weekdaysData.map((item) => {
    const date = new Date(item.dt * 1000);
    const options = { weekday: "long" };
    const weekday = new Intl.DateTimeFormat("en-IN", options).format(date);
    const temperature = Math.round(item.main.temp * 100).toFixed(2) / 1000;
    const iconCode = item.weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 
    return { weekday, temperature, iconUrl };
  });

  if(!weather)  {
  return( 
  <div className="flex items-center justify-center flex-col">
         <p className="text-xl mt-10 mb-10">No weather data found</p>
         <Spinner/>
  </div>
  )
  }
  return (
    <>
      <UnitSwitcher handleUnitSwitch={handleUnitSwitch} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 py-5">
      
       
        <p className=" text-xl text-center text-gray-500 font-semibold mt-2 md:mt-6">
        Weekdays weather report
       </p>
          {!weekdayData ? <p className=" text-xl text-gray-500 font-semibold">No data found</p> : <Spinner/> ? 
          
          weekdayData?.map((data, index) => (
            <div key={index} className="w-[300px] flex items-center flex-col gap-3  md:w-[150px] md:h-[150px]  p-2 bg-white rounded-2xl shadow-md cursor-pointer">
              <p className="text-xl font-extralight">
                {data?.weekday} 
              </p>
              <span className="text-xl font-bold">{data?.temperature}°C</span>
             {data?.iconUrl && <img
                className="w-[50px] h-[50px]  object-contain"
                src={data?.iconUrl} alt={data?.weekday}
              />}
            </div>
          )):null}
       
        <div>
        </div>
      </div>

      <h2 className="my-5 text-center md:text-left text-3xl text-black font-light">
        Today's Highlights
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {!weather ?<p className=" text-xl text-gray-500 font-semibold">No data found</p> :
        weathercards?.map((w) => (
          <WeatherCard key={w.id} weather={w} units={units} />
        ))}
      </div>
    </>
  );
};

export default Home;
