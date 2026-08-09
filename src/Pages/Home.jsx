
import axios from "axios";
import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import "./Home.css";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function Home() {

    const [city, setCity] = useState("Kathmandu");

    const [weather, setWeather] = useState(null);

    const [forecast, setForecast] = useState([]);

    const [unit, setUnit] = useState(
        localStorage.getItem("unit") || "metric"
    );

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        fetchWeather(city);
    }, [city, unit]);

    const fetchWeather = async (selectedCity) => {

        try {

            setLoading(true);

            setError("");

            const weatherResponse = await axios.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    params: {
                        q: selectedCity,
                        appid: apiKey,
                        units: unit
                    }
                }
            );

            setWeather(weatherResponse.data);

            const forecastResponse = await axios.get(
                "https://api.openweathermap.org/data/2.5/forecast",
                {
                    params: {
                        q: selectedCity,
                        appid: apiKey,
                        units: unit
                    }
                }
            );

            const dailyForecast = forecastResponse.data.list
                .filter((item) =>
                    item.dt_txt.includes("12:00:00")
                )
                .slice(0, 5)
                .map((item) => ({
                    day: new Date(
                        item.dt_txt
                    ).toLocaleDateString(
                        "en-US",
                        { weekday: "short" }
                    ),

                    temperature: Math.round(
                        item.main.temp
                    )
                }));

            setForecast(dailyForecast);

        } catch (err) {

            console.error(err);

            setError(
                "Unable to fetch weather data. Please try again."
            );

            setWeather(null);

        } finally {

            setLoading(false);

        }
    };

    const handleUnitChange = () => {

        const newUnit =
            unit === "metric"
                ? "imperial"
                : "metric";

        setUnit(newUnit);

        localStorage.setItem(
            "unit",
            newUnit
        );
    };

    return (

        <div className="home-container">

            {/* Header */}

            <section className="home-header">

                <h1>
                    Weather Dashboard
                </h1>

                <p>
                    Check live weather information
                    for cities around the world.
                </p>

            </section>


            {/* Controls */}

            <section className="controls">

                <select
                    value={city}
                    onChange={(e) =>
                        setCity(e.target.value)
                    }
                    aria-label="Select city"
                >

                    <option value="Kathmandu">
                        Kathmandu
                    </option>

                    <option value="London">
                        London
                    </option>

                    <option value="Paris">
                        Paris
                    </option>

                    <option value="Sydney">
                        Sydney
                    </option>

                    <option value="Tokyo">
                        Tokyo
                    </option>

                    <option value="New York">
                        New York
                    </option>

                </select>

                <button
                    onClick={handleUnitChange}
                >
                    Switch to{" "}
                    {unit === "metric"
                        ? "Fahrenheit"
                        : "Celsius"}
                </button>

            </section>


            {/* Loading */}

            {loading && (
                <p className="loading">
                    Loading weather data...
                </p>
            )}


            {/* Error */}

            {error && (
                <p className="error">
                    {error}
                </p>
            )}


            {/* Weather */}

            {weather && !loading && (

                <>

                    <section className="location">

                        <div>

                            <h2>
                                {weather.name}
                            </h2>

                            <p>
                                {weather.sys.country}
                            </p>

                        </div>

                        <img
                            className="weather-icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={
                                weather.weather[0]
                                    .description
                            }
                        />

                    </section>


                    {/* Weather Cards */}

                    <section className="weather-cards">

                        <div className="weather-card">

                            <span>
                                🌡️
                            </span>

                            <h3>
                                Temperature
                            </h3>

                            <p>
                                {Math.round(
                                    weather.main.temp
                                )}
                                {unit === "metric"
                                    ? "°C"
                                    : "°F"}
                            </p>

                        </div>


                        <div className="weather-card">

                            <span>
                                💧
                            </span>

                            <h3>
                                Humidity
                            </h3>

                            <p>
                                {weather.main.humidity}%
                            </p>

                        </div>


                        <div className="weather-card">

                            <span>
                                ☁️
                            </span>

                            <h3>
                                Condition
                            </h3>

                            <p className="condition">
                                {
                                    weather.weather[0]
                                        .description
                                }
                            </p>

                        </div>


                        <div className="weather-card">

                            <span>
                                💨
                            </span>

                            <h3>
                                Wind Speed
                            </h3>

                            <p>
                                {weather.wind.speed}{" "}
                                m/s
                            </p>

                        </div>

                    </section>


                    {/* Extra Information */}

                    <section className="extra-info">

                        <div>

                            <strong>
                                Feels Like
                            </strong>

                            <p>
                                {Math.round(
                                    weather.main.feels_like
                                )}
                                {unit === "metric"
                                    ? "°C"
                                    : "°F"}
                            </p>

                        </div>


                        <div>

                            <strong>
                                Pressure
                            </strong>

                            <p>
                                {weather.main.pressure} hPa
                            </p>

                        </div>


                        <div>

                            <strong>
                                Visibility
                            </strong>

                            <p>
                                {weather.visibility
                                    ? (
                                        weather.visibility /
                                        1000
                                    ).toFixed(1)
                                    : "N/A"}{" "}
                                km
                            </p>

                        </div>

                    </section>


                    {/* Forecast Chart */}

                    {forecast.length > 0 && (

                        <section className="chart-section">

                            <h2>
                                5-Day Temperature Forecast
                            </h2>

                            <p>
                                Expected temperature
                                throughout the next
                                five days.
                            </p>

                            <div className="chart-container">

                                <ResponsiveContainer
                                    width="100%"
                                    height={300}
                                >

                                    <LineChart
                                        data={forecast}
                                    >

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="var(--border)"
                                        />

                                        <XAxis
                                            dataKey="day"
                                            stroke="var(--secondary-text)"
                                        />

                                        <YAxis
                                            stroke="var(--secondary-text)"
                                        />

                                        <Tooltip
                                            contentStyle={{
                                                background:
                                                    "var(--surface)",
                                                border:
                                                    "1px solid var(--border)",
                                                color:
                                                    "var(--text)"
                                            }}
                                        />

                                        <Line
                                            type="monotone"
                                            dataKey="temperature"
                                            stroke="var(--accent)"
                                            strokeWidth={3}
                                            dot={{
                                                r: 5
                                            }}
                                        />

                                    </LineChart>

                                </ResponsiveContainer>

                            </div>

                        </section>

                    )}

                </>

            )}

        </div>
    );
}

export default Home;