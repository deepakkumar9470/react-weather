import axios from "axios";


export const makeIconUrl =(iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

export const  currentTime=(timezoneIn, dtIn)=> {
    let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));
    let hour = (dateTime.getHours() % 12) - 3;
    let ampm = hour >= 12 ? 'PM' : 'AM';

    let minutes = dateTime.getMinutes();
    return `${hour} : ${minutes} ${ampm}`; 
}


export const getWeatherData = async (city, units="metric") =>{
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`)
        const {
            weather,
            name ,
            dt,
            timezone,
            clouds : {all},
            main : {temp,feels_like,temp_min, temp_max,humidity,pressure},
            wind : {speed},
            sys : {country}
        } = 
            res?.data
         
            const {description,icon} = weather[0]    
        return {
            name,
            temp,
            weather,
            feels_like,
            temp_min,
            temp_max,
            humidity,
            pressure,
            country,
            speed,
            description,
            dt,
            timeFormat:currentTime(timezone,dt),
            all,
            iconUrl : makeIconUrl(icon)
        }
      } catch (error) {
        console.log(error)
      }

}




export const getDaysData = async (units) =>{
    try {

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=23.795652&lon=86.430389&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`)
      return res?.data;  
    } catch (error) {
        console.log(error)
      }

}


