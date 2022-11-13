import React from "react";
import logowhite from "../assets/Meta-logo-white.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const communities = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const about_us = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <div className="bg-gray-900 text-white p-2 py-10">
      <div className=" footer mx-6 align-center text-[18px] flex justify-between md:mx-28">
        <div className=" footer-logo-and-icon mb-4">
          <img src={logowhite} alt="logo" className="mb-20 w-36" />
          <div className="footer-icon flex justify-between w-[100px] ">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
          <h5 className="text-xs mt-8">© 2022 Metabnb</h5>
        </div>
        <div className=" mb-4">
          <b>Community</b>
          {communities.map((community) => (
            <div className="footer-text font-light text-[14px] text-left mb-2">
              <span>{community}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <b>Places</b>
          {places.map((place) => (
            <div className="footer-text font-light text-[14px] text-left mb-2 ">
              <span>{place}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <b>About Us</b>
          {about_us.map((aboutInfo) => (
            <div className="footer-text font-light text-[14px] text-left mb-2">
              <span>{aboutInfo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
