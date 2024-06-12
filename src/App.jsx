import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchButton from './components/FetchButton';
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';
import SearchResults from './components/SearchResults';
import RecipePage from './components/RecipePage';
import BrowseAllRecipes from './components/BrowseAllRecipes';
import BrowseCategory from './components/BrowseCategory';
import BrowseCountry from './components/BrowseCountry';
import CategoryRecipes from './components/CategoryRecipes';
import CountryRecipes from './components/CountryRecipes';

function App() {
  const [result, setResult] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleFetch = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched random recipe:', data);
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async (searchTerm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Search results:', data);

      if (data && data.meals) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const partialMatches = data.meals.filter(meal => meal.strMeal.toLowerCase().includes(lowerCaseSearchTerm));
        const exactMatches = data.meals.filter(meal => meal.strMeal.toLowerCase() === lowerCaseSearchTerm);
        const allMatches = [...exactMatches, ...partialMatches.filter(pm => !exactMatches.some(em => em.idMeal === pm.idMeal))];
        setSearchResults(allMatches);
      } else {
        setSearchResults(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Recipe Fetcher</h1>
            <h3>Click the button to fetch a random recipe:</h3>
            <FetchButton onFetch={handleFetch} />
            {result && <RecipeCard meal={result.meals[0]} />}
          </div>
        } />
        <Route path="/results" element={<SearchResults results={searchResults} />} />
        <Route path="/recipe/:idMeal" element={<RecipePage />} />
        <Route path="/browse-by-category" element={<BrowseCategory />} />
        <Route path="/browse-all" element={<BrowseAllRecipes />} />
        <Route path="/category/:category" element={<CategoryRecipes />} />
        <Route path="/browse-by-country" element={<BrowseCountry />} />
        <Route path="/country/:country" element={<CountryRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
