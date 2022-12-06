import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({id, label, errorState}) => {

  return (
    <TextField id={id} label={label} variant="outlined" error={errorState} />
  )
}

export default Input