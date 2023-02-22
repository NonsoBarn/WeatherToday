import { UilThunderstormSun } from "@iconscout/react-unicons";

const Default = () => {
  return (
    <div className=" cart-empty flex flex-row   justify-center items-center py-28 ">
      <div className="text-center max-w-lg p-0 opacity-10">
        <UilThunderstormSun
          size={100}
          className="inline-flex items-center  text-gray-600"
        />

        <h3 className="mb-1 text-md font-bold text-2xl tracking-tight text-gray-600">
          Weather Today
        </h3>
      </div>
    </div>
  );
};

export default Default;
