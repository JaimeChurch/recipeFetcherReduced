import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './App.css';

function RecipeCard({ meal }) {
  const mealDBUrl = `https://www.themealdb.com/meal/${meal.idMeal}`;
  const externalUrl = meal.strSource || '#';

  return (
    <div className="recipe-card-container">
      <Card className="recipe-card">
        <CardContent>
          {/* title */}
          <Typography className="recipe-title">
            {meal.strMeal}
          </Typography>
          {/* image */}
          <CardMedia
            component="img"
            alt={meal.strMeal}
            className="recipe-image"
            image={meal.strMealThumb}
          />
          <Typography>
            {meal.strCategory} - {meal.strArea}
          </Typography>
          <Typography>
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
  }).isRequired,
};

export default RecipeCard;
