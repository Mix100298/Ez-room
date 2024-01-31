import React from "react";

export default function Searchfilter() {
  return (
    <div className="flex gap-10">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
        placeholder="Search"
        autoComplete="off"
      ></input>
      <input
        type="text"
        name="filter"
        id="filter"
        className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
        placeholder="Filter"
        autoComplete="off"
      ></input>
    </div>
  );
}
