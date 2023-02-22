import { DateTime } from "luxon";

import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Weather from "./components/HomeSections/Weather";
import Weatherforecast from "./components/HomeSections/Weatherforecast";
import Weatherticker from "./components/HomeSections/WeatherTicker";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Error from "./components/Error";
import Default from "./components/Default";

function App() {
  const API_KEY = "f94335ea06decd3b61b083a68fafcfbf";
  const [error, setError] = useState(true);
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [dailyForecast, setDailyForecast] = useState("");
  const [hourlyForecast, setHourlyForecast] = useState("");
  const [dt, setDt] = useState("");

  const [timezone, setTimezone] = useState("");
  const [feelslike, setFeelslike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temp, setTemp] = useState("");
  const [details, setDetails] = useState("");
  const [icon, setIcon] = useState("");
  const [windspeed, setWindspeed] = useState("");

  ///////

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [tempmin, setTempmin] = useState("");
  const [tempmax, setTempmax] = useState("");

  ///////

  const [units, setUnits] = useState("metric");

  const formatToLocalTime = (secs, zone, format = "") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  useEffect(() => {
    const getlatlon = async () => {
      const response = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => {
          const getLat = response.data.coord.lat;
          const getLon = response.data.coord.lon;
          const getName = response.data.name;
          const getCountry = response.data.sys.country;

          setCountry(getCountry);
          setName(getName);
          setLat(getLat);
          setLon(getLon);

          setError(false);
        })
        .catch((error) => {
          setError(true);
        });
    };
    getlatlon();
  }, [city]);

  console.log(error);

  useEffect(() => {
    const getTempMinMax = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
      );

      const getTempmin = response.data.main.temp_min;
      const getTempmax = response.data.main.temp_max;

      setTempmax(getTempmax);
      setTempmin(getTempmin);
    };
    getTempMinMax();
  }, [lat, lon, units, city]);

  useEffect(() => {
    const getForcastData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
      );

      const getWeatherData = response.data;

      const getCurrentWeather = getWeatherData.current;

      const getDt = getCurrentWeather.dt;

      const getFeelsLike = getCurrentWeather.feels_like;
      const getHumidity = getCurrentWeather.humidity;
      const getSunrise = getCurrentWeather.sunrise;
      const getSunset = getCurrentWeather.sunset;
      const getTemp = getCurrentWeather.temp;
      // WEATHER
      const getDetails = getCurrentWeather.weather[0].main;
      const getIcon = getCurrentWeather.weather[0].icon;

      const getWindspeed = getCurrentWeather.wind_speed;
      let getDaily = getWeatherData.daily;
      let getHourly = getWeatherData.hourly;
      let getTimezone = getWeatherData.timezone;

      setWindspeed(getWindspeed);
      setIcon(getIcon);
      setDetails(getDetails);
      setTemp(getTemp);
      setSunset(getSunset);
      setSunrise(getSunrise);
      setHumidity(getHumidity);
      setFeelslike(getFeelsLike);
      setTimezone(getTimezone);

      setDt(formatToLocalTime(getDt, timezone, "ccc, LLLL dd "));

      setSunset(formatToLocalTime(getSunset, timezone, "hh:mm"));
      setSunrise(formatToLocalTime(getSunrise, timezone, "hh:mm "));

      setDailyForecast(
        (getDaily = getDaily.slice(1, 4).map((d) => {
          return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
          };
        }))
      );

      setHourlyForecast(
        (getHourly = getHourly.slice(1, 4).map((d) => {
          return {
            title: formatToLocalTime(d.dt, timezone, "t"),
            temp: d.temp,
            icon: d.weather[0].icon,
          };
        }))
      );
    };

    getForcastData();
  }, [lat, lon, units, timezone]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="App bg-white shadow-2xl   max-w-sm max-h-fit  px-5">
        <Navbar />
        <Search city={city} setCity={setCity} setLat={setLat} setLon={setLon} />
        {city === "" ? (
          <Default />
        ) : (
          <>
            {error === false ? (
              <div className="max-w-full rounded overflow-hidden p-2 ">
                <Weather
                  country={country}
                  details={details}
                  name={name}
                  temp={temp}
                  feelslike={feelslike}
                  dt={dt}
                  icon={icon}
                  units={units}
                  setUnits={setUnits}
                />
                <Weatherticker
                  sunset={sunset}
                  sunrise={sunrise}
                  tempmin={tempmin}
                  tempmax={tempmax}
                  humidity={humidity}
                  windspeed={windspeed}
                />
                <Weatherforecast
                  hourlyForecast={hourlyForecast}
                  dailyForecast={dailyForecast}
                />
              </div>
            ) : (
              <Error />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default App;
