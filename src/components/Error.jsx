import { UilExclamationTriangle } from "@iconscout/react-unicons";
const Error = () => {
  return (
    <div className="cart-empty flex flex-row   justify-center items-center py-28 px-10 ">
      <div className="text-center max-w-lg p-0">
        <UilExclamationTriangle
          size={40}
          className="inline-flex items-center  text-black pb-2"
        />

        <h3 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Something's Wrong..
        </h3>

        <p className="text-xs px-5 mb-3  text-gray-500 leading-5 tracking-tight ">
          Sorry, we couldn't find weather info for the location you were looking
          for. Please check your data connection, or you can try to search again
          at a later time.
        </p>
      </div>
    </div>
  );
};

export default Error;
