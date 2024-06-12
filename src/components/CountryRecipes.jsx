import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const CountryRecipes = () => {
    const { country } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch recipes by country
    const fetchRecipesByCountry = async (country) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.meals) {
                setRecipes(data.meals);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch recipes when the country parameter changes
    useEffect(() => {
        setLoading(true);
        fetchRecipesByCountry(country).then(() => {
            setLoading(false);
        });
    }, [country]);

    return (
        <div>
            <h1>{country} Recipes</h1>
            {loading && <p>Loading...</p>}
            {recipes.length > 0 ? (
                recipes.map((meal) => (
                    <ResultsCard key={meal.idMeal} item={meal} />
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default CountryRecipes;
