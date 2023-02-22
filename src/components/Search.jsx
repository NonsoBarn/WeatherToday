import { UilSearch } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";
import axios from "axios";
const Search = ({ setCity, city }) => {
  const [cityInput, setCityInput] = useState("");
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    const getUserLocation = async () => {
      const response = await axios.get(
        "https://api.ipregistry.co/?key=6djfg9168pm5gupe"
      );

      const Location = response.data.location.city;
      setUserLocation(Location);
    };
    getUserLocation();
  }, []);

  const handleSearchClick = () => {
    if (cityInput !== "") setCity(cityInput);
  };

  const handleLocationClick = () => {
    if (userLocation !== "") setCity(userLocation);
    setCityInput(userLocation);
  };

  const onEnterKeyPress = (e) => {
    if (e.which === 13) {
      handleSearchClick();
    }
  };

  return (
    <section className="max-w-full">
      <div className="flex justify-center">
        <div className="mb-3 mt-4 w-80 flex items-center justify-center">
          <input
            type="search"
            className="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-200 rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none
      "
            value={cityInput}
            id="Search"
            placeholder="Search City..."
            onChange={(e) => setCityInput(e.currentTarget.value)}
            onKeyDown={onEnterKeyPress}
          />
          <button>
            <UilSearch
              size={15}
              className="cursor-pointer w-8 transition ease-out hover:scale-125"
              onClick={handleSearchClick}
            />
          </button>
          <button>
            <UilMapMarker
              size={15}
              className="cursor-pointer w-8 transition ease-out hover:scale-125"
              onClick={handleLocationClick}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
