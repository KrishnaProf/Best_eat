import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="w-max-[1640px] mx-auto flex justify-between items-center p-4">
      <div className=" flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={toggleNav} size={30} />
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl px-2 flex flex-nowrap">
          Best <span className="font-bold mx-1">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="text-white bg-black rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg: w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className=" bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      {/* Cart Button  */}

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill className="mr-2" /> cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {Nav ? (
        <div className="bg-black/80 fixed w-full h-screen left-0 top-0 z-10"></div>
      ) : (
        ""
      )}

      {/* Sidebar menu  */}

      <div
        className={
          Nav
            ? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0  left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={toggleNav}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
