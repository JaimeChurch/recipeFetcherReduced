import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTextFields from './TextField';
import SearchButton from './SearchButton';

const NavBar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (value) => {
        setSearchTerm(value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
        navigate('/results');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearchClick();
        }
    };

    return (
        <nav>
            <a href="http://localhost:5173/">Home</a>
            <a href="#">Browse by Ingredient</a>
            <a href="#">Browse by Meal Type</a>
            <a href="#">Browse all Recipes</a>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <BasicTextFields onInputChange={handleInputChange} onKeyDown={handleKeyDown} />
                <SearchButton onSearch={handleSearchClick} />
            </div>
        </nav>
    );
};

export default NavBar;