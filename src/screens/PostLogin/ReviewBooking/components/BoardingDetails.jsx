import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';

const TrainSelected = ({name, source, destination, arrival, dept}) => {
  return (
<Card sx={{ minWidth: 500 }}>
      <CardContent>
        <div className='flex justify-between'>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography component="div" variant='h7' color={"#0578FF"}>Class 2A</Typography>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          justifyContent={'space-between'}
          alignItems={"center"}
        >
          {source}{" "}
          <hr className="flex-grow border-t border-white" />
        {destination}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          alignItems={"center"}
        >
          {arrival}{" "}
          <hr className="flex-grow border-t border-gray-300" /> {dept}
        </Typography>
      </CardContent>
      <div className='p-4'>
      <Button variant="outlined">Change the Boarding station</Button>
      </div>
    </Card>
  )
}

export default TrainSelected