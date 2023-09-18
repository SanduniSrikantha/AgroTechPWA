import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter2 = () => {

    const names = ['All', 'Carrots', 'Beans', 'Pumpkin']
  return (
    <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={names}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Crop Type" />}
  />

  )
}

export default Filter2
