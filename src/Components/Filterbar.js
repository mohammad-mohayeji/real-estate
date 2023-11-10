import React, { useContext, useState } from "react";

import { MagnifyingGlassIcon, FunnelIcon,} from "../../node_modules/@heroicons/react/24/solid";

// import our context
import { GlobalContext } from "../GlobalContext";

export default function Filterbar() {
  const {filter, setFilter, updateHandler, searchHandler, searchInputValue,setSearchInputValue } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden bg-coolgray-800">
      <div>
        <div className="flex items-center justify-between gap-x-5 px-6 py-5 border-b-2 border-coolgray-900">
          <div className="flex items-center">
            <div className="bg-coolgray-900 flex items-center rounded-lg px-4 py-1 max-w-xs flex-1">
              <input value={searchInputValue} type="text" onChange={(e)=> setSearchInputValue(e.target.value)} className="bg-transparent border-none focus:ring-0 text-coolgray-500 placeholder:text-coolgray-500 text-sm w-[90%]" placeholder="Search by keywords"/>
            </div>
            <button onClick={searchHandler} className="p-3 bg-indigo-200 rounded-lg ml-1"><MagnifyingGlassIcon className="h-5 w-5 text-coolgray-800" /></button>
          </div>
          <button onClick={(e) => setIsOpen(!isOpen)} className="flex items-center bg-coolgray-700 py-[10px] px-3 text-white rounded-lg">
            <span className="mr-2">
              <FunnelIcon className="w-5 h-5" />
            </span>
            <span>Filters</span>
          </button>
        </div>
      </div>
      <div className={`${!isOpen ? "h-0 invisible overflow-hidden" : "h-[465px] sm:h-[290px] lg:h-[270px] visible"} transition-all duration-300`}>
        <div className={`${!isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-400 delay-100 flex flex-col lg:flex-row w-full`}>
          <div className="flex justify-between flex-wrap p-5 gap-y-5 border-b-2 lg:border-r-2 lg:border-b-0 border-coolgray-900 lg:w-[50%]">
            <div className="flex flex-col w-[45%] sm:w-[22%] lg:w-[45%]">
              <label className="text-coolgray-500 text-sm mb-1">
                Bedrooms
              </label>
              <select name="bedrooms" onChange={(e)=> {
                if(e.target.value === 'Any') {
                  let {bedrooms, ...remainingObject} = filter;
                  setFilter(remainingObject);
                } else {
                  setFilter({...filter, [e.target.name]: e.target.value})
                }
              }} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={!filter.hasOwnProperty("bedrooms")}>Any</option>
                <option value="1" selected={filter.bedrooms == "1"}>1</option>
                <option value="2" selected={filter.bedrooms == "2"}>2</option>
                <option value="3" selected={filter.bedrooms == "3"}>3</option>
                <option value="4" selected={filter.bedrooms == "4"}>4</option>
                <option value="5" selected={filter.bedrooms == "5"}>5</option>
                <option value="6" selected={filter.bedrooms == "6"}>6</option>
              </select>
            </div>

            <div className="flex flex-col w-[45%] sm:w-[22%] lg:w-[45%]">
              <label className="text-coolgray-500 text-sm mb-1">
                Bathrooms
              </label>
              <select name="bathrooms" onChange={(e)=> {
                if(e.target.value === 'Any') {
                  let {bathrooms, ...remainingObject} = filter;
                  setFilter(remainingObject);
                } else {
                  setFilter({...filter, [e.target.name]: e.target.value})
                }
              }} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={!filter.hasOwnProperty("bathrooms")}>Any</option>
                <option value="1" selected={filter.bathrooms == "1"}>1</option>
                <option value="2" selected={filter.bathrooms == "2"}>2</option>
                <option value="3" selected={filter.bathrooms == "3"}>3</option>
                <option value="4" selected={filter.bathrooms == "4"}>4</option>
                <option value="5" selected={filter.bathrooms == "5"}>5</option>
                <option value="6" selected={filter.bathrooms == "6"}>6</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-[50%] lg:w-full">
              <label className="text-coolgray-500 text-sm mb-1">
                Price Range
              </label>
              <select name="price" onChange={(e)=> (e)=> {
                if(e.target.value === 'Any') {
                  let {price, ...remainingObject} = filter;
                  setFilter(remainingObject);
                } else {
                  setFilter({...filter, [e.target.name]: e.target.value})
                }
              }} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={!filter.hasOwnProperty("price")}>Any</option>
                <option value="10000 - 20000" selected={filter.price == "10000 - 20000"}>10000 - 20000</option>
                <option value="20000 - 30000" selected={filter.price == "20000 - 30000"}>20000 - 30000</option>
                <option value="30000 - 40000" selected={filter.price == "30000 - 40000"}>30000 - 40000</option>
                <option value="40000 - 50000" selected={filter.price == "40000 - 50000"}>40000 - 50000</option>
                <option value="50000 - 60000" selected={filter.price == "50000 - 60000"}>50000 - 60000</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col p-5 border-b-2 lg:border-r-2 lg:border-b-0 border-coolgray-900 lg:w-[50%]">
            <h5 className="text-coolgray-500 text-sm mb-5">Property Type</h5>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <div className="flex items-center grow">
                <input type="radio" name="type" value="Any" checked={!filter.hasOwnProperty("type")} onChange={(e)=> {
                  let {type, ...remainingObject} = filter;
                  setFilter(remainingObject);
                }} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Any
                </label>
              </div>
              <div className="flex items-center grow">
                <input type="radio" name="type" value="House" checked={filter.type === "House"} onChange={(e)=> setFilter({...filter, [e.target.name]: e.target.value})} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  House
                </label>
              </div>
              <div className="flex items-center grow">
                <input type="radio" name="type" value="Apartment" checked={filter.type === "Apartment"} onChange={(e)=> setFilter({...filter, [e.target.name]: e.target.value})} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Apartment
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={`${!isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-400 delay-100 bg-coolgray-900 p-5 w-full`}>
          <button onClick={updateHandler} className="bg-indigo-500 w-full sm:w-auto text-white font-medium p-2 px-4 rounded-lg">
            Update results
          </button>
        </div>
      </div>
    </div>
  );
}
