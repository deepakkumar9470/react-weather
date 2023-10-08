import React, { useState, useEffect } from 'react';

import './App.css';
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { getDaysData, getWeatherData } from './services/api'

function App() {
  const [city, setCity] = useState('dhanbad');
  const [weatherData, setWeatherData] = useState({});
  const [daysData, setDaysData] = useState([]);
  const [units, setUnits] = useState("metric");

  const fetchWeatherData = async () =>{
      try {
        const data = await getWeatherData(city,units )
        setWeatherData(data)
        const days = await getDaysData(city,units)
        setDaysData(days.list)   
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(() => {
       fetchWeatherData()
  }, [city,units]);

  const handleSearch = (e) =>{
    if(e.keyCode === 13){     
      setCity(e.target.value)
    }
  }
 
  const handleUnitSwitch = (e) =>{
    const button = e.target;
    const currunit = button.innerText.slice(1);
    const isCelcious = currunit === "C";
    button.innerText = isCelcious ? "°F" : "°C";
    setUnits(isCelcious ? "metric" : "imperial");
  }

  return (
      <div className='flex flex-col md:flex-row'>

          <div className='w-full md:w-[22%] h-screen flex-2 bg-white pt-10 px-4'>
            <Sidebar 
              city={city}
              setCity={setCity}
              handleSearch={handleSearch}
              units={units}
              weather={weatherData}
            />
          </div>
          <div className='w-full md:w-[78%] h-screen flex-6 bg-bgMain pt-10 px-6'>
            <Home 
            units={units}
            weather={weatherData}
            handleUnitSwitch={handleUnitSwitch}
            days={daysData}/>
          </div>

      </div>
  );
}

export default App;
