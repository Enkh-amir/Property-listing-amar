"use client";
import React from "react";
import Card from "./Card";
import data from "../mock/us-property-listings-100.json";
export const Hero = ({ searchQuery }) => {
  const filteredItems = data.properties.filter((item) =>
    item.City.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container flex flex-col  gap-5">
      {filteredItems.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
