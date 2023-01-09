import { UilMapMarker } from "@iconscout/react-unicons";

const Home = () => {
  return (
    <div className="px-7 py-6 md:py-1">
      <div className="location flex text-lg font-semibold space-x-40 md:space-x-56">
        <div className="location flex text-lg font-semibold">
          <UilMapMarker size={18} className="mr-1 mt-1" /> Lagos NG
        </div>
        <div className="">
          {" "}
          <button name="metric" className=" font-light border-r-2 mr-1 px-1">
            °C
          </button>
          {/* <p className=" mx-1">|</p> */}
          <button name="imperial" className=" font-light mr-1">
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
