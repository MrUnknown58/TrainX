import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Class from './Class';
const Tier = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent sx={{
      display: "flex",
      gap: "10px"
     }}>
      <Class tier={'SL'} seats={105} bgcolor={"greenYellow"} />
     <Class tier={'3AC'} seats={30} bgcolor={"pink"}/>
     <Class tier={'2AC'} seats={10} bgcolor={"tan"}/>
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
  )
}

export default Tier