import React, { useState, useEffect } from 'react';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5111/api/weatherforecast') // כתובת ה-API שלך
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // המרה ל-JSON
      })
      .then((data) => {
        console.log(data); // תציג את הנתונים בקונסול
        setWeatherData(data); // עדכון הסטייט עם הנתונים
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {weatherData.map((forecast, index) => (
          <li key={index}>
            <strong>{forecast.date}</strong>: {forecast.temperatureC}°C ({forecast.temperatureF}°F) - {forecast.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherComponent;
