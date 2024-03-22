import React from 'react';

const WeatherBox = ({ weather, today }) => {
  return (
    <div className='background-img'>
      <div className='weather-area'>
        <div className='date-item'>
          {today &&
            `${today[0]}년 ${today[1]}월 ${today[2]}일 (${today[3]}) ${today[4]}:${today[5]}`}
        </div>
        <div className='city-name'>{weather?.name}</div>
        <div className='weather-wrapper'>
          <div className='weather-title'>{weather?.weather[0].description}</div>
          <img
            width={80}
            height={80}
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          />
          <div className='weather-temp'>
            {weather?.main.temp} °C /{' '}
            {(weather?.main.temp * 1.8 + 32).toFixed(3)} °F
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
