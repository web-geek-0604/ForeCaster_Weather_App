import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
  const dayInAweek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAweek));
  
  return ( 
      <div>
      <label className='font-bold text-gray-300 ml-[60px]'>7 DAYS FORECAST</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(4, 7).map((item, idx) =>(
        <AccordionItem key ={idx}>
          <AccordionItemHeading>
              <AccordionItemButton >
                <div className=' flex bg-rgba(0,0,0, .25) px-3 m-4 items-center text-gray-300 w-[50%] h-[80%] rounded-lg shadow-lg'>
                  <div className='ml-[30px] w-[50%] text-gray-300'>
                  <label className='font-bold'>{forecastDays[idx]}</label>
                  <img alt="weather" className="w-[30%]" src={`icons/${item.weather[0].icon}.svg`} />
                  <p className='mb-[5px]'>Click for more info...</p>
                </div>
                <label className='text-2xl mr-[20px] font-bold'>{Math.round(item.main.temp)}°C</label>
                  <label>{item.weather[0].description}</label>
                </div>
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <div className='ml-[50px] flex justify-evenly w-[50%] text-gray-300'>
                <div>
                  <label className='font-bold'>Feels like:</label>
                  <label className='ml-[20px]'>{Math.round(item.main.feels_like)}°C</label><br/>
                  <label className='font-bold'>Pressure:</label>
                  <label className='ml-[20px]'>{item.main.pressure} hPA</label>
                </div>
                <div>
                  <label className='font-bold'>Wind:</label>
                  <label className='ml-[20px]'>{item.wind.speed} m/s</label><br/>
                  <label className='font-bold'>Humidity:</label>
                  <label className='ml-[20px]'>{item.main.humidity} %</label>
                </div>
                <div>

                </div>
              </div>
          </AccordionItemPanel>
        </AccordionItem>
        ))}
      </Accordion>
      </div>
  )
}

export default Forecast