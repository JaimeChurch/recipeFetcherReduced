import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const BrowseCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.categories) {
                setCategories(data.categories);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchCategories().then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Browse by Category</h1>
            {loading && <p>Loading...</p>}
            {categories.length > 0 ? (
                categories.map((category) => (
                    <Link key={category.idCategory} to={`/category/${category.strCategory}`}>
                        <ResultsCard item={category} />
                    </Link>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default BrowseCategory;
