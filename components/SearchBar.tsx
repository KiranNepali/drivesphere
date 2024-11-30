"use client";
import React from "react";
import SearchManufacture from "./SearchManufacture";
import { useState } from "react";
const SearchBar = () => {
  const [manufacturer, setManfacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManfacturer={setManfacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
