const CurrentWeather = ({data}) => {

    return (
        <div className="flex items-center justify-center p-5 mx-auto my-[30px] w-[100%] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto">
            <div className="px-4 py-5 rounded-lg text-white items-center">
                <div className="flex justify-center items-center">
                <img className="w-[150px] " alt="weather" src={`icons/${data.weather[0].icon}.svg`}/>
                </div>
                <p className="text-center font-bold  text-5xl my-1">{Math.round(data.main.temp)}°C</p>
                <div className="flex justify-evenly ">
                    <img src="icons/thermometer-colder.svg" className="w-[50px]" alt="warmer" />
                    <p className="flex items-center text-center font-bold  my-1">{Math.round(data.main.temp_min)}°C</p>
                    <img src="icons/thermometer-warmer.svg" className="w-[50px]" alt="warmer" />
                    <p className="flex items-center text-center font-bold my-1">{Math.round(data.main.temp_max)}°C</p>
                </div>
                <p className="text-center font-bold text-white my-2 text-xl">{data.city}</p>
                <p className="text-center  text-[14px]">{data.weather[0].description}</p>
            </div>
        </div>
    );
}

export default CurrentWeather;