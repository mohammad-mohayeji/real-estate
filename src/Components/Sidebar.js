import React, { useContext, useEffect, useRef } from "react";

// import our GlobalContext
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { setBedroomsCount, bedroomsCount, setBathroomsCount, bathroomsCount, setPriceRange, priceRange, setPropertyType, propertyType, setAmenities, amenities, updateHandler } = useContext(GlobalContext);
  const amenitiesChangeHandler = (e)=> {
    if(e.target.checked) {
      setAmenities([...amenities, e.target.value])
    } else {
      setAmenities(amenities.filter((item)=> item !== e.target.value))
    }
  }

  return (
    <div className="hidden xl:block xl:col-span-1 xl:row-span-2">
      <div className="fixed top-0 w-[270px] h-full overflow-y-scroll">
        <div className="bg-coolgray-900 flex justify-center py-[25px]">
          <Link to='/'><img src="https://s8.uupload.ir/files/logo_9gl4.png" alt=""/></Link>
        </div>
        <div className="bg-coolgray-800 pb-14">
          <div className="flex justify-between flex-wrap p-5 gap-y-5 border-b-2 border-coolgray-900">
            <div className="flex flex-col w-[45%]">
              <label className="text-coolgray-500 text-sm mb-1">
                Bedrooms
              </label>
              <select name="bedrooms" onChange={(e)=> setBedroomsCount(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option selected={bedroomsCount.includes('Any')} value="Any">Any</option>
                <option selected={bedroomsCount.includes('1')} value="1">1</option>
                <option selected={bedroomsCount.includes('2')} value="2">2</option>
                <option selected={bedroomsCount.includes('3')} value="3">3</option>
                <option selected={bedroomsCount.includes('4')} value="4">4</option>
                <option selected={bedroomsCount.includes('5')} value="5">5</option>
                <option selected={bedroomsCount.includes('6')} value="6">6</option>
              </select>
            </div>
            <div className="flex flex-col w-[45%]">
              <label htmlFor="bathrooms" className="text-coolgray-500 text-sm mb-1">
                Bathrooms
              </label>
              <select name="bathrooms" id="bathrooms" onChange={(e)=> setBathroomsCount(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option selected={bathroomsCount.includes('Any')} value="Any">Any</option>
                <option selected={bathroomsCount.includes('1')} value="1">1</option>
                <option selected={bathroomsCount.includes('2')} value="2">2</option>
                <option selected={bathroomsCount.includes('3')} value="3">3</option>
                <option selected={bathroomsCount.includes('4')} value="4">4</option>
                <option selected={bathroomsCount.includes('5')} value="5">5</option>
                <option selected={bathroomsCount.includes('6')} value="6">6</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="priceRange" className="text-coolgray-500 text-sm mb-1">
                Price Range
              </label>
              <select name="priceRange" id="priceRange" onChange={(e)=> setPriceRange(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option selected={priceRange.includes('Any')} value="Any">Any</option>
                <option selected={priceRange.includes('10000 - 20000')} value="10000 - 20000">10000 - 20000</option>
                <option selected={priceRange.includes('20000 - 30000')} value="20000 - 30000">20000 - 30000</option>
                <option selected={priceRange.includes('30000 - 40000')} value="30000 - 40000">30000 - 40000</option>
                <option selected={priceRange.includes('40000 - 50000')} value="40000 - 50000">40000 - 50000</option>
                <option selected={priceRange.includes('50000 - 60000')} value="50000 - 60000">50000 - 60000</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col p-5 border-b-2 border-coolgray-900">
            <h5 className="text-coolgray-500 text-sm mb-5">Property Type</h5>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <input checked={propertyType.includes('Any')} type="radio" onChange={(e)=> setPropertyType(e.target.value)} value='Any' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Any
                </label>
              </div>
              <div className="flex items-center">
                <input checked={propertyType.includes('House')} type="radio" onChange={(e)=> setPropertyType(e.target.value)} value='House' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  House
                </label>
              </div>
              <div className="flex items-center">
                <input checked={propertyType.includes('Apartment')} type="radio" onChange={(e)=> setPropertyType(e.target.value)} value='Apartment' name="propertyType" className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Apartment
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <h5 className="text-coolgray-500 text-sm mb-5">Amenities</h5>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Balcony')} name="amenities" value='Balcony' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Balcony
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Pool')} name="amenities" value='Pool' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Pool
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Beach')} name="amenities" value='Beach' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Beach
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Backyard')} name="amenities" value='Backyard' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Backyard
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Central Air')} name="amenities" value='Central Air' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Central Air
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={amenities.includes('Parking')} name="amenities" value='Parking' onChange={(e)=> amenitiesChangeHandler(e)} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Parking
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-coolgray-900 p-5">
          <button onClick={updateHandler} className="w-full bg-indigo-500 text-white font-medium p-2 rounded-lg">
            Update results
          </button>
        </div>
      </div>
    </div>
  );
}
