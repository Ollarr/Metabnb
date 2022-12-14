import { useState } from "react";
import logo from "../assets/Metabnb-logo.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white-400">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-flex items-center">
            <img src={logo} alt="logo" className="my-4 w-56" />
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="text-xl font-medium font-bold tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="places"
                aria-label="Place to stay"
                title="Place to stay"
                className="text-xl font-medium font-bold tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Place to stay
              </Link>
            </li>
            <li>
              <a
                href="/"
                aria-label="NFTs"
                title="NFTs"
                className="text-xl font-medium font-bold tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                NFTs
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Community"
                title="Community"
                className="text-xl font-medium font-bold tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Community
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <button
                className="text-xl font-bold bg-fuchsia-900 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"
                aria-label="Connect Wallet"
                title="Connect Wallet"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Connect Wallet
              </button>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a href="/" className="inline-flex items-center">
                        <img src={logo} alt="logo" className="my-4 w-36" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <Link
                          to="places"
                          aria-label="Place to stay"
                          title="Place to stay"
                          className="font-medium font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Place to stay
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="NFTs"
                          title="NFTs"
                          className="font-medium font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          NFTs
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Community"
                          title="Community"
                          className="font-medium font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Community
                        </a>
                      </li>
                      <li>
                        <button
                          className=" font-medium font-bold inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-fuchsia-900  focus:shadow-outline focus:outline-none"
                          aria-label="Connect Wallet"
                          title="Connect Wallet"
                          onClick={() => {
                            setOpenModal(true);
                          }}
                        >
                          Connect Wallet
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Navbar;
