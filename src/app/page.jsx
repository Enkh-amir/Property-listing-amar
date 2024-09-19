"use client";

import Header from "./components/Header";
import { useState } from "react";
import data from "./mock/us-property-listings-100.json"; // Import the property data

async function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedResults, setSelectedResults] = useState([]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleResultsChange = (results) => {
    setSelectedResults(results);
  };

  const filteredProperties = data.properties.filter((property) => {
    return property.City.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center">
      <Header
        onSearchChange={handleSearchChange}
        onResultsChange={handleResultsChange}
      />
      <main>
        <h2>Searched Value: {searchValue}</h2>
        <h3>Available Properties:</h3>
        <ul>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <li key={property.id}>
                {property.title} - {property.City} ({property.rentType})
              </li>
            ))
          ) : (
            <li>No properties found.</li>
          )}
        </ul>
      </main>
    </div>
  );
}

export default Home;
