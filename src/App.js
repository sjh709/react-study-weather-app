import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

function App() {
  const cities = ['Taipei', 'Paris', 'London', 'Jeju'];
  const [weather, setWeather] = useState(null);
  const [today, setToday] = useState(null);
  const [city, setCity] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getCurrentDate = () => {
    const day = ['일', '월', '화', '수', '목', '금', '토'];
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    setToday([year, month, date, day[now.getDay()], hours, minutes]);
  };

  const getWeatherbyCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherbyCity();
    }
    getCurrentDate();
  }, [city]);

  return (
    <div className='main'>
      <WeatherBox weather={weather} today={today} />
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
