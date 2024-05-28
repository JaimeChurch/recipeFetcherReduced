import React from 'react';
import BasicTextFields from './TextField';
import SearchButton from './SearchButton';

const NavBar = ({ onSearch }) => {
    return (
        <nav>
            <a href="#">Home</a>
            <a href="#">Browse by Ingredient</a>
            <a href="#">Browse by Meal Type</a>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <BasicTextFields />
                <SearchButton onSearch={onSearch} />
            </div>
        </nav>
    );
};

export default NavBar;