import React, { useContext } from "react";

// import our GlobalContext
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { filter, setFilter, updateHandler } = useContext(GlobalContext);


  return (
    <div className="hidden xl:block xl:col-span-1 xl:row-span-2">
      <div className="fixed top-0 w-[270px] min-h-screen bg-coolgray-800">
        <div className="flex justify-center py-[25px] bg-coolgray-900">
          <Link to='/'><img src="https://s8.uupload.ir/files/logo_9gl4.png" alt=""/></Link>
        </div>
        <div className="bg-coolgray-800 pb-14">
          <div className="flex justify-between flex-wrap p-5 gap-y-5 border-b-2 border-coolgray-900">
            <div className="flex flex-col w-[45%]">
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
                <option selected={!filter.hasOwnProperty("bedrooms")} value="Any">Any</option>
                <option selected={filter.bedrooms === '1'} value="1">1</option>
                <option selected={filter.bedrooms === '2'} value="2">2</option>
                <option selected={filter.bedrooms === '3'} value="3">3</option>
                <option selected={filter.bedrooms === '4'} value="4">4</option>
                <option selected={filter.bedrooms === '5'} value="5">5</option>
                <option selected={filter.bedrooms === '6'} value="6">6</option>
              </select>
            </div>

            <div className="flex flex-col w-[45%]">
              <label htmlFor="bathrooms" className="text-coolgray-500 text-sm mb-1">
                Bathrooms
              </label>
              <select name="bathrooms" id="bathrooms" onChange={(e)=> {
                if(e.target.value === 'Any') {
                  let {bathrooms, ...remainingObject} = filter;
                  setFilter(remainingObject);
                } else {
                  setFilter({...filter, [e.target.name]: e.target.value})
                }
              }} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option selected={!filter.hasOwnProperty("bathrooms")} value="Any">Any</option>
                <option selected={filter.bathrooms === "1"} value="1">1</option>
                <option selected={filter.bathrooms === "2"} value="2">2</option>
                <option selected={filter.bathrooms === "3"} value="3">3</option>
                <option selected={filter.bathrooms === "4"} value="4">4</option>
                <option selected={filter.bathrooms === "5"} value="5">5</option>
                <option selected={filter.bathrooms === "6"} value="6">6</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="priceRange" className="text-coolgray-500 text-sm mb-1">
                Price Range
              </label>
              <select name="price" id="priceRange" onChange={(e)=> {
                if(e.target.value === 'Any') {
                  let {price, ...remainingObject} = filter;
                  setFilter(remainingObject);
                } else {
                  setFilter({...filter, [e.target.name]: e.target.value})
                }
              }} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option selected={!filter.hasOwnProperty('price')} value="Any">Any</option>
                <option selected={filter.price === "10000 - 20000"} value="10000 - 20000">10000 - 20000</option>
                <option selected={filter.price === "20000 - 30000"} value="20000 - 30000">20000 - 30000</option>
                <option selected={filter.price === "30000 - 40000"} value="30000 - 40000">30000 - 40000</option>
                <option selected={filter.price === "40000 - 50000"} value="40000 - 50000">40000 - 50000</option>
                <option selected={filter.price === "50000 - 60000"} value="50000 - 60000">50000 - 60000</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col p-5">
            <h5 className="text-coolgray-500 text-sm mb-5">Property Type</h5>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <input checked={!filter.hasOwnProperty("type")} type="radio" onChange={(e)=> {
                  let {type, ...remainingObject} = filter;
                  setFilter(remainingObject);
                }} value='Any' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Any
                </label>
              </div>
              <div className="flex items-center">
                <input checked={filter.type === "House"} type="radio" onChange={(e)=> setFilter({...filter, type: e.target.value})} value='House' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  House
                </label>
              </div>
              <div className="flex items-center">
                <input checked={filter.type === "Apartment"} type="radio" onChange={(e)=> setFilter({...filter, type: e.target.value})} value='Apartment' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Apartment
                </label>
              </div>
            </div>
          </div>

          
        </div>
        <div className="bg-coolgray-900 p-5 w-full absolute bottom-0">
          <button onClick={(e)=> updateHandler(1)} className="w-full bg-indigo-500 text-white font-medium p-2 rounded-lg">
            Update results
          </button>
        </div>
      </div>
    </div>
  );
}
