import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicTextFields({onInputChange, onKeyDown  }) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Search by Name" variant="filled" onChange={(e) => onInputChange(e.target.value)} onKeyDown={onKeyDown}/>
    </Box>
  );
}

export default BasicTextFields;
