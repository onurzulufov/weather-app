import React, { useRef, useState } from 'react'
import '../index.css'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo'
import WeatherDetails from './WeatherDetails'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showWeather, setShowWeather] = useState(false)

  const search = async city => {
    const trimmedCity = city.trim()
    if (trimmedCity === '') {
      alert('Enter City Name')
      return
    }
    setLoading(true)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) {
        alert(data.message)
        return
      }
      const iconCode = data.weather[0].icon
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: iconUrl,
      })
      setShowWeather(true)
    } catch (error) {
      setWeatherData(false)
      setShowWeather(false)
      console.error('Error in fetching weather data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather">
      <SearchBar onSearch={search} />
      {loading && <p className="loading">Loading...</p>}
      <div className={`weather-content${showWeather ? ' show' : ''}`}>
        {weatherData && (
          <>
            <WeatherInfo
              icon={weatherData.icon}
              temperature={weatherData.temperature}
              location={weatherData.location}
            />
            <WeatherDetails humidity={weatherData.humidity} windSpeed={weatherData.windSpeed} />
          </>
        )}
      </div>
    </div>
  )
}
export default Weather
