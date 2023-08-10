import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';
import { useState } from 'react';
import CurrentPollution from './components/current-pollution/current-pollution';
import CurrentTime from './components/current-time/current-time';
import CurrentWind from './components/wind';
import CurrentHumidity from './components/humidity';
import CurrentClouds from './components/clouds';
//import CurrentForecast from './components/forecast/forecast'


function App() {


  const [currentWeather, setCurrentWeather] = useState(null);
  //const [forecast, setForecast] = useState(null);
  const [pollution, setPollution] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat,lon] = searchData.value.split(" ");
    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    //const ForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const CurrentPollution = fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all([CurrentWeatherFetch, /* ForecastFetch */CurrentPollution])
    .then(async (response) =>{
      const weatherResponse = await response[0].json();
      //const forecastResponse = await response[1].json();
      const pollutionResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      //setForecast({city: searchData.label, ...forecastResponse});
      setPollution({city: searchData.label, ...pollutionResponse});
    })
    .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  //console.log(forecast);
  console.log(pollution);

  return (
    <div className="container">
      <div className='mx-auto my-[50px] p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center text-2xl sm:text-5xl block'>
        <div className='flex items-center justify-center'><h1 className='text-center text-white  font-ubuntu'>F</h1><img className='w-[40px] mt-[15px] sm:w-[50px]' src="icons/snowflake.svg" alt="snowflake" /><h1 className='text-center text-white  font-ubuntu'>reCaster :</h1></div><div><h1 className='text-center text-white font-ubuntu'>Weather App</h1></div>
      </div>
      <Search onSearchChange={handleOnSearchChange} />
      <div className="p-3 m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3  gap-2">
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {pollution && <CurrentPollution data={pollution} />}
        {currentWeather && <CurrentTime data={currentWeather} />}
        {currentWeather && <CurrentWind data={currentWeather} />}
        {currentWeather && <CurrentHumidity data={currentWeather} />}
        {currentWeather && <CurrentClouds data={currentWeather} />}    
      </div>
{/*       {forecast && <CurrentForecast  data={forecast} /> }  */}
      <div className='flex text-center text-gray-300 items-center justify-center my-[30px]'>
        <p>Powered by <b>OpenWeather</b></p>
      </div>
    </div>
  );
}

export default App;
