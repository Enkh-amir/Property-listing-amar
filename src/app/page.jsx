"use client";

import Header from "./components/Header";
import { useState } from "react";
import { Hero } from "./components/Hero";
import data from "./mock/us-property-listings-100.json";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResults, setSelectedResults] = useState([]);
  const [rentType, setRentType] = useState("any");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filteredCities = data.properties.filter((property) => {
    const matchesSearch = property.City.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
    const matchesRentType =
      rentType === "any" || property.rentType === rentType;
    return matchesSearch && matchesRentType;
  });

  const handleFilterChange = (event) => {
    setRentType(event.target.value);
  };

  const handleSuggestionClick = (property) => {
    if (!selectedResults.includes(property.City)) {
      setSelectedResults((prev) => [...prev, property.City]);
    }
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <Header
        onSearch={handleSearch}
        handleFilterChange={handleFilterChange}
        filteredCities={filteredCities}
        handleSuggestionClick={handleSuggestionClick}
        rentType={rentType}
      />
      <Hero searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
