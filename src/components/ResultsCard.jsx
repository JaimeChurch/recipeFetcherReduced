import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/ResultsCard.css';

function ResultsCard({ item }) {
  // Check if item is undefined
  if (!item) {
    return null; // Return null if item is undefined
  }

  // Determine if the item is a category by checking if idCategory exists
  const isCategory = item.idCategory !== undefined;

  return (
    <div className="results-card-container">
      <Card className="results-card">
        <CardContent>
          {isCategory ? (
            <>
              <Typography className="results-title">
                {item.strCategory}
              </Typography>
              <CardMedia
                component="img"
                alt={item.strCategory}
                className="results-image"
                image={item.strCategoryThumb}
              />
              <Typography className="results-description">
                {item.strCategoryDescription}
              </Typography>
            </>
          ) : (
            <>
              <Link to={`/recipe/${item.idMeal}`} className="recipe-link">
                <Typography className="results-title">
                  {item.strMeal}
                </Typography>
                <CardMedia
                  component="img"
                  alt={item.strMeal}
                  className="results-image"
                  image={item.strMealThumb}
                />
              </Link>
              <Typography className="results-category">
                {item.strCategory} - {item.strArea}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

ResultsCard.propTypes = {
  item: PropTypes.shape({
    idCategory: PropTypes.string,
    strCategory: PropTypes.string,
    strCategoryThumb: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strInstructions: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
  }),
};

export default ResultsCard;
