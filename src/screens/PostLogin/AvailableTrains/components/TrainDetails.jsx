import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tier from './Tier';


const TrainDetails = ({name, arrival , dept}) => {
  return (
    <Card sx={{ minWidth: 600 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        12045 - Darjeeling Express
      </Typography>
      <Typography variant="body2" color="text.secondary" display={'flex'} alignItems={'center'}>
      10:30  <hr className='flex-grow border-t border-gray-300'/> 12:30
      </Typography>
    </CardContent>
    <Tier/>
  </Card>
  )
}

export default TrainDetails