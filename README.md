# Weather App 🌦️

A simple weather application that fetches and displays real-time weather data for a user-specified location. Built using **Python**, **Flask**, **HTML**, **CSS**, and **JavaScript**, it leverages the [WeatherAPI](https://www.weatherapi.com/) for accurate weather information.

---

## Features ✨
- Search for the current weather of any city.
- Displays:
  - Temperature: Displays the current temperature in degrees.
  - Location: Shows the name of the city being viewed.
  - Last Updated: Indicates the last update time and date for the weather data.
  - Weather Icon: Displays a graphical representation of the current weather condition (e.g., sunny, cloudy).
  - Weather Condition: Describes the current weather condition (e.g., "Clear," "Rainy").
- Responsive and user-friendly interface.

---

## Technologies Used 🛠️
- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **API**: [WeatherAPI](https://www.weatherapi.com/)

---

## Getting Started 🚀

Follow these steps to set up and run the project locally:

### Prerequisites
1. Python installed on your system.
2. An API key from [WeatherAPI](https://www.weatherapi.com/).
3. Basic knowledge of Flask and JavaScript.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Replace the placeholder `YOUR_API_KEY` in the Python code with your WeatherAPI key.

---

## Usage 🖥️

1. Run the Flask server:
   ```bash
   python app.py
   ```

2. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000/
   ```

3. Enter a city name in the search box to view the current weather.

---

## Project Structure 📂

```
weather-app/
├── static/
│   ├── css/
│   │   └── styles.css        # Styling for the application
│   ├── js/
│   │   └── script.js         # JavaScript for interactivity
├── templates/
│   └── index.html            # HTML structure of the app
├── main.py                    # Flask application
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your fork.
4. Open a pull request.

---

## License 📜

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Acknowledgments 🙌

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data.
- Flask and its awesome community.

---
