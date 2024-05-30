import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/ResultsCard.css';

function ResultsCard({ meal }) {
  const mealDBUrl = `https://www.themealdb.com/meal/${meal.idMeal}`;
  const externalUrl = meal.strSource || '#';

  return (
    <div className="results-card-container">
      <Card className="results-card">
        <CardContent>
        <Link to={`/recipe/${meal.idMeal}`} className="recipe-link">
            <Typography className="results-title">
              {meal.strMeal}
            </Typography>
            <CardMedia
              component="img"
              alt={meal.strMeal}
              className="results-image"
              image={meal.strMealThumb}
            />
          </Link>
          <Typography className="results-category">
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
