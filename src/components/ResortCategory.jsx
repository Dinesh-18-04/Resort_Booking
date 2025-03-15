import React from "react";
import { MagicCard } from "../components/magicui/magic-card";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { ShinyButton } from "./magicui/shiny-button";

const ResortCategory = () => {
  return (
    <div className="px-4 py-5">
      <h1
        style={{ fontFamily: "'Exo 2', serif" }}
        className="md:text-5xl text-4xl font-bold my-8 text-center pb-5"
      >
        Discover Our Resorts
      </h1>

      <div className="flex flex-col gap-10">
        {[
          {
            name: "Beach Resort",
            image:
              "https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg",
            quote:
              "The best vacation we've ever had! The resort was perfect, and the service was incredible.",
          },
          {
            name: "Mountain Resort",
            image:
              "https://img.freepik.com/free-photo/beautiful-sunrise-wat-phra-that-pha-son-kaew-temple-khao-kho-phetchabun-thailand_335224-873.jpg",
            quote:
              "A magical escape in the heart of nature! Every sunrise felt like a dream, and the service was flawless.",
          },
          {
            name: "Luxury Resort",
            image:
              "https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?t=st=1741167051~exp=1741170651~hmac=a00779715c63e15d499fa149c3f7700d43ef53797b52a2e01dac032a8800345c&w=2000",
            quote:
              "Step into a world where luxury is a way of life, and every moment is designed just for you.",
          },
        ].map((resort, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_0px_10px_rgba(0,0,0,0.2)] w-full rounded-2xl p-5"
          >
            <MagicCard>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <img
                    src={resort.image}
                    className="rounded-2xl w-60 md:w-72 object-cover"
                    alt={resort.name}
                  />
                </div>

                <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center gap-4">
                  <h2 className="text-3xl font-semibold">{resort.name}</h2>
                  <p className="italic text-lg leading-relaxed">
                    {resort.quote}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <ShimmerButton className="text-lg md:text-xl font-semibold">
                    Explore ➔
                  </ShimmerButton>
                </div>
              </div>
            </MagicCard>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ResortCategory;
