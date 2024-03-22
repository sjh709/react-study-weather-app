import React from 'react';

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className='button-area'>
      <div>
        <button className='btn-item'>C</button>
        <div>Current</div>
      </div>

      {cities.map((item, index) => (
        <div key={index}>
          <button className='btn-item' onClick={() => setCity(item)}>
            {item[0]}
          </button>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherButton;
