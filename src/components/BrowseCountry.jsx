import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const BrowseCountry = () => {
    const [countries, setCountries] = useState([]);
    const [thumbnails, setThumbnails] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchCountries = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data.meals) {
                setCountries(data.meals);
            }
        } catch (error) {
            console.error('Error fetching list of countries:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchFirstRecipeThumbnail = async (country) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.meals && data.meals.length > 0) {
                return data.meals[0].strMealThumb;
            }
        } catch (error) {
            console.error('Error fetching first recipe for country:', error);
        }
        return null;
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchThumbnails = async () => {
            const thumbnailsPromises = countries.map(async (country) => {
                const thumbnail = await fetchFirstRecipeThumbnail(country.strArea);
                return { [country.strArea]: thumbnail };
            });

            const thumbnailsArray = await Promise.all(thumbnailsPromises);
            const thumbnailsMap = thumbnailsArray.reduce((acc, curr) => ({ ...acc, ...curr }), {});
            setThumbnails(thumbnailsMap);
        };

        if (countries.length > 0) {
            fetchThumbnails();
        }
    }, [countries]);

    return (
        <div>
            <h1>Browse by Country</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {countries.map((country) => (
                        <Link key={country.strArea} to={`/country/${country.strArea}`}>
                            <ResultsCard item={country} isCountry={true} thumbnail={thumbnails[country.strArea]} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseCountry;
