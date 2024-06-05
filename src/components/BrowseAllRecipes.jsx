import React, { useEffect, useState } from 'react';
import ResultsCard from './ResultsCard';

const BrowseAllRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const allRecipes = [];
                for (let letter of alphabet) {
                    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data.meals) {
                        allRecipes.push(...data.meals);
                    }
                }
                setRecipes(allRecipes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>All Recipes</h1>
            {recipes && recipes.length > 0 ? (
                recipes.map((meal) => <ResultsCard key={meal.idMeal} meal={meal} />)
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default BrowseAllRecipes;
