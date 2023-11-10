import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { MagnifyingGlassIcon } from "../../node_modules/@heroicons/react/24/solid";
import Filterbar from "./Filterbar";
import { GlobalContext } from "../GlobalContext";
import axios from "axios";

export default function Navbar() {
  const {searchHandler, searchInputValue,setSearchInputValue} = useContext(GlobalContext)
  const btn = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  let dropDownDisplay = !dropDown ? 'invisible opacity-0 translate-y-5' : '';
  
  const clickHandler = (e) => {
    btn.current.classList.toggle("is-active");
    setIsOpen(!isOpen)
  };

  return (
    <nav className="bg-coolgray-900 xl:bg-white col-span-2 xl:col-span-1 xl:row-span-1">
      <div className="xl:container xl:mx-auto 2xl:max-w-screen-xl">
        <div className="flex justify-between items-center p-5">
          <div>
            <div className="hidden xl:flex items-center">
              <div className="hidden bg-coolgray-300 xl:flex items-center rounded-lg">
                <input value={searchInputValue} onChange={(e)=> setSearchInputValue(e.target.value)} type="text" className="bg-transparent border-none focus:ring-0 placeholder:text-coolgray-600 text-sm" placeholder="Search by keywords"/>
              </div>
              <button onClick={(e)=> searchHandler(1)} className="bg-indigo-500 text-white ml-1 p-2 rounded-lg"><MagnifyingGlassIcon className="h-5 w-5" /></button>
            </div>
            <div className="xl:hidden">
              <img src="https://s8.uupload.ir/files/logo_9gl4.png" alt="" />
            </div>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-x-8">
              <li>
                <Link className="text-white xl:text-coolgray-900 text-sm font-medium">
                  Trips
                </Link>
              </li>
              <li>
                <Link className="text-white xl:text-coolgray-900 text-sm font-medium">
                  Messages
                </Link>
              </li>
              <li>
                <Link className="text-white xl:text-coolgray-900 text-sm font-medium">
                  Support
                </Link>
              </li>
              <li>
                <div onClick={(e)=> setDropDown(!dropDown)} className="relative cursor-pointer">
                  <img src="https://s8.uupload.ir/files/profile_75hk.jpg" alt="" className="rounded-full w-10 h-10"/>
                  <div className={`${dropDownDisplay} absolute right-0 translate-y-2.5 transition-all duration-300`}>
                    <ul className="bg-white text-coolgray-800 shadow-2xl rounded-lg min-w-[180px] overflow-hidden text-sm">
                      <li className="w-full"><Link className="hover:bg-indigo-500 hover:text-coolgray-100 py-2 px-3 block">Account Setting</Link></li>
                      <li className="w-full"><Link className="hover:bg-indigo-500 hover:text-coolgray-100 py-2 px-3 block">Support</Link></li>
                      <li className="w-full"><Link className="hover:bg-indigo-500 hover:text-coolgray-100 py-2 px-3 block">Sign Out</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <button ref={btn} onClick={clickHandler} className="hamburger hamburger--elastic sm:hidden" type="button" id="nav-toggle">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className={`${!isOpen ? 'h-0 invisible overflow-hidden' : 'h-[365px] visible'} max-w-[100%] transition-all duration-300 sm:hidden`}>
          <div className={`${!isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} border-b border-coolgray-800 transition-all duration-400 delay-100`}>
            <ul className="flex flex-col p-5 gap-y-4">
              <li>
                <Link className="text-white font-medium">
                  List your property
                </Link>
              </li>
              <li>
                <Link className="text-white font-medium">Trips</Link>
              </li>
              <li>
                <Link className="text-white font-medium">Messages</Link>
              </li>
            </ul>
          </div>
          <div className={`${!isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-400 delay-100`}>
            <ul className="flex flex-col p-5 gap-y-4">
              <li className="flex items-center gap-x-4 mb-2">
                <img src="https://s8.uupload.ir/files/profile_75hk.jpg" alt="" className="rounded-full w-12 h-12" />
                <span className="text-coolgray-200">Mohammad</span>
              </li>
              <li><Link className="text-coolgray-400">Account Settings</Link></li>
              <li><Link className="text-coolgray-400">Support</Link></li>
              <li><Link className="text-coolgray-400">Sign out</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Filterbar />
    </nav>
  );
}
