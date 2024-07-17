"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const copyItems = [...items];

  const sortByName = () =>
    copyItems.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });

  const sortByCategory = () =>
    copyItems.sort((a, b) => {
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
    <div className="text-neutral-50">
      {sortBy === "name" && (
        <button
          className="bg-pink-500 p-1 m-4 w-28 font-mono rounded-md"
          onClick={handleName}
        >
          Name
        </button>
      )}

      {sortBy === "category" && (
        <button
          className="bg-pink-800 p-1 m-4 w-28 font-mono rounded-md"
          onClick={handleName}
        >
          Name
        </button>
      )}

      {sortBy === "category" && (
        <button
          className="bg-pink-500 p-1 m-4 w-28 font-mono rounded-md"
          onClick={handleCategory}
        >
          Category
        </button>
      )}

      {sortBy === "name" && (
        <button
          className="bg-pink-800 p-1 m-4 w-28 font-mono rounded-md"
          onClick={handleCategory}
        >
          Category
        </button>
      )}

      {copyItems.map((item) => (
        <Item
          key={item.id}
          itemObj={item}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}
