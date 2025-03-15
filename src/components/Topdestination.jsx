import React from "react";
import "../style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Topdestination = () => {
  return (
    <div className="px-4 py-5">
      <div className="">
        <h1
          style={{ fontFamily: "'Exo 2', serif" }}
          className="text-5xl font-bold my-8 text-center pb-5"
        >
          Top Destination
        </h1>
      </div>
      <div className="">
        <div className="flex gap-5 overflow-x-auto p-2 scrollbar-hide">
            {[
              {
                img: "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682903.jpg?t=st=1741686531~exp=1741690131~hmac=6dd1db088640b73ebda129dd04ccea81614110751e818f662fb5d37f618a539a&w=2000",
                name: "Maldives – The Tropical Paradise",
                quote:
                  '"Where crystal-clear waters meet luxurious overwater villas."',
                per: "Honeymooners, Beach Lovers",
                spot: "Baros Maldives, Soneva Jani, Vakkaru Maldives",
                time: "November – April",
              },
              {
                img: "https://img.freepik.com/free-photo/gondola-cable-car-mountains_1204-282.jpg?t=st=1741690309~exp=1741693909~hmac=a5ea26ad84d32bc45feb316885bfa96af6d9798bd3fb9f763650c9fd0a1ae03a&w=2000",
                name: "Switzerland – The Alpine Wonderland",
                quote:
                  '"Escape to breathtaking mountain peaks and charming villages."',
                per: "Adventure Seekers, Nature Lovers",
                spot: "Zermatt, Interlaken, Lucerne",
                time: "December – February for skiing; June – August for sightseeing",
              },
              {
                img: "https://img.freepik.com/free-photo/climate-landscape-paradise-hotel-sunset_1203-5734.jpg?t=st=1741759870~exp=1741763470~hmac=c79e16ae9a5375eae1755717219c36cf1be6b3f65afd98edf9418e511249c243&w=2000",
                name: "Bali – The Island of Gods",
                quote:
                  '"Experience tropical beaches, lush greenery, and vibrant culture."',
                per: "Backpackers, Families, Surfers",
                spot: "Uluwatu, Seminyak, Ubud",
                time: "April – October",
              },
              {
                img: "https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18726.jpg?t=st=1741759741~exp=1741763341~hmac=ee3597cea921145ff830474fe2e2fecec35963fd4753c71a34f06aade5aad68f&w=2000",
                name: "Dubai – The City of Luxury",
                quote:
                  '"Where futuristic skyscrapers meet endless desert adventures."',
                per: "Luxury Travelers, Shoppers",
                spot: "Burj Khalifa, Palm Jumeirah, Dubai Marina",
                time: "November – March",
              },
              {
                img: "https://img.freepik.com/free-photo/cottage-si-chang-island-thailand_335224-711.jpg?t=st=1741759800~exp=1741763400~hmac=5e1d71d7d1ee5d4b5a4aeb773b28f6ae40a7f3cd212e55292638d9ce73a696bd&w=2000",
                name: "Rishikesh – The Spiritual Escape",
                quote:
                  '"Nestled in the Himalayas, known for yoga retreats and peaceful vibes."',
                per: "Wellness Seekers, Spiritual Explorers",
                spot: "Laxman Jhula, Neelkanth Mahadev Temple",
                time: "September – April",
              },
            ].map((destini, index) => (
              <div
                key={index}
                className="hover:cursor-pointer hover:opacity-80 transition-all shadow-[0_0px_10px_rgba(0,0,0,0.2)] min-w-[350px] md:min-w-[500px] text-justify flex flex-col gap-3 p-5 rounded-lg"
              >
                <img
                  className=" object-cover rounded-lg max-w-[500px] max-h-[250px]"
                  src={destini.img}
                  alt=""
                />
                <h1 className="text-2xl font-bold text-center ">
                  {destini.name}
                </h1>
                <p className="text-[18px] text-center font-semibold">
                  {destini.quote}
                </p>
                <h1 className="text-xl font-semibold ">
                  <span className="text-xl font-bold">🧑‍🤝‍🧑Perfect For: </span>
                  {destini.per}
                </h1>
                <h1 className="text-xl font-semibold ">
                  <span className="text-xl font-bold">📍Popular Spots: </span>{" "}
                  {destini.spot}
                </h1>
                <h1 className="text-xl font-semibold ">
                  <span className="text-xl font-bold">
                    🕒Best Time to Visit:{" "}
                  </span>
                  {destini.time}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Topdestination;