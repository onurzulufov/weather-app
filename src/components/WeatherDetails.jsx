import React from 'react'
import humidityIcon from '../assets/humidity.png'
import windIcon from '../assets/wind.png'
import '../index.css'

const WeatherDetails = ({ humidity, windSpeed }) => (
  <div className="weather-data">
    <div className="col">
      <img src={humidityIcon} alt="humidity" />
      <div>
        <p>{humidity} %</p>
        <span>Humidity</span>
      </div>
    </div>
    <div className="col">
      <img src={windIcon} alt="wind" />
      <div>
        <p>{windSpeed} km/h</p>
        <span>Wind Speed</span>
      </div>
    </div>
  </div>
)

export default WeatherDetails
