"use client";
import { MainLogo } from "@/public/svg/MainLogo";
import { PhoneLogo } from "@/public/svg/PhoneLogo";
import { SearchLogo } from "@/public/svg/SearchLogo";
import { useState, useCallback } from "react";
import data from "../mock/us-property-listings-100.json";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedResults, setSelectedResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const filteredCities = data.properties.filter((property) =>
    property.City.toLowerCase().includes(searchValue.toLowerCase())
  ); 

  const handleInputChange = useCallback((e) => {
    setSearchValue(e.target.value.trim());
    setShowSuggestions(true);
  }, []);

  const handleFilterChange = (event) => {
    if (event.target.value === "sell") {
      console.log("sell")
    } else if(event.target.value==="rent"){
      console.log("rent")
    }
  };

  const handleSuggestionClick = (name) => {
    if (!selectedResults.includes(name)) {
      setSelectedResults([...selectedResults, name]);
    }
    setSearchValue("");
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setShowSuggestions(false);
  };

  const handleClearTag = (tag) => {
    setSelectedResults(selectedResults.filter((item) => item !== tag));
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const handleFocus = () => {
    if (searchValue) {
      setShowSuggestions(true);
    }
  };

  return (
    <header className="container m-auto flex items-center gap-5 pt-12">
      <MainLogo />
      <div className="relative flex min-w-[600px]  border rounded-md h-[50px]">
        <div className="flex items-center border-r border-gray-300 px-2">
          <select
            defaultValue="Any"
            className="bg-white border-none outline-none"
            aria-label="Property type"
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="relative flex items-center w-max flex-1">
          <div className="flex flex-wrap w-max items-center gap-2 p-2">
            {selectedResults.map((result) => (
              <div
                key={result}
                className="bg-yellow-200 text-black px-2 py-1 rounded-md flex items-center gap-1"
              >
                {result.City}
                <button
                  onClick={() => handleClearTag(result)}
                  className="text-gray-500"
                  aria-label={`Remove ${result}`}
                >
                  ×
                </button>
              </div>
            ))}
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className="flex-1 px-2 py-1 border-none outline-none overflow-x-auto"
              aria-label="Search"
            />
          </div>

          {searchValue && showSuggestions && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-w-[600px]">
              {filteredCities?.map((name) => (
                <div
                  key={name.id}
                  onClick={() => handleSuggestionClick(name)}
                  className={`p-2 border-b last:border-b-0 cursor-pointer ${
                    searchValue === name ? "bg-yellow-200" : "hover:bg-gray-100"
                  }`}
                >
                  {name.City}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center bg-blue-500 h-full px-4 justify-center rounded-r-md">
          <SearchLogo className="text-white" />
        </div>
      </div>
      <div className="w-[40%]"></div>
      <div className="flex gap-2">
        <div className="pt-4">
          <PhoneLogo />
        </div>
        <div className="w-max pt-2">
          <h1>+976 80578075</h1>
        </div>
        <div className="flex items-center ml-5">
          <div className="w-10 h-10 rounded-full border"></div>
          <select className="outline-none ml-2" aria-label="Select user">
            <option value="" disabled selected>
              Choose
            </option>
            <option value="Chris Evans">Chris Evans</option>
            <option value="Rock">Rock</option>
            <option value="Johnny Depp">Johnny Depp</option>
            <option value="Brad Pitt">Brad Pitt</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
