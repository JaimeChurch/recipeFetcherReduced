import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/ResultsCard.css';

function ResultsCard({ item, isCountry, thumbnail }) {
  if (!item) {
    return null;
  }

  // Creates title based on wether item is a meal, category or country.
  const isCategory = item.idCategory !== undefined;
  const title = isCountry ? (
    //Executes if item is country.
    <Link to={`/country/${item.strArea}`} className="results-link">
      {item.strArea}
    </Link>
  ) : (isCategory ? item.strCategory : item.strMeal); // If item is not country, checks wether it is a category or meal.

  // Constructs link and image URL based on type
  const link = isCategory ? `/category/${item.strCategory}` : `/recipe/${item.idMeal}`;
  const image = thumbnail || (isCategory ? item.strCategoryThumb : item.strMealThumb);

  return (
    <div className="results-card-container">
      <Card className="results-card">
        <CardContent>
          <Link to={link} className="results-link">
            <Typography className="results-title">
              {title}
            </Typography>
            {image && (
              <CardMedia
                component="img"
                alt={title}
                className="results-image"
                image={image}
              />
            )}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

ResultsCard.propTypes = {
  item: PropTypes.shape({
    idCategory: PropTypes.string,
    strCategory: PropTypes.string,
    strMeal: PropTypes.string,
    strArea: PropTypes.string,
    strCategoryThumb: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  isCountry: PropTypes.bool,
  thumbnail: PropTypes.string,
};

export default ResultsCard;
