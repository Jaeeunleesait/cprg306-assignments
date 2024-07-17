"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState(null);
  const loadMealIdeas = async () => {
    setMeals(await fetchMealIdeas(ingredient));
  };
  useEffect(() => {
    if (ingredient !== "") {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h1 className="font-bold text-white text-xl">Meal ideas</h1>
      {meals != null && (
        <div>
          {meals.map((meal) => (
            <li>{meal.strMeal}</li>
          ))}
        </div>
      )}
    </div>
  );
}
