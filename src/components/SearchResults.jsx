import React from 'react';
import ResultsCard from './ResultsCard';
import '../../styles/searchResults.css';

const SearchResults = ({ results }) => {
  console.log('SearchResults results:', results);
  return (
    <div>
      <h1>Search Results</h1>
      {results && results.length > 0 ? (
        results.map((meal) => <ResultsCard key={meal.idMeal} meal={meal} />)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
