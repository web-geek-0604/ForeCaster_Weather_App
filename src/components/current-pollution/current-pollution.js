import React from 'react'
import GaugeChart from 'react-gauge-chart';


const CurrentPollution = ({data}) => {
    const color = data.list[0].main.aqi > 3 ? "#ef4444" : "#4ade80";
    const pollutionDesc = data.list[0].main.aqi > 3 ? "Poor" : "Good";
    const pollutionImg = data.list[0].main.aqi > 3 ? <img src="icons/smiley-with-mask.png" alt="bad" className='w-[100px]' /> : <img src="icons/happy-smiley.png" alt="happy" className='w-[80px]' />;
    const pollutionText = data.list[0].main.aqi > 3 ? <p>Air quality is poor and can be harmful for sensitive groups of people</p> : <p>Air quality is good and safe for people</p>

    return (
    <div className='p-5 mx-auto my-[30px] w-[80%] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto'>
        <div>
            <p style={{"color": color}} className='font-bold text-center text-7xl'>{data.list[0].main.aqi}</p>
            <p style={{"color": color}} className='font-bold text-center text-4xl'>{pollutionDesc}</p>
            <p style={{"color": color}} className='font-bold text-center text-xl mt-[30px]'>{pollutionText}</p>
            <div className='mt-[20px] flex items-center justify-center text-center'>{pollutionImg}</div>
        </div>
    </div>
    
  );
}

export default CurrentPollution;