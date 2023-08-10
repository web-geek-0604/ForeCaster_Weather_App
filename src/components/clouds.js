import React from 'react'

const CurrentClouds = ({data}) => {
    const cloudsDesc = data.clouds.all>50 ? "There are a lot of clouds." : "A little or no clouds.";
    return (
      <div className='p-5 my-[30px] bg-gray-500 bg-opacity-25 rounded-lg shadow-lg font-roboto'>
      <div>
          <div className='flex items-center'>
              <h1 className='ml-[10px] font-bold text-white'>CLOUDNESS</h1>
          </div>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
          <img src="icons/cloudy.svg" alt="raindrop" className='w-[110px]' />
          <p className='text-center text-white font-bold text-3xl'>{data.clouds.all}%</p>
      </div>
      <p className='text-white text-center'>{cloudsDesc}</p>
      </div>
    )
}

export default CurrentClouds;