import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
  };

  const getCurrentDate = () => {
    const day = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    console.log('today', year, month, date, day[now.getDay()]);
  };

  useEffect(() => {
    getCurrentLocation();
    getCurrentDate();
  }, []);

  return (
    <div className='main'>
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
