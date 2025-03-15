import React from "react";
import vid from "../assets/Maldives.mp4";
import {RippleButton} from "../components/magicui/ripple-button"
import ResortCategory from "./ResortCategory";
import Topdestination from "./Topdestination";

const Main = () => {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen">
        <div className="">
          <video
            src={vid}
            className="absolute -z-10 w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 -z-5"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center top-72">
          <h1
            className="text-7xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Grechen Fuemen', cursive" }}
          >
            Escape to Paradise
          </h1>
          <p className="mb-6 text-white text-xl">
            Find the perfect resort for your dream vacation. Explore stunning
            beaches, mountain escapes, and luxury retreats.
          </p>
          
          <RippleButton rippleColor="#ADD8E6" duration="1" className=" hover:bg-slate-200 hover:text-black transition font-bold">
            Book Now
          </RippleButton>
        </div>
      </div>
      <ResortCategory />
      <Topdestination />
    </div>
  );
};

export default Main;
