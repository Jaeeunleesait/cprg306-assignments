"use client";
import {useState} from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };

        console.log(item);

        alert(`${item.name}, ${item.quantity}, ${item.category}`);
    
        setName("");
        setQuantity(1);
        setCategory('Produce');
    };

    const handleName = (event) => setName(event.target.value);
    const handleQuantity = (event) => setQuantity(parseInt(event.target.value));
    const handleCategory = (event) => setCategory(event.target.value);

    return (
        <main className="flex justify-center bg-blue-100">
            <form className="p-2 m-4 bg-blue-300 text-black max-w-sm w-full">
                <div className="mb-2">
                    <input required="true" className="w-64 mt-1 border-2 border-gray-300 p-2 rounded-md font-mono" type="text" placeholder="Item name" value={name} onChange={handleName} />
                </div>
                <div>
                    <input className="w-20 mb-2 ml-1 border-2 border-gray-300 p-2 rounded-md font-mono" type="number" min={1} max={99} value={quantity} onChange={handleQuantity} required/>
                </div>
                <div>
                    <select className="w-64 ml-1 border-2 border-gray-300 p-2 rounded-md font-mono" value={category} onChange={handleCategory}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select> 
                </div>
                <div className="flex justify-center">
                    <button className="w-24 mt-2 py-2 bg-blue-500 text-white font-mono rounded-lg hover:bg-blue-700 mb-2" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </main>
    );
}