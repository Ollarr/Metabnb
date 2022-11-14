// import { ModalContextUse } from "../context/ModalContext";
// import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import MetaMaskLogo from "../assets/Metamask-logo-image.png";
import WalletConnectLogo from "../assets/Wallet-connect-logo.png";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative my-6 mx-auto w-full">
        <div className="w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
          <div className="border-b border-[#CFD8DC]">
            <div className="p-4 flex justify-between items-center">
              <p className="font-bold text-[1.3rem]">Connect Wallet</p>
              <span onClick={onClose} className="cursor-pointer">
                <AiOutlineClose />
              </span>
            </div>
          </div>
          <div className="p-4">
            <p>Choose your preferred wallet:</p>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between border border-[#CFD8DC] p-4 rounded-[10px] cursor-pointer mb-4">
              <div className="flex items-center">
                <img
                  src={MetaMaskLogo}
                  alt="MetaMaskLogo"
                  className="h-[40px]"
                />
                <p className="ml-3">Metamask</p>
              </div>
              <MdArrowForwardIos />
            </div>
            <div className="flex items-center justify-between border border-[#CFD8DC] p-4 rounded-[10px] cursor-pointer ">
              <div className="flex items-center">
                <img
                  src={WalletConnectLogo}
                  alt="WalletConnectLogo"
                  className="h-[40px]"
                />
                <p className="ml-3">Wallect connect</p>
              </div>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
