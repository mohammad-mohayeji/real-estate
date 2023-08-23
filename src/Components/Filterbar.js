import React, { useContext, useState } from "react";

import { MagnifyingGlassIcon, FunnelIcon,} from "../../node_modules/@heroicons/react/24/solid";

// import our context
import { GlobalContext } from "../GlobalContext";

export default function Filterbar() {
  const { setBedroomsCount, bedroomsCount, setBathroomsCount, bathroomsCount, setPriceRange, priceRange, setPropertyType, propertyType, setAmenities, amenities, updateHandler } = useContext(GlobalContext);
  const amenitiesChangeHandler = (e)=> {
    if(e.target.checked) {
      setAmenities([...amenities, e.target.value])
    } else {
      setAmenities(amenities.filter((item)=> item !== e.target.value))
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const display = !isOpen ? "hidden" : "block";

  return (
    <div className="xl:hidden bg-coolgray-800">
      <div>
        <div className="flex items-center justify-between gap-x-5 px-6 py-5 border-b-2 border-coolgray-900">
          <div className="bg-coolgray-900 flex items-center rounded-lg px-4 py-1 max-w-xs flex-1">
            <span className="w-[10%]">
              <MagnifyingGlassIcon className="h-5 w-5 text-coolgray-500" />
            </span>
            <input type="text" className="bg-transparent border-none focus:ring-0 text-coolgray-500 placeholder:text-coolgray-500 text-sm w-[90%]" placeholder="Search by keywords"/>
          </div>
          <button onClick={(e) => setIsOpen(!isOpen)} className="flex items-center bg-coolgray-700 py-[10px] px-3 text-white rounded-lg">
            <span className="mr-2">
              <FunnelIcon className="w-5 h-5" />
            </span>
            <span>Filters</span>
          </button>
        </div>
      </div>
      <div className={`${display}`}>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex justify-between flex-wrap p-5 gap-y-5 border-b-2 lg:border-r-2 lg:border-b-0 border-coolgray-900 lg:w-[35%]">
            <div className="flex flex-col w-[45%] sm:w-[22%] lg:w-[45%]">
              <label className="text-coolgray-500 text-sm mb-1">
                Bedrooms
              </label>
              <select name="bedrooms" onChange={(e)=> setBedroomsCount(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={bedroomsCount.includes("Any")}>Any</option>
                <option value="1" selected={bedroomsCount.includes("1")}>1</option>
                <option value="2" selected={bedroomsCount.includes("2")}>2</option>
                <option value="3" selected={bedroomsCount.includes("3")}>3</option>
                <option value="4" selected={bedroomsCount.includes("4")}>4</option>
                <option value="5" selected={bedroomsCount.includes("5")}>5</option>
                <option value="6" selected={bedroomsCount.includes("6")}>6</option>
              </select>
            </div>
            <div className="flex flex-col w-[45%] sm:w-[22%] lg:w-[45%]">
              <label className="text-coolgray-500 text-sm mb-1">
                Bathrooms
              </label>
              <select name="bathrooms2" onChange={(e)=> setBathroomsCount(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={bathroomsCount.includes("Any")}>Any</option>
                <option value="1" selected={bathroomsCount.includes("1")}>1</option>
                <option value="2" selected={bathroomsCount.includes("2")}>2</option>
                <option value="3" selected={bathroomsCount.includes("3")}>3</option>
                <option value="4" selected={bathroomsCount.includes("4")}>4</option>
                <option value="5" selected={bathroomsCount.includes("5")}>5</option>
                <option value="6" selected={bathroomsCount.includes("6")}>6</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[50%] lg:w-full">
              <label className="text-coolgray-500 text-sm mb-1">
                Price Range
              </label>
              <select name="priceRange2" onChange={(e)=> setPriceRange(e.target.value)} className="form-select bg-coolgray-700 text-white rounded-lg border-none focus:ring-0">
                <option value="Any" selected={priceRange.includes("Any")}>Any</option>
                <option value="10000 - 20000" selected={priceRange.includes("10000 - 20000")}>10000 - 20000</option>
                <option value="20000 - 30000" selected={priceRange.includes("20000 - 30000")}>20000 - 30000</option>
                <option value="30000 - 40000" selected={priceRange.includes("30000 - 40000")}>30000 - 40000</option>
                <option value="40000 - 50000" selected={priceRange.includes("40000 - 50000")}>40000 - 50000</option>
                <option value="50000 - 60000" selected={priceRange.includes("50000 - 60000")}>50000 - 60000</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col p-5 border-b-2 lg:border-r-2 lg:border-b-0 border-coolgray-900 lg:w-[25%]">
            <h5 className="text-coolgray-500 text-sm mb-5">Property Type</h5>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <div className="flex items-center grow">
                <input type="radio" name="propertyType2" value="Any" checked={propertyType.includes("Any")} onChange={(e)=> setPropertyType(e.target.value)} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Any
                </label>
              </div>
              <div className="flex items-center grow">
                <input type="radio" name="propertyType2" value="House" checked={propertyType.includes("House")} onChange={(e)=> setPropertyType(e.target.value)} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  House
                </label>
              </div>
              <div className="flex items-center grow">
                <input type="radio" name="propertyType2" value="Apartment" checked={propertyType.includes("Apartment")} onChange={(e)=> setPropertyType(e.target.value)} className="input-radio mr-2 bg-coolgray-900 text-indigo-500 border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Apartment
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 lg:w-[40%]">
            <h5 className="text-coolgray-500 text-sm mb-5">Amenities</h5>
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 lg:gap-5">
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Balcony" checked={amenities.includes("Balcony")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Balcony
                </label>
              </div>
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Pool" checked={amenities.includes("Pool")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Pool
                </label>
              </div>
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Beach" checked={amenities.includes("Beach")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Beach
                </label>
              </div>
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Backyard" checked={amenities.includes("Backyard")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Backyard
                </label>
              </div>
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Central Air" checked={amenities.includes("Central Air")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Central Air
                </label>
              </div>
              <div className="flex items-center sm:w-[20%] lg:w-[45%] text-[15px]">
                <input type="checkbox" name="amenities2" value="Parking" checked={amenities.includes("Parking")} onChange={amenitiesChangeHandler} className="input-checkbox mr-2 bg-coolgray-900 text-indigo-500 rounded-md border-none focus:ring-0 focus:ring-offset-0 p-3"/>
                <label className="text-white font-light">
                  Parking
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-coolgray-900 p-5 w-full">
          <button onClick={updateHandler} className="bg-indigo-500 w-full sm:w-auto text-white font-medium p-2 px-4 rounded-lg">
            Update results
          </button>
        </div>
      </div>
    </div>
  );
}
