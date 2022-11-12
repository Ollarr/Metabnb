import heroImages from "../assets/Hero-images.png";
import metaTokenLogo from "../assets/Meta-token-logo.png";
import metaMaskLogo from "../assets/Meta-mask-logo.png";
import openSeaLogo from "../assets/Opensea-logo.png";
import groupImage from "../assets/Group-image.png";

import cardImage1 from "../assets/Card-image-1.png";
import cardImage2 from "../assets/Card-image-2.png";
import cardImage3 from "../assets/Card-image-3.png";
import cardImage4 from "../assets/Card-image-4.png";
import cardImage5 from "../assets/Card-image-5.png";
import cardImage6 from "../assets/Card-image-6.png";
import cardImage7 from "../assets/Card-image-7.png";
import cardImage8 from "../assets/Card-image-8.png";

import { FaStar } from "react-icons/fa";

const Main = () => {
  let images = [
    cardImage1,
    cardImage2,
    cardImage3,
    cardImage4,
    cardImage5,
    cardImage6,
    cardImage7,
    cardImage8,
  ];

  return (
    <div>
      <div className="m-8 md:justify-between md:flex">
        <div className="w-full mb-10 md:mx-20 md:my-24 md:w-1/2">
          <h1 className="text-4xl md:mb-8 md:text-5xl">
            Rent a <b className="text-fuchsia-800">Place </b>away from{" "}
            <b className="text-fuchsia-800">Home </b>in the{" "}
            <b className="text-fuchsia-800">Metaverse</b>
          </h1>
          <p className="my-2 md:text-xl md:mb-4">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form class="flex">
            <input
              type="text"
              name="text"
              className="mt-2 px-3 py-2 w-2/3 bg-white border rounded-l-lg shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-fullsm:text-sm focus:ring-1"
              placeholder="Search for a location"
            />
            <button className="mt-2 px-3 py-2 w-1/3 rounded-r-lg bg-fuchsia-800 text-white hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              Search
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <img src={heroImages} alt="home" />
        </div>
      </div>

      <div className="flex justify-around bg-fuchsia-900 my-4 w-full h-12">
        <img src={metaTokenLogo} alt="logo" className="w-3/12 my-3 md:my-2" />
        <img src={metaMaskLogo} alt="logo" className="w-3/12 my-3 md:my-2" />
        <img src={openSeaLogo} alt="logo" className="w-3/12 my-3  md:my-2" />
      </div>

      <div>
        <div className="m-4 md:mx-20 md:my-24">
          <h1 className="text-2xl text-center md:mb-10 md:text-4xl md:text-center">
            Inspiration for your next adventure
          </h1>
          <div>
            <div className="my-4 grid gap-x-1 gap-y-1 grid-cols-2 md:grid-cols-4">
              {images.map((image) => (
                <div className="border rounded-xl p-3 m-2 text-[10px] md:m-4 md:text-[12px]">
                  <img src={image} alt="locations" />
                  <div className="flex justify-between mt-2">
                    <span>Desert King</span>
                    <b>1MBT per night</b>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>2345km away</span>
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
      </div>

      <div className="bg-fuchsia-800 p-8 md:justify-between md:flex">
        <div className="w-full mb-10 md:mx-20 md:my-24 md:w-1/2">
          <h1 className="text-4xl text-white md:mb-8 md:text-5xl">
            <b>MetaBNB</b> NFTs
          </h1>
          <p className="my-2 text-white md:text-xl md:mb-4">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="mt-2 px-3 py-2 w-1/3 rounded-lg bg-white text-black hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2 p-4 md:mr-12">
          <img src={groupImage} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Main;
