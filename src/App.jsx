import React, { useState } from 'react';
import BasicButtons from '../components/basicButton';
import RecipeCard from './recipeCard';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Fetcher</h1>
      <h3>Click the button to fetch a random recipe:</h3>
      <BasicButtons onSearch={handleSearch} />
      {/* Checks if result is truthy. If it is meal is set to the first recipe in the array and passed to recipeCard. */}
      {result && <RecipeCard meal={result.meals[0]} />}
    </div>
  );
}

export default App;
