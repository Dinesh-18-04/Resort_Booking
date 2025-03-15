import React, { useState } from "react";
import { FlipText } from "./magicui/flip-text";

const Gallery = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="pt-20 px-4 py-4">
      <h1
        style={{ fontFamily: "'Tektur', serif" }}
        className="text-5xl font-semibold mb-8 text-center pb-5"
      >
        Gallery
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            img: "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg",
            name: "Navagio Beach",
            place: "Maldives",
          },
          {
            img: "https://img.freepik.com/free-photo/young-woman-taking-photo-with-her-phone-beautiful-mountain-view_1258-84894.jpg",
            name: "Cloud Haven Retreat",
            place: "Colorado",
          },
          {
            img: "https://img.freepik.com/free-photo/small-private-house-forest-tuddal-gaustatoppen-norway_181624-20194.jpg",
            name: "Evergreen Escape Lodge",
            place: "Brazil",
          },
          {
            img: "https://img.freepik.com/free-photo/rustic-log-cabin-nestled-tranquil-forest-generated-by-ai_188544-32705.jpg",
            name: "Mystic Woods Retreat",
            place: "Costa Rica",
          },
          {
            img: "https://img.freepik.com/free-photo/view-beautiful-snowy-mountains-forests_155003-5860.jpg",
            name: "Ice Peak Lodge",
            place: "Norway",
          },
          {
            img: "https://img.freepik.com/free-photo/long-shot-facade-cabin-alpe-d-huez-ski-resort-french-alps-sunrise_181624-27236.jpg",
            name: "Aurora Borealis Lodge",
            place: "Finland",
          },
          {
            img: "https://img.freepik.com/free-photo/big-house-covered-with-white-snow-winter_181624-36511.jpg",
            name: "Frost Haven Chalet",
            place: "Switzerland",
          },
          {
            img: "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694118.jpg",
            name: "Infinity Blue Resort",
            place: "Maldives",
          },
          {
            img: "https://img.freepik.com/free-photo/couple-dancing-by-pool-vacation_23-2149369707.jpg",
            name: "Ocean Breeze Haven",
            place: "Maui, Hawaiii",
          },
          {
            img: "https://img.freepik.com/free-photo/climate-landscape-paradise-hotel-sunset_1203-5734.jpg",
            name: "Sunset Sands Resort",
            place: "Indonesia",
          },
          {
            img: "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?t=st=1742021140~exp=1742024740~hmac=36cfbc70dbc4fe972498f97f0a45a9a075fb25680b73af2e9b5b04f852027eb7&w=2000",
            name: "Azure Horizon Resort",
            place: "Maldives",
          },
          {
            img: "https://img.freepik.com/free-photo/wooden-arbors-trees-mountains_140725-3026.jpg?t=st=1742021202~exp=1742024802~hmac=15382e671d7a8b4187ded70ed7c5c6e71ee40cd16b7e6ff8cf3620c5adb844b9&w=1800",
            name: "Golden Palm Retreat",
            place: "Thailand",
          },
          {
            img: "https://img.freepik.com/free-photo/winter-vacation-holiday-wooden-house-mountains-covered-with-snow-blue-sky-skis-front-house_639032-857.jpg?t=st=1742029169~exp=1742032769~hmac=40929482c21332f54a8728d6ea40935c359599f0d5ae379d36d6b17160865a11&w=2000",
            name: "Alpine Peaks Lodge",
            place: "Switzerland",
          },
          {
            img: "https://img.freepik.com/free-photo/background-rarotonga-beautiful-day-summer_1203-4663.jpg?t=st=1742029905~exp=1742033505~hmac=d460d44ab915e90a413cc7284bd0381a8560f1d3732045002b848be87b15a3b3&w=2000",
            name: "Coral Breeze Resort",
            place: "Bali, Indonesia",
          },
          {
            img: "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694107.jpg?t=st=1742029945~exp=1742033545~hmac=26c37d2ceb0dc6d8aa33701461da641dcdf0eb4753673ea8a3a527d9d10083a4&w=2000",
            name: "Sunset Cove Villas",
            place: "Seychelles",
          },
          {
            img: "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302630.jpg?t=st=1742030031~exp=1742033631~hmac=1f5762e3f4bb133d4d044c4a9d002b14f5dd4867e20854db8f6e0a4aeb5ebf01&w=2000",
            name: "Pearl Lagoon Retreat",
            place: "Fiji",
          },
          {
            img: "https://img.freepik.com/free-photo/sand-coconut-sunrise-hotel-swimming_1253-649.jpg?t=st=1742030080~exp=1742033680~hmac=de72800ebb1417a12410b8a2aa396070ffbae68d7008fa655f79f483dd3447f0&w=2000",
            name: "Ocean Bliss Resort",
            place: "Phuket, Thailand",
          },
          {
            img: "https://img.freepik.com/free-photo/giant-pool_1203-208.jpg?t=st=1742030118~exp=1742033718~hmac=69192a97cbe05006118571792fc8c0511076ae2cb7550e69da327ed1db9065ef&w=2000",
            name: "Turquoise Bay Resort",
            place: "Bahamas",
          },
        ].map((gal, index) => (
          <div
            key={index}
            className="relative group cursor-pointer shadow-[0_0px_10px_rgba(0,0,0,0.2)] rounded-lg"
            onMouseEnter={() => setFlippedIndex(index)}
          >
            <img
              src={gal.img}
              alt={gal.name}
              className="object-cover rounded-lg max-w-[500px] max-h-[250px] w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col">
                {flippedIndex === index && (
                  <FlipText className="text-white text-xl font-bold tracking-tighter">
                    {gal.name}
                  </FlipText>
                )}
                {flippedIndex === index && (
                  <FlipText className="text-center text-white font-semibold ">
                    {gal.place}
                  </FlipText>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
