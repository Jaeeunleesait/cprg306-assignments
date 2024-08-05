"use client";
import { useEffect, useState } from "react";
import NewItem from "../new-item";
import ItemList from "../item-list";
import MealIdeas from "../meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    addItem(user.uid, item);
    setItems([...items, item]);
  };
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const gottenItems = await getItems(user.uid);
    setItems(gottenItems);
  };

  const handleItemSelect = (item) => {
    let renameItem = item.name.replace(
      /([🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼])/g,
      ""
    );
    renameItem = renameItem.trim();
    renameItem = renameItem.split(",")[0];

    setSelectedItemName(renameItem);
  };

  if (user) {
    return (
      <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div>
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
        </div>
      </main>
    );
  } else {
    return (
      <div className=" pt-3 pl-3 h-screen bg-purple-200 text-xl">
        Please log in to view your shopping list.
      </div>
    );
  }
}
