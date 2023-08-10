import React from 'react'
//import wind_img from '../../public/icons/wind.svg'

const CurrentWind = ({data}) => {
  const visibility = (data.visibility)/1000;
  return (
    <div className='flex flex-wrap justify-center p-5 my-[30px] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto'>
            <div className="my-[20px] w-[50%]">
                <div className="my-1 text-white mt-[10px]">
                    <span className="font-bold">Feels like: </span><br/>
                    <span>{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="my-1 text-white mt-[10px]">
                    <span className="font-bold">Pressure: </span><br/>
                    <span>{data.main.pressure} hPa</span>
                </div>
                <div className="my-1 text-white mt-[10px]">
                    <span className="font-bold">Visibility: </span><br/>
                    <span >{visibility} km</span>
                </div>
            </div>
    <div className='flex items-center' >
      <div>
        <div className='flex items-center'>
            <img src="icons/wind.svg" alt="wind" className='w-[50px]'/>
            <h1 className='ml-[5px] font-bold text-white'>WIND</h1>
        </div>
        <div className='text-white mt-[10px]'>
                <span className='font-bold'>Speed:</span>
                <span className='ml-[10px]'>{data.wind.speed} m/s</span>
        </div>
        <div className='text-white mt-[10px]'>
                <span className='font-bold'>Gust:</span>
                <span className='ml-[10px]'>{data.wind.gust} m/s</span>
        </div>
        <div className='text-white mt-[10px]'>
                <span className='font-bold'>Degree:</span>
                <span className='ml-[10px]'>{data.wind.deg} °</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CurrentWind;