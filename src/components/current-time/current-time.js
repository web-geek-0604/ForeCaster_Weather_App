import React from 'react'
import moment from 'moment';

const CurrentTime = ({data}) => {
    const utc_seconds = parseInt(data.dt, 10) + parseInt(data.timezone, 10);
    const utc_milliseconds = utc_seconds * 1000;
    const local_date = new Date(utc_milliseconds).toUTCString();


    const timezone = data.timezone;
    const sunrise = data.sys.sunrise;
    const sunriseTime = moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm');

    const sunset = data.sys.sunset;
    const sunsetTime = moment.utc(sunset,'X').add(timezone,'seconds').format('HH:mm');

  return (
    <div className='text-white p-5 mx-auto my-[30px] w-[90%] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto'>
        <h1 className='font-bold text-white'>LOCAL DATE AND TIME:</h1>
        <p className='text-3xl mt-[10px]' >{local_date}</p>
        <div>
            <div className='flex justify-start mt-[30px]'>
                <span><img src="icons/sunrise.svg" className='w-[50px]' alt="sunrise"  /></span>
                <span className='flex items-center ml-[20px]'>{sunriseTime}</span>
            </div>
            <div className='flex justify-start'>
                <span><img src="icons/sunset.svg" className='w-[50px]' alt="sunrise"  /></span>
                <span className='flex ml-[20px] items-center'>{sunsetTime}</span>
            </div>
        </div>    
{/*         <p>{exactTime}</p> */}

    </div>
  )
}

export default CurrentTime;