function getCity() {
    const button = document.querySelector('button'); 
    button.addEventListener('click', (event) => {    
        event.preventDefault(); 

        const cityInput = document.querySelector('input');
        const city = cityInput.value; 
        const url = `/weather?city=${encodeURIComponent(city)}`; 
        fetch(url) 
            .then(response => response.json()) 
            .then(data => {
                document.getElementById("temp").innerHTML = `${data.temperature}°`;
                document.getElementById("location").innerHTML = `${data.city}`;
                document.getElementById("time-and-date").innerHTML = `${data.last_updated}`;
                document.getElementById("speed").innerHTML = `${data.wind_speed} km/h`;
                document.getElementById("humidity").innerHTML = `${data.humidity} %`;
                document.getElementById("rain-amnt").innerHTML = `${data.rain} mm`;
                document.getElementById("cloudy").innerHTML = `${data.clouds}%`;
                document.getElementById("condition").innerHTML = `${data.condition}`;
                const iconUrl = `${data.icon_url}`; // Add "https:" to the icon URL
                const weatherIcon = document.getElementById("weather-icon"); // Select the img element
                weatherIcon.src = iconUrl; // Set the src attribute to the icon URL
                weatherIcon.alt = data.current.condition.text;    
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors
                alert = "Error fetching weather data";
            });
    });
}

getCity(); // Call the function to initialize the event listener
