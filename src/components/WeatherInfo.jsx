import React from 'react'
import '../index.css'

const WeatherInfo = ({ icon, temperature, location, onIconLoad }) => (
  <div className="weather-info">
    <img src={icon} alt="weather icon" className="weather-icon" onLoad={onIconLoad} />
    <p className="temperature">{temperature}°C</p>
    <p className="location">{location}</p>
  </div>
)

export default WeatherInfo
