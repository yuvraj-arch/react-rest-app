import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {
  const [loadedMeals, setloadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeal() {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) {
      }
      const meals = await response.json();
      setloadedMeals(meals);
    }
    fetchMeal();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
