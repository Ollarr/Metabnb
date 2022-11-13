import cardImage1 from "../assets/Card-image-1.png";
import cardImage2 from "../assets/Card-image-2.png";
import cardImage3 from "../assets/Card-image-3.png";
import cardImage4 from "../assets/Card-image-4.png";
import cardImage5 from "../assets/Card-image-5.png";
import cardImage6 from "../assets/Card-image-6.png";
import cardImage7 from "../assets/Card-image-7.png";
import cardImage8 from "../assets/Card-image-8.png";
import cardImage9 from "../assets/Card-image-9.png";
import cardImage10 from "../assets/Card-image-10.png";
import cardImage11 from "../assets/Card-image-11.png";
import cardImage12 from "../assets/Card-image-12.png";
import cardImage13 from "../assets/Card-image-13.png";
import cardImage14 from "../assets/Card-image-14.png";
import cardImage15 from "../assets/Card-image-15.png";
import cardImage16 from "../assets/Card-image-16.png";

import { FaStar } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PlaceToStay() {
  const places = [
    cardImage5,
    cardImage6,
    cardImage7,
    cardImage8,
    cardImage1,
    cardImage2,
    cardImage3,
    cardImage4,
    cardImage9,
    cardImage10,
    cardImage11,
    cardImage12,
    cardImage13,
    cardImage14,
    cardImage15,
    cardImage16,
  ];

  const filter = [
    "Restaurant",
    "cottage",
    "castle",
    "fantastic city",
    "beach",
    "carbins",
    "off-grids",
    "farm",
  ];
  return (
    <div>
      <div>
        <Navbar />
        <div className="m-4 md:mx-20 md:my-10">
          <div className="filter-container flex jusify-between gap-x-8">
            {/* <div className="grid grid-cols-8 grid-flow-rows gap-2 mr-8 w-auto md:w-[80%]"> */}
            <div className="flex flex-wrap justify-between gap-x-10 w-auto m-x-auto">
              {filter.map((filter) => (
                <h4 className=" filter-heading lg:text-xl text-center ">
                  {filter}
                </h4>
              ))}
            </div>
            <div className="flex px-2 py-1 justify-center items-center space-x-4 border border-black rounded-md ">
              <button className="lg:inline w-full md:block">Location</button>
              <span className=" ">
                <VscSettings />
              </span>
            </div>
          </div>

          <div>
            <div className="card my-4 grid gap-x-1 gap-y-1 grid-cols-2 md:grid-cols-4">
              {places.map((place) => (
                <div className="border rounded-xl p-3 m-2 text-[10px] md:m-4 md:text-[12px]">
                  <img
                    className="card-image w-full m-auto"
                    src={place}
                    alt="place"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs">Desert King</span>
                    <b>1MBT per night</b>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs">2345km away</span>
                    <b>available for 2weeks stay</b>
                  </div>
                  <div className="flex my-2 text-fuchsia-800">
                    <FaStar className="mr-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PlaceToStay;
