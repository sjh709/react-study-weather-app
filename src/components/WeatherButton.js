import React from 'react';

const WeatherButton = ({ cities, handleCityChange, selected }) => {
  return (
    <div className='button-area'>
      {cities.map((item, index) => (
        <div key={index}>
          <button
            className={`btn-item ${selected === item ? 'select-city' : ''}`}
            onClick={() => handleCityChange(item)}
          >
            {item[0]}
          </button>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherButton;
