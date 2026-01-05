import React from "react";
import { Link } from "react-router";
import { IoMdMail } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen py-15 bg-gradient-to-r 115deg from-[#9F7AEA] to-[#FEE2FE]  ">
      <div className="container mx-auto ">
        <div className="flex flex-col w-10/12 lg:flex-row lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full hidden  lg:w-1/2  lg:block">
            <img src="public/frame 3961.png" className="h-fit" />
          </div>
          <div className="w-full lg:w-1/2 py-15 px-10">
            <h2 className="text-4xl font-bold font-sans text-center text-purple-600 mb-4">
              Register
            </h2>
            <p className="mb-4 text-gray-400">
              Create Your Account. It's free just take a minute
            </p>
            <form action="">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter First Name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Last Name"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5 relative ">
                <div className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-400 pointer-events-none">
                  <IoMdMail />
                </div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  className="border border-gray-400 py-1 px-2  w-full"
                />
              </div>
              <div className="mt-5 relative">
                <div className="absolute right-3 top-1/2  -translate-y-1/2 text-gray-400 pointer-events-none">
                  <FaEyeSlash />
                </div>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5 relative">
                <div className="absolute right-3 top-1/2  -translate-y-1/2 text-gray-400 pointer-events-none">
                  <FaEyeSlash />
                </div>
                <input
                  type="confirm password"
                  name="confirm password"
                  id=""
                  placeholder="Enter Your Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5 ">
                <input type="checkbox" className="border border-gray-400" />
                <span className="ml-2">
                  I accept the{" "}
                  <Link to="#" className="text-gray-400">
                    terms
                  </Link>{" "}
                  &
                  <Link to={"#"} className="text-gray-400">
                    conditions
                  </Link>{" "}
                </span>
              </div>
              <div className="btn mt-5">
                <button
                  type="submit"
                  className="bg-purple-600 w-full py-3 text-center text-white hover:bg-blue-400 hover:cursor-pointer hover:text-black"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
