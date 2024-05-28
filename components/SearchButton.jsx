import React from 'react';
import Button from '@mui/material/Button';

const SearchButton = ({ onSearch }) => {
    return (
        <Button variant="contained" color="primary" onClick={onSearch}>
            Search
        </Button>
    );
};

export default SearchButton;