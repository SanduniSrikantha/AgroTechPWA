import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Filter1 = () => {

    const names = ['All', 'Seeds', 'Fertilizers', 'Pesticides']
  return (
    <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={names}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Crop Inputs" />}
/>

  )
}

export default Filter1
