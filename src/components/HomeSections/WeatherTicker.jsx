import { UilArrowUp } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilWind } from "@iconscout/react-unicons";

const Weatherticker = ({
  sunset,
  sunrise,
  tempmin,
  tempmax,
  humidity,
  windspeed,
}) => {
  return (
    <section>
      <div className="flex space-x-5 animate-moving pt- md:pt-">
        <div className="secthree flex font-light items-center text-sm">
          <UilSun size={18} className="mr-1" /> Sunrise:{" "}
          <span className="font-medium ml-1">{sunrise}</span>
        </div>
        <div className="secthree flex font-light items-center text-sm">
          <UilSunset size={18} className="mr-1" /> Sunset:{" "}
          <span className="font-medium ml-1">{sunset}</span>
        </div>
        <div className="secthree flex font-light items-center text-sm">
          <UilArrowUp size={18} className="mr-1" /> High:{" "}
          <span className="font-medium ml-1">{`${parseFloat(
            tempmax
          ).toFixed()}°`}</span>
        </div>
        <div className="secthree flex font-light items-center text-sm">
          <UilArrowDown size={18} className="mr-1" /> Low:{" "}
          <span className="font-medium ml-1">{`${parseFloat(
            tempmin
          ).toFixed()}°`}</span>
        </div>
        <div className="secthree flex font-light items-center text-sm">
          <UilTear size={16} className="ml-0.5 mr-1" /> Humidity:{" "}
          <span className="font-medium ml-1">{humidity}%</span>
        </div>
        <div className="secthree flex font-light items-center text-sm">
          <UilWind size={16} className="ml-0.5 mr-1" /> Wind:{" "}
          <span className="font-medium ml-1">{windspeed}km/h</span>
        </div>
      </div>
    </section>
  );
};

export default Weatherticker;
