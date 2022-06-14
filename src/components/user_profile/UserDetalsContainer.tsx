import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserDetailComp from './UserDetail';
import UserCreditsComp from './UserCredits';
import { Divider } from '@mui/material';
import DynamicUserInfoComp from './DynamicUserInfo';

function UserDetail() {
  return (
    <Box sx={{ flexGrow: 1}}>
    <Grid container>
      <Grid item xs={3}>
       <UserDetailComp/>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item xs={6}>
      <DynamicUserInfoComp/>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item xs={2}>
      <UserCreditsComp/>      
      </Grid>      
    </Grid>
    <Grid container direction="column" alignItems="center">
    {/* <Grid item xs={12}
      component="img"
      sx={{
        borderRadius:2,
        mt:8,
        mb:8
      }}
      alt="Stock Market"
      src="https://img.freepik.com/free-vector/illustrated-stock-market-analysis_52683-42053.jpg?t=st=1654288090~exp=1654288690~hmac=a5cfe11d8fab2658d628875db200f05399933434b07c76b2fcaba731b89adefd&w=996"
      ></Grid> */}
    </Grid>
  </Box>
  )
}


export default UserDetail