import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { MagnifyingGlassIcon } from "../../node_modules/@heroicons/react/24/solid";
import Filterbar from "./Filterbar";

export default function Navbar() {
  const btn = useRef();
  const clickHandler = (e) => {
    btn.current.classList.toggle("is-active");
    setIsOpen(!isOpen)
  };

  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false)

  let dropDownDisplay = !dropDown ? 'hidden' : '';

  return (
    <nav className="bg-coolgray-900 xl:bg-white col-span-2 xl:col-span-1 xl:row-span-1">
      <div className="xl:container xl:mx-auto 2xl:max-w-screen-xl">
        <div className="flex justify-between items-center p-5">
          <div>
            <div className="hidden bg-coolgray-300 xl:flex items-center rounded-lg px-4">
              <span>
                <MagnifyingGlassIcon className="h-5 w-5 text-coolgray-600" />
              </span>
              <input type="text" className="bg-transparent border-none focus:ring-0 placeholder:text-coolgray-600 text-sm" placeholder="Search by keywords"/>
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
                  <div className={`${dropDownDisplay} absolute right-0`}>
                    <ul className="bg-white text-coolgray-800 shadow-2xl rounded-lg min-w-[180px] overflow-hidden text-sm translate-y-2.5">
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
        <div className={`${!isOpen ? 'h-0 hidden invisible' : ''} max-w-[100%] h-auto block visible transition duration-300 sm:hidden`}>
          <div className="border-b border-coolgray-800">
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
          <div>
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
