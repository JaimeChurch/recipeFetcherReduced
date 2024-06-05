import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="#">Browse by Ingredient</Link>
            <Link to="#">Browse by Category</Link>
            <Link to="/browse-all">Browse all Recipes</Link>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <BasicTextFields onInputChange={handleInputChange} onKeyDown={handleKeyDown} />
                <SearchButton onSearch={handleSearchClick} />
            </div>
        </nav>
    );
};

export default NavBar;