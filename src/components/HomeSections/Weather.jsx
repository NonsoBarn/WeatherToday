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

import { UilMapMarker } from "@iconscout/react-unicons";

const Weather = ({
  name,
  country,
  details,
  feelslike,
  temp,
  dt,
  time,
  icon,
  units,
  setUnits,
}) => {
  const handleMetricUnitsChange = (e) => {
    const metric = "metric";
    if (units !== metric) setUnits(metric);
  };

  const handleImperialUnitsChange = (e) => {
    const imperial = "imperial";
    if (units !== imperial) setUnits(imperial);
  };

  return (
    <section>
      {/* home */}
      <div className="px-0 py-6 md:py-1">
        <div className="location flex text-lg font-semibold space-x-32">
          <div className="location flex text-md font-semibold">
            <UilMapMarker size={18} className="mr-1 mt-1" />{" "}
            {`${name}
            ${country}`}
          </div>
          <div className="inline-flex">
            {" "}
            <button
              name="metric"
              className={
                units === "metric"
                  ? "font-semibold"
                  : "hover:scale-125 font-thin"
              }
              onClick={handleMetricUnitsChange}
            >
              °C
            </button>
            <p className=" mx-1 font-thin">|</p>
            <button
              name="imperial"
              className={
                units === "imperial"
                  ? "font-semibold"
                  : "hover:scale-125 font-thin"
              }
              onClick={handleImperialUnitsChange}
            >
              °F
            </button>
          </div>
        </div>
      </div>

      {/* weather */}
      <div className="grid items-center grid-cols-2  content-start space-x-10">
        {/* section one */}
        <div className="sectionone">
          <div>
            <p className="date text-md ">{dt}</p>
          </div>
          <div className="weathertemp pt-8">
            <h2 className="text-4xl font-medium">{`${parseFloat(
              temp
            ).toFixed()}°`}</h2>
            <p className="">
              Feels like {`${parseFloat(feelslike).toFixed()}°`}
            </p>
          </div>
        </div>
        {/* section two */}
        <div className="sectiontwo">
          <div className="tempicon pr-4">
            {/* <img src={icon} alt="" className="w-96" /> */}
            {icon === "01d" ? (
              <img src={day01d} alt="" className="w-96" />
            ) : null}
            {icon === "01n" ? (
              <img src={night01n} alt="" className="w-96" />
            ) : null}
            {icon === "02d" ? (
              <img src={cloud02d} alt="" className="w-96" />
            ) : null}
            {icon === "02n" ? (
              <img src={cloud02n} alt="" className="w-96" />
            ) : null}
            {icon === "03d" ? (
              <img src={cloud03dn03n} alt="" className="w-96" />
            ) : null}
            {icon === "03n" ? (
              <img src={cloud03dn03n} alt="" className="w-96" />
            ) : null}
            {icon === "04n" ? (
              <img src={cloud04dn04n} alt="" className="w-96" />
            ) : null}
            {icon === "04d" ? (
              <img src={cloud04dn04n} alt="" className="w-96" />
            ) : null}
            {icon === "09d" ? (
              <img src={cloud09dn09n} alt="" className="w-96" />
            ) : null}
            {icon === "09n" ? (
              <img src={cloud09dn09n} alt="" className="w-96" />
            ) : null}
            {icon === "11d" ? (
              <img src={cloud11dn11n} alt="" className="w-96" />
            ) : null}
            {icon === "11n" ? (
              <img src={cloud11dn11n} alt="" className="w-96" />
            ) : null}
            {icon === "13d" ? (
              <img src={cloud13dn13n} alt="" className="w-96" />
            ) : null}
            {icon === "13n" ? (
              <img src={cloud13dn13n} alt="" className="w-96" />
            ) : null}
            {icon === "10d" ? (
              <img src={cloud10d} alt="" className="w-96" />
            ) : null}
            {icon === "10n" ? (
              <img src={cloud10n} alt="" className="w-96" />
            ) : null}

            <p className=" text-md font-medium mb-6 ml-9">{details}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
