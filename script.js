document.getElementById("checkWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch('https://wttr.in/${city}?format=j1')
        .then(response => response.json())
        .then(data => {
            if (!data.current_condition) {
                document.getElementById("result").innerHTML = "City not found!";
            } else {
                const weather = data.current_condition[0];
                document.getElementById("result").innerHTML = `
                    <h3>${city}</h3>
                    <p>🌡 Temp: ${weather.temp_C} °C</p>
                    <p>☁ Weather: ${weather.weatherDesc[0].value}</p>
                    <p>💧 Humidity: ${weather.humidity}%</p>
                    <p>💨 Wind: ${weather.windspeedKmph} km/h</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerHTML = "❌ Something went wrong!";
        });
});