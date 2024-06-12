import React, { useEffect, useState, useCallback } from 'react';
import ResultsCard from './ResultsCard';

const BrowseAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const fetchRecipes = useCallback(async (letter) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.meals) {
                setRecipes(prevRecipes => {
                    // Filter out duplicates
                    const newMeals = data.meals.filter(
                        newMeal => !prevRecipes.some(existingMeal => existingMeal.idMeal === newMeal.idMeal)
                    );
                    return [...prevRecipes, ...newMeals];
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    //Fetches recipes by first letter. Increments letterIndex.
    useEffect(() => {
        if (letterIndex < alphabet.length) {
            setLoading(true);
            fetchRecipes(alphabet[letterIndex]).then(() => {
                setLetterIndex(prevIndex => prevIndex + 1);
                setLoading(false);
            });
        }
    }, [letterIndex, fetchRecipes]);

    return (
        <div>
            <h1>All Recipes</h1>
            {recipes.length > 0 ? (
                recipes.map((meal) => (
                    <ResultsCard key={meal.idMeal} item={meal} /> 
                ))
            ) : (
                <p>No results found</p>
            )}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default BrowseAllRecipes;
