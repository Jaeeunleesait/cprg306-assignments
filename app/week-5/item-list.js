"use client";
import { useState } from "react";
import itemData from "./items.json";
import Item from "./item";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const items = [...itemData];

  const sortByName = () =>
    items.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });

  const sortByCategory = () =>
    items.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      } else {
        return 1;
      }
    });

  if (sortBy === "name") {
    sortByName();
  } else if (sortBy === "category") {
    sortByCategory();
  }

  const handleName = (event) => setSortBy("name");
  const handleCategory = (event) => setSortBy("category");

  return (
    <div>
      {sortBy === "name" && (
        <button
          className="bg-pink-500 p-1 m-4 w-28 font-mono"
          onClick={handleName}
        >
          Name
        </button>
      )}

      {sortBy === "category" && (
        <button
          className="bg-pink-800 p-1 m-4 w-28 font-mono"
          onClick={handleName}
        >
          Name
        </button>
      )}

      {sortBy === "category" && (
        <button
          className="bg-pink-500 p-1 m-4 w-28 font-mono"
          onClick={handleCategory}
        >
          Category
        </button>
      )}

      {sortBy === "name" && (
        <button
          className="bg-pink-800 p-1 m-4 w-28 font-mono"
          onClick={handleCategory}
        >
          Category
        </button>
      )}

      {items.map((item) => (
        <Item key={item.id} itemObj={item} />
      ))}
    </div>
  );
}
