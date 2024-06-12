import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const CategoryRecipes = () => {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRecipesByCategory = async (category) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
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

    useEffect(() => {
        setLoading(true);
        fetchRecipesByCategory(category).then(() => {
            setLoading(false);
        });
    }, [category]);

    return (
        <div>
            <h1>{category} Recipes</h1>
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

export default CategoryRecipes;
