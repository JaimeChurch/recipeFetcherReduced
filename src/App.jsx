import React, { useState } from 'react';
import FetchButton from '../components/FetchButton';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/recipeCard';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleFetch = async () => {
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

  const handleSearch = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <h1>Recipe Fetcher</h1>
      <h3>Click the button to fetch a random recipe:</h3>
      <FetchButton onFetch={handleFetch} />
      {/* Checks if result is truthy. If it is meal is set to the first recipe in the array and passed to recipeCard. */}
      {result && <RecipeCard meal={result.meals[0]} />}
    </div>
  );
}

export default App;
