import React from "react";
import { ImSearch } from "react-icons/im";

const Resorts = () => {
  return (
    <div className="pt-16">
      <h1 className="text-xl font-semibold text-center my-5">
        Escape the ordinary, embrace the extraordinary
      </h1>

      {/* Search Bar Container */}
      <div className="border-2 rounded-full p-1 px-5 relative border-black mx-32 my-5 flex items-center">
        <input
          type="text"
          placeholder="Where do you want to escape?"
          className="w-full text-xl py-2 outline-none"
        />

        {/* Search Icon Button */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-all">
            <ImSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resorts;
