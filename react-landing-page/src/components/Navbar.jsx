import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-3xl text-green-500 py-3 cursor-pointer">
          REACT.
        </div>

        <nav className="relative">
          <div className="relative text-white text-3xl cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </div>

          <ul className=" ml-auto  gap-6 text-white font-medium absolute right-10 bg-slate-700 top-0 w-[200px] rounded-xl text-center p-4 md:flex">
            <li className="p-3 cursor-pointer hover:text-green-500 transition duration-500 ">
              Home
            </li>
            <li className="p-3 cursor-pointer hover:text-green-500 transition duration-500 ">
              Account
            </li>
            <li className="p-3  cursor-pointer hover:text-green-500 transition duration-500 ">
              Blog
            </li>
            <li className="p-3  cursor-pointer hover:text-green-500 transition duration-500 ">
              Contact
            </li>
          </ul>
        </nav>

        <button className="ml-9 px-6 py-3 min-w-[150px] rounded-md cursor-pointer font-medium bg-slate-50 hover:opacity-80 transition duration-500 ease-linear hidden md:block">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
