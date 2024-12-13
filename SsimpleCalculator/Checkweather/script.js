const weatherDiv = document.getElementById('weather');

// Replace with your OpenWeatherMap API key
const API_KEY = 'daa0a35088eb841d781345dd6df1c4a7';

function getWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const { name, main, weather } = data;
        weatherDiv.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherDiv.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
    });

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                getWeather(latitude, longitude);
            },
            () => {
                weatherDiv.innerHTML = `<p>Permission to access location denied.</p>`;
            }
        );
    } else {
        weatherDiv.innerHTML = `<p>Geolocation is not supported by your browser.</p>`;
    }
}

getLocation();
