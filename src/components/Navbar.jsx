import { UilClouds } from "@iconscout/react-unicons";
const Navbar = () => {
  return (
    <section>
      <nav className="bg-transparent border-b-2 border-gray-200 px-2 sm:px-4 py-3  ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-lg font-semibold whitespace-nowrap text-black mr-1">
              <UilClouds size={28} className="ml-1" />
            </span>

            <span className="self-center text-md font-semibold whitespace-nowrap text-black mt-0.5">
              WeatherToday
            </span>
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
