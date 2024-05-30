import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

function RecipePage() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        }
      } catch (error) {
        console.error('Error fetching meal data:', error);
      }
    };

    fetchMeal();
  }, [idMeal]);

  return (
    <div>
      {meal ? <RecipeCard meal={meal} /> : <p>Loading...</p>}
    </div>
  );
}

export default RecipePage;
