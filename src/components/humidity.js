import React from 'react'

const CurrentHumidity = ({data}) => {
  const humidityDesc = data.main.humidity>50 ? "Humidity is above average." : "Humidity is in normal range.";
  return (
    <div className='p-5 my-[30px] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto'>
    <div>
        <div className='flex items-center'>
            <h1 className='ml-[10px] font-bold text-white'>HUMIDITY</h1>
        </div>
    </div>
    <div className='flex flex-wrap justify-center items-center'>
        <img src="icons/raindrops.svg" alt="raindrop" className='w-[110px]' />
        <p className='text-center text-white font-bold text-3xl'>{data.main.humidity}%</p>
    </div>
    <p className='text-white text-center'>{humidityDesc}</p>
    </div>
  )
}

export default CurrentHumidity;