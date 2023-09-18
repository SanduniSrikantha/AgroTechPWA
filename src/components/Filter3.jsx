import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter3 = () => {

    const names = ['All', 'Brand1', 'Brand2', 'Brand3']

  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={names}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Brand" />}
    />
  )
}

export default Filter3
