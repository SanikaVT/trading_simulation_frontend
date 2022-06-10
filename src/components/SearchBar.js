import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%'}}
    style={{justifyContent:'center'}}
  >
 
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Here...."
      inputProps={{ 'aria-label': 'Search Here....' }}
    />
   
   
  </Paper>
  )
}

export default SearchBar