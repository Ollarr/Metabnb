import React from "react";
import logowhite from "../assets/Meta-logo-white.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const about_us = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <div className="bg-gray-900 text-white p-2 py-10">
      <div className="mx-6 align-center text-[14px] flex justify-between md:mx-28">
        <div className="mb-4">
          <img src={logowhite} alt="logo" className="my-4 w-36" />
          <div className="flex justify-between w-[100px]">
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
        </div>
        <div className="mb-4">
          <b>Community</b>
          {community.map((e) => (
            <div className="font-light text-[12px] mb-2">
              <span>{e}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <b>Places</b>
          {places.map((e) => (
            <div className="font-light text-[12px] mb-2">
              <span>{e}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <b>About Us</b>
          {about_us.map((e) => (
            <div className="font-light text-[12px] mb-2">
              <span>{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
