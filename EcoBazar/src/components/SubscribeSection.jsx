import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
const SubscribeSection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="header-container">
        <div className="subscribe-section ">
          <div className="subscribe-left ">
            <h1 className="text-2xl font-semibold">Subcribe our Newsletter</h1>
            <p className="text-[#999999] text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="subscribe-right ">
            <div className="search-section max-w-134 bg-white flex border border-[#E5E5E5]  rounded-3xl">
              <input
                type="email"
                placeholder="Your email address"
                className=" py-3 px-6 rounded-l-3xl  text-[#808080] outline-0"
              />
              <button className="bg-[#00B207] text-white px-10 rounded-3xl text-sm cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className="subscribe-right-icons ">
              <div className="subscribe-icon ">
                <TfiFacebook className="" />
              </div>
              <div className="subscribe-icon ">
                <FaTwitter />
              </div>
              <div className="subscribe-icon ">
                <FaPinterestP />
              </div>
              <div className="subscribe-icon ">
                <IoLogoInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
