import day01d from "../assets/weathericons/animated/day.svg";
import night01n from "../assets/weathericons/animated/night.svg";
import cloud02d from "../assets/weathericons/animated/cloudy-day-3.svg";
import cloud02n from "../assets/weathericons/animated/cloudy-night-3.svg";
import cloud03dn03n from "../assets/weathericons/animated/cloudy.svg";
import cloud04dn04n from "../assets/weathericons/animated/cloudy.svg";
import cloud09dn09n from "../assets/weathericons/animated/rainy-6.svg";
import cloud10d from "../assets/weathericons/animated/rainy-3.svg";
import cloud10n from "../assets/weathericons/animated/rainy-5.svg";
import cloud11dn11n from "../assets/weathericons/animated/snowy-3.svg";
import cloud13dn13n from "../assets/weathericons/animated/thunder.svg";

import { useState } from "react";
import { UilAngleRight } from "@iconscout/react-unicons";

const Weatherforecast = ({ hourlyForecast, dailyForecast }) => {
  const [activeView, setActiveView] = useState("Daily");

  const handleDailyView = (e) => {
    setActiveView("Daily");
  };

  const handleHourlyView = (e) => {
    setActiveView("Hourly");
  };
  return (
    <section className=" mt-4 md:pt-1">
      <div className="flex flex-row items-center justify-start my-1">
        {" "}
        <button
          name="metric"
          className="text-sm font-semibold  mr-1 flex"
          onClick={handleDailyView}
        >
          Daily{" "}
          <UilAngleRight
            size={18}
            className={
              activeView === "Daily"
                ? "mt-0.5 animate-rotate rotate-90"
                : "mt-0.5 animate-rotatereverse"
            }
          />
        </button>
        <p className=" mx-1">|</p>
        <button
          name="metric"
          className="text-sm font-semibold  mr-1 flex"
          onClick={handleHourlyView}
        >
          Hourly{" "}
          <UilAngleRight
            size={18}
            className={
              activeView === "Hourly"
                ? "mt-0.5 animate-rotate rotate-90"
                : "mt-0.5 animate-rotatereverse"
            }
          />
        </button>
      </div>
      <div>
        <div className="border-t-2 py-2">
          {activeView === "Daily" ? (
            <div className="dailyforecast">
              <div className="grid items-center grid-cols-3  content-start">
                {Array.isArray(dailyForecast)
                  ? dailyForecast.map((item, i) => (
                      <div className="border-r-2  " key={i}>
                        <p className="text-xs ml-2">{item.title}</p>
                        <div className="grid items-center grid-cols-2  content-start">
                          {item.icon === "01d" ? (
                            <img src={day01d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "01n" ? (
                            <img src={night01n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "02d" ? (
                            <img src={cloud02d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "02n" ? (
                            <img src={cloud02n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "03d" ? (
                            <img src={cloud03dn03n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "03n" ? (
                            <img src={cloud03dn03n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "04n" ? (
                            <img src={cloud04dn04n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "04d" ? (
                            <img src={cloud04dn04n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "09d" ? (
                            <img src={cloud09dn09n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "09n" ? (
                            <img src={cloud09dn09n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "11d" ? (
                            <img src={cloud11dn11n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "11n" ? (
                            <img src={cloud11dn11n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "13d" ? (
                            <img src={cloud13dn13n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "13n" ? (
                            <img src={cloud13dn13n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "10d" ? (
                            <img src={cloud10d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "10n" ? (
                            <img src={cloud10n} alt="" className="w-96" />
                          ) : null}

                          <p className="text-xl font-medium">{`${item.temp.toFixed()}°`}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          ) : (
            <div className="hourlyforecast">
              <div className="grid items-center grid-cols-3  content-start">
                {Array.isArray(hourlyForecast)
                  ? hourlyForecast.map((item, i) => (
                      <div className="border-r-2  " key={i}>
                        <p className="text-xs ml-2">{item.title}</p>
                        <div className="grid items-center grid-cols-2  content-start">
                          {item.icon === "01d" ? (
                            <img src={day01d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "01n" ? (
                            <img src={night01n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "02d" ? (
                            <img src={cloud02d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "02n" ? (
                            <img src={cloud02n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "03d" ? (
                            <img src={cloud03dn03n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "03n" ? (
                            <img src={cloud03dn03n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "04n" ? (
                            <img src={cloud04dn04n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "04d" ? (
                            <img src={cloud04dn04n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "09d" ? (
                            <img src={cloud09dn09n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "09n" ? (
                            <img src={cloud09dn09n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "11d" ? (
                            <img src={cloud11dn11n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "11n" ? (
                            <img src={cloud11dn11n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "13d" ? (
                            <img src={cloud13dn13n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "13n" ? (
                            <img src={cloud13dn13n} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "10d" ? (
                            <img src={cloud10d} alt="" className="w-96" />
                          ) : null}
                          {item.icon === "10n" ? (
                            <img src={cloud10n} alt="" className="w-96" />
                          ) : null}

                          <p className="text-xl font-medium">{`${item.temp.toFixed()}°`}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Weatherforecast;
