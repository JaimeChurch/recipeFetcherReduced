import React, { useEffect, useState } from 'react';
import ResultsCard from './ResultsCard';

const BrowseAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false); // Add a flag to indicate all recipes are loaded
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const allRecipes = [];
                for (let letter of alphabet) {
                    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data.meals) {
                        allRecipes.push(...data.meals);
                        setRecipes(prevRecipes => [...prevRecipes, ...data.meals]);
                    }
                }
                setLoadedAll(true); // Set the flag to true once all recipes are loaded
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>All Recipes</h1>
            {recipes.length > 0 ? (
                recipes.map((meal) => <ResultsCard key={meal.idMeal} meal={meal} />)
            ) : (
                <p>No results found</p>
            )}
            {loading && <p>Loading...</p>}
            {loadedAll && recipes.length === 0 && <p>No recipes found.</p>} {/* Handle case when no recipes are found */}
        </div>
    );
};

export default BrowseAllRecipes;
