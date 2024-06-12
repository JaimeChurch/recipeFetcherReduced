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
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/browse-by-category">Browse by Category</Link>
                </li>
                <li>
                    <Link to="/browse-by-country">Browse by Country</Link> 
                </li>
                <li>
                    <Link to="/browse-all">Browse all Recipes</Link>
                </li>
                <li>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <BasicTextFields onInputChange={handleInputChange} onKeyDown={handleKeyDown} />
                        <SearchButton onSearch={handleSearchClick} />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
