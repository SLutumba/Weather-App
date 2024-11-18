from flask import Flask, request, render_template
import requests
from werkzeug.utils import redirect

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')


@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get('city')
    api_url = 'https://api.weatherapi.com/v1/current.json'
    params = {'key': 'f35f40fa0f884367a4300119241811', 'q': city}
    response = requests.get(api_url, params=params)
    if response.status_code == 200:
        weather_data = response.json()
        weather_details = {
            'clouds': weather_data["current"]["cloud"],
            'condition': weather_data["current"]["condition"]["text"],
            'icon_url': weather_data["current"]["condition"]["icon"],
            'temperature': weather_data["current"]["temp_c"],
            'humidity': weather_data["current"]["humidity"],
            'last_updated': weather_data["current"]["last_updated"],
            'wind_speed': weather_data["current"]["wind_kph"],
            'rain': weather_data["current"]["precip_mm"],
            'city': weather_data["location"]["name"]
        }
        return weather_details
    else:
        return {"error":"failed to fetch weather data"}, response.status_code



if __name__ == "__main__":
    app.run(debug=True)
