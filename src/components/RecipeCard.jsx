import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import '../../styles/RecipeCard.css';

function RecipeCard({ meal }) {
  const mealDBUrl = `https://www.themealdb.com/meal/${meal.idMeal}`;
  const externalUrl = meal.strSource || '#';

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measurement = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measurement });
    }
  }

  return (
    <div className="recipe-card-container">
      <Card className="recipe-card">
        <CardContent>
          {/* title */}
          <Typography className="recipe-title">
            {meal.strMeal}
          </Typography>
          {/* image */}
          <div className="recipe-image-container">
            <img
              alt={meal.strMeal}
              className="recipe-image"
              src={meal.strMealThumb}
            />
          </div>
           {/* Category */}
          <Typography className="recipe-category">
            {meal.strCategory} - {meal.strArea}
          </Typography>
          <Typography className='recipe-ingredients-title'>
            Ingredients
          </Typography>
          <ul className='recipe-ingredients'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.ingredient} : {ingredient.measurement}
              </li>
            ))}
          </ul>
          <Typography className='recipe-instructions-title'>
            Instructions
          </Typography>
          <Typography className='recipe-instructions'>
            {meal.strInstructions}
          </Typography>
          <Typography>
            <a href={mealDBUrl} target="_blank" className="recipe-link">
              View Recipe on Meal Database
            </a>
            <br />
            <a href={externalUrl} target="_blank" className="recipe-link">
              View Original Recipe
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

RecipeCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strSource: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
