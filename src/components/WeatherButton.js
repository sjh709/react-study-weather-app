import React from 'react';

const WeatherButton = () => {
  return (
    <div className='button-area'>
      <div>
        <button className='btn-item'>C</button>
        <div>Current</div>
      </div>
      <div>
        <button className='btn-item'>T</button>
        <div>Taipei</div>
      </div>
      <div>
        <button className='btn-item'>P</button>
        <div>Paris</div>
      </div>
      <div>
        <button className='btn-item'>L</button>
        <div>London</div>
      </div>
      <div>
        <button className='btn-item'>J</button>
        <div>Jeju</div>
      </div>
    </div>
  );
};

export default WeatherButton;
