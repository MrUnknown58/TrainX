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
      <Class/>
     <Class/>
     <Class/>
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
  )
}

export default Tier