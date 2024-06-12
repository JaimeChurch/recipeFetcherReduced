import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BasicTextFields from './TextField';
import SearchButton from './SearchButton';

const NavBar = ({ onSearch }) => {
    // State to hold the search term
    const [searchTerm, setSearchTerm] = useState('');
    // Hook from react-router-dom
    const navigate = useNavigate();

    // Update search term state when the input value changes
    const handleInputChange = (value) => {
        setSearchTerm(value);
    };

    // Handle search button click event
    const handleSearchClick = () => {
        onSearch(searchTerm);
        navigate('/results');
    };

    // Handle 'Enter' key pressed in the search field
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();  // Prevent the default form submission
            handleSearchClick();  // Trigger the search click handler
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
