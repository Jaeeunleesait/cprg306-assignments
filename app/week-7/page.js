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
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    let renameItem = item.name.replace(
      /([🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼])/g,
      ""
    );
    renameItem = renameItem.trim();
    renameItem = renameItem.split(",")[0];

    setSelectedItemName(renameItem);
  };

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold pt-5 pl-5 text-neutral-50">
        Shopping List
      </h1>
      <div className="flex flex-row">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="list-none text-white bg-violet-500">
          <MealIdeas ingredient={selectedItemName}></MealIdeas>
        </div>
      </div>
    </main>
  );
}
