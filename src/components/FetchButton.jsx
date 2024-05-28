import React from 'react';
import { Button } from '@mui/material';

const FetchButton = ({ onFetch }) => {
  return (
    <Button variant="contained" color="primary" onClick={onFetch}>
      Fetch
    </Button>
  );
};

export default FetchButton;
