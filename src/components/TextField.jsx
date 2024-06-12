import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicTextFields({ onInputChange, onKeyDown }) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={onKeyDown}
        inputProps={{ style: { color: 'white' } }}
      />
    </Box>
  );
}

export default BasicTextFields;
