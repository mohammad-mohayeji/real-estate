import React from "react";

import { StarIcon } from "../../node_modules/@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function PropertyCard({estate}) {
  return (
    <div>
      <div className="bg-white shadow hover:shadow-2xl transition duration-200 rounded-lg overflow-hidden">
        <div className="w-full">
          <img src={estate.image} alt="" className="w-full"/>
        </div>
        <div className="p-4 rounded-lg z-10">
          <div className="text-coolgray-600 font-medium mb-2 flex items-center">
            <span className="bg-teal-200 text-teal-800 text-xs font-semibold py-[2px] px-2 rounded-full mr-2">PLUS</span>
            <div><span>{estate.bedrooms} Beds</span> • <span> {estate.bathrooms} Baths</span></div>
          </div>
          <h4 className="lg:text-lg font-medium text-coolgray-900 min-h-[56px]">{estate.address}</h4>
          <p className="my-3">
            <span className="lg:text-lg font-medium text-indigo-500">$ {estate.price}</span>
          </p>
          <div className="flex items-center gap-x-5 mb-4">
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-teal-500" />
              <StarIcon className="w-5 h-5 text-teal-500" />
              <StarIcon className="w-5 h-5 text-teal-500" />
              <StarIcon className="w-5 h-5 text-teal-500" />
              <StarIcon className="w-5 h-5 text-teal-500" />
            </div>
            <p className="text-coolgray-600 mt-[1px]">34 Reviews</p>
          </div>
          <Link to={`singleproperty/${estate.id}`} className="w-full block text-center lg:text-lg p-3 rounded-md text-coolgray-200 bg-indigo-500">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
