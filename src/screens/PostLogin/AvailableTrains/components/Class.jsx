import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Class = () => {
  return (
    <Box sx={{backgroundColor : "greenyellow", width: "6rem", height: "fit-content"  , borderRadius: "10px", padding : "2vh"}}>
    <Typography sx={{ fontSize: 14 
  }} color="text.secondary" gutterBottom
    >
     SL
    </Typography>
    <Typography variant="h7" component="div">
      105 seats
    </Typography>
    <Typography variant="h8" component="div">
      Available
    </Typography>
    </Box>
  )
}

export default Class