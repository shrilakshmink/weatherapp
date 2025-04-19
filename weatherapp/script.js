const apiKey = "502440d55b644aa98b554215251904";

function getWeather() {
  const city = document.getElementById('cityInput').value || 'London';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById('weatherInfo');
      weatherDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
        <p>🌥️ Condition: ${data.current.condition.text}</p>
        <p>💨 Wind: ${data.current.wind_kph} kph</p>
        <p>🌡️ Humidity: ${data.current.humidity}%</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('City not found or API error!');
    });
}
