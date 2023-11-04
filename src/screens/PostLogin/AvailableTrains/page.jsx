import React from 'react'
import { Box, Typography } from '@mui/material';
import TrainDetails from './components/TrainDetails';



const AvailableTrains = () => {
  return ( 
    <>
    {/* <Navbar/> */}
    <Box display={'flex'} flexDirection={'column'}  gap={2} alignItems={'end'} bgcolor={'whitesmoke'}paddingY={5} paddingX={5} sx={{overflowY:'auto'}}>
    <TrainDetails name= {'12045 Darjeeling Express'} arrival={'12:45 am'} dept={'12:45 pm'}/>
  <TrainDetails name= {'12049 Jalpaiguri Express'} arrival={'13:45 am'} dept={'5:45 pm'}/>
  <TrainDetails name= {'12050 Siliguri Express'} arrival={'13:45 am'} dept={'5:45 pm'}/>
  <TrainDetails name= {'12052 Guda Express'} arrival={'13:45 am'} dept={'10:45 pm'}/>
  <TrainDetails name= {'12069 Dwiti Express'} arrival={'13:45 pm'} dept={'5:45 am'}/>
  </Box>
  </>
  )
}

export default AvailableTrains