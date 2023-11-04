import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Tier from './components/Tier';
import TrainDetails from './components/TrainDetails';
import { Train } from '@mui/icons-material';


const AvailableTrains = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}  gap={2} alignItems={'end'}
    paddingY={5} paddingX={5} sx={{backgroundColor: 'gray'}}>
    <TrainDetails name={{name : '12045 Darjeeling Express', arrival : '12:45 am', dept: '12:45 pm' }}/>
  <TrainDetails/>
  </Box>
  )
}

export default AvailableTrains