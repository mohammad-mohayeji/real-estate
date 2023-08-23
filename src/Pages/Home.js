import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import PropertiesList from "../Components/PropertiesList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[270px_minmax(900px,_1fr)] xl:grid-rows-[80px_minmax(500px,_1fr)] 2xl:container 2xl:mx-auto 2xl:max-w-screen-xl">
      <Sidebar />
      <Navbar />
      <PropertiesList />
    </div>
  );
}
