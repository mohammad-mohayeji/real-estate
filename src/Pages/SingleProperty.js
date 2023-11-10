import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

export default function SingleProperty() {
    const [property,setProperty] = useState({
        "id": "",
        "type": "",
        "name": "",
        "description": "",
        "image": "",
        "country": "",
        "address": "",
        "bedrooms": "",
        "bathrooms": "",
        "surface": "",
        "year": "",
        "price": "",
        "agent": {
          "image": "",
          "name": "",
          "phone": ""
        }
      });
    const propertyID = useParams().propertyID;
    

    useEffect(()=> {
        axios.get(`https://realestate-restful-api.vercel.app/estates/${propertyID}`).then((res)=> {
            setProperty(res.data)
        })
    }, [])

  return (
    <div className="container mx-auto min-h-[800px] py-14 px-4 sm:px-0">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="lg:max-w-[600px] xl:max-w-[768px] mx-auto xl:mx-0">
            <div className="mb-8">
              <img src={property.image} alt="" className='rounded-md'/>
            </div>
            <div className='bg-white rounded-md shadow-lg p-6'>
              <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-coolgray-900'>
                  <h2 className="text-lg md:text-2xl font-semibold mb-1">{property.name}</h2>
                  <h3 className="text-sm md:text-lg mb-4">{property.address}</h3>
                </div>
                <div className='flex md:flex-col gap-2 mb-6 md:mb-0'>
                  <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-center text-sm md:text-base w-1/2 md:w-auto">
                    {property.country}
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-center text-sm md:text-base w-1/2 md:w-auto">
                    {property.type}
                  </div>
                </div>
              </div>
              <div className="flex gap-x-6 text-indigo-700 mb-6">
                <div className="flex items-center gap-x-2 font-medium">
                  <BiBed className="text-2xl"/>
                  <div>{property.bedrooms}</div>
                </div>
                <div className="flex items-center gap-x-2 font-medium">
                  <BiBath className="text-2xl"/>
                  <div>{property.bathrooms}</div>
                </div>
                <div className="flex items-center gap-x-2 font-medium">
                  <BiArea className="text-2xl"/>
                  <div>{property.surface}</div>
                </div>
              </div>
              <div className='text-coolgray-900'>
                {property.description}
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 rounded-lg px-6 py-8 shadow-lg">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-24 h-24 p-1 border border-gray-300 rounded-full">
                <img src={property.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{property.agent.name}</div>
                <Link to="" className="text-indigo-700 text-sm">View Listings</Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input className="bg-coolgray-300 placeholder:text-coolgray-700 border border-coolgray-500 focus:border-indigo-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Name"/>
              <input className="bg-coolgray-300 placeholder:text-coolgray-700 border border-coolgray-500 focus:border-indigo-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Email" />
              <input className="bg-coolgray-300 placeholder:text-coolgray-700 border border-coolgray-500 focus:border-indigo-700 outline-none rounded w-full px-4 h-14 text-sm" type="text" placeholder="Phone" />
              <textarea className="bg-coolgray-300 placeholder:text-coolgray-700 border border-coolgray-500 focus:border-indigo-700 outline-none resize-none rounded w-full p-4 h-36 text-sm" placeholder="Message"></textarea>
              <div className="flex gap-x-2">
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded p-4 text-sm w-full transition">Send Message</button>
                <button className="border border-indigo-700 text-indigo-700 hover:border-indigo-500 hover:text-indigo-500 rounded p-4 text-sm w-full transition">Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
