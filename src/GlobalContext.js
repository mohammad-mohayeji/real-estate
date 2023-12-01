import axios from "axios";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");

  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState({});

  const updateHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
    const keys = Object.keys(filter);
    let minPrice, maxPrice;

    // pushing "price" to the last index
    if (keys.includes("price")) {
      let priceRange = filter.price;
      minPrice = priceRange.split(" - ")[0];
      maxPrice = priceRange.split(" - ")[1];
      const priceIndex = keys.indexOf("price");
      keys.splice(priceIndex, 1);
      keys.push("price");
    }

    if (keys.length === 0) {
      axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6`).then((res) => {
          setProperties(res.data);
          setLoading(false);
          setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
        });
    } else if (keys.length === 1) {
      let key = keys[0];

      if (key === "price") {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&price_gte=${minPrice}&price_lte=${maxPrice}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      } else {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&${key}=${filter[key]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      }
    } else if (keys.length === 2) {
      let key1 = keys[0];
      let key2 = keys[1];

      if (key2 === "price") {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&price_gte=${minPrice}&price_lte=${maxPrice}&${key1}=${filter[key1]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      } else {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&${key1}=${filter[key1]}&${key2}=${filter[key2]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      }
    } else if (keys.length === 3) {
      let key1 = keys[0];
      let key2 = keys[1];
      let key3 = keys[2];

      if (key3 === "price") {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&price_gte=${minPrice}&price_lte=${maxPrice}&${key1}=${filter[key1]}&${key2}=${filter[key2]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      } else {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&${key1}=${filter[key1]}&${key2}=${filter[key2]}&${key3}=${filter[key3]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      }
    } else if (keys.length === 4) {
      let key1 = keys[0];
      let key2 = keys[1];
      let key3 = keys[2];
      let key4 = keys[3];

      if (key4 === "price") {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&price_gte=${minPrice}&price_lte=${maxPrice}&${key1}=${filter[key1]}&${key2}=${filter[key2]}&${key3}=${filter[key3]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      } else {
        axios.get(`https://realestate-restful-api.vercel.app/estates?_page=${pageNumber}&_limit=6&${key1}=${filter[key1]}&${key2}=${filter[key2]}&${key3}=${filter[key3]}&${key4}=${filter[key4]}`).then((res) => {
            setProperties(res.data);
            setLoading(false);
            setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
          });
      }
    }
  };

  const searchHandler = (pageNumber) => {
    setLoading(true);
    axios.get(`https://realestate-restful-api.vercel.app/estates?q=${searchInputValue}&_page=${pageNumber}&_limit=6`).then((res) => {
        setProperties(res.data);
        setLoading(false);
        setPageCount(Math.ceil(res.headers.get("x-total-count") / 6));
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        properties,
        filter,
        searchInputValue,
        pageCount,
        currentPage,
        loading,
        setProperties,
        setFilter,
        setSearchInputValue,
        setPageCount,
        setCurrentPage,
        setLoading,
        searchHandler,
        updateHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
