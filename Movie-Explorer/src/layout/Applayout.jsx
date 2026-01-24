import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import { Outlet } from "react-router";

const Applayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Applayout;
