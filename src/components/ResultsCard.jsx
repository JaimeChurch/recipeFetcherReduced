import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import '../../styles/searchResults.css';

function ResultsCard({ meal }) {
  const mealDBUrl = `https://www.themealdb.com/meal/${meal.idMeal}`;
  const externalUrl = meal.strSource || '#';

  return (
    <div className="results-card-container">
      <Card className="results-card">
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
        </CardContent>
      </Card>
    </div>
  );
}

ResultsCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultsCard;
