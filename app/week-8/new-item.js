"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(),
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleName = (event) => setName(event.target.value);
  const handleQuantity = (event) => setQuantity(parseInt(event.target.value));
  const handleCategory = (event) => setCategory(event.target.value);

  return (
    <main className=" from-indigo-500 via-purple-500 to-pink-500">
      <form className="p-2 m-4 bg-violet-800 text-black max-w-sm w-full">
        <div className="mb-2">
          <input
            required
            className="w-64 mt-1 border-2 border-gray-300 p-2 rounded-md font-mono"
            type="text"
            placeholder="Item name"
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          <input
            className="w-20 mb-2 ml-1 border-2 border-gray-300 p-2 rounded-md font-mono"
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={handleQuantity}
            required
          />
        </div>
        <div>
          <select
            className="w-64 ml-1 border-2 border-gray-300 p-2 rounded-md font-mono"
            value={category}
            onChange={handleCategory}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className="w-24 mt-2 py-2 bg-blue-500 text-white font-mono rounded-lg hover:bg-blue-700 mb-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
