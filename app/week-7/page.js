"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const items1 = [...items];
  const handleAddItem = (item) => {
    items1.push(item);
    setItems(items1);
  };

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold pt-5 pl-5 text-neutral-50">
        Shopping List
      </h1>
      <MealIdeas ingredient={"chicken"}></MealIdeas>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
