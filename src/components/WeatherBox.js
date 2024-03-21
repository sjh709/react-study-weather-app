import React from 'react';

const WeatherBox = () => {
  return (
    <div className='weather-area'>
      <div className='date-item'>2024년 3월 21일 (목)</div>
      <div className='city-name'>Seoul</div>
      <div className='weather-wrapper'>
        <div className='weather-title'>CLEAR SKY</div>
        <img width={100} height={100} />
        <div className='weather-temp'>8.96 °C / 48.13 °F</div>
      </div>
    </div>
  );
};

export default WeatherBox;
