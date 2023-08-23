import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import axios from "axios";

// import our GlobalContext
import { GlobalContext } from "../GlobalContext";

// import icons
import { ImSpinner2 } from "react-icons/im";

export default function PropertiesList() {
  const { properties, setProperties, propertiesData, setPropertiesData, loading } =
    useContext(GlobalContext);

  useEffect(() => {
    axios.get("http://localhost:5000/estates").then((res) => {
      setProperties(res.data);
      setPropertiesData(res.data);
    });
  }, []);

  if (loading) {
    return (
      <ImSpinner2 className="col-span-2 xl:col-span-1 mx-auto animate-spin text-indigo-700 text-4xl my-[150px] xl:mt-[250px]" />
    );
  }

  if(!properties.length) {
    return <div className="text-center text-3xl text-coolgray-600 mt-56">Sorry, Nothing was found!</div>;
  }

  return (
    <div className="p-5 col-span-2 xl:col-span-1 xl:row-span-1">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-3">
          <h2 className="text-coolgray-900 text-xl mb-3">Los Angeles</h2>
          <span className="flex justify-between items-center">
            <p className="text-coolgray-600">
              Live like the stars in these luxurious Southern California
              estates.
            </p>
            <Link className="text-indigo-600 font-medium hidden sm:block">
              View all
            </Link>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 py-4">
          {properties.map((estate) => (
            <PropertyCard key={estate.id} estate={estate} />
          ))}
        </div>
      </div>
    </div>
  );
}
