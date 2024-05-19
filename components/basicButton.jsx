import React from 'react';
import { Button } from '@mui/material';

const BasicButtons = ({ onSearch }) => {
  return (
    <Button variant="contained" color="primary" onClick={onSearch}>
      Fetch
    </Button>
  );
};

export default BasicButtons;
