import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from '@mui/material';

const TrainSelected = ({name, source, destination, arrival, dept}) => {
  return (
    <Box className="space-y-4 mb-2">
    <Box component={"span"} className="font-semibold text-xl">
      Boarding Details
    </Box>
    <Box
      component={"div"}
      className="font-medium flex justify-between"
    >
      <span>12430 - NDLS LKO AC SF</span>
      <span className="text-[#0578FF]">Class 2A & Tatkal Quota</span>
    </Box>
    <Box marginBottom={55}>
      <Typography
        variant="body2"
        color="text.secondary"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <p>Nov 16</p>
        <p>Nov 17</p>
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <p>11:25 pm</p>
        <p>7:25 am</p>
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        display={"flex"}
        alignItems={"center"}
        className="space-x-2"
      >
        <p className="pr-3">NDLS - New Delhi</p>{" "}
        <hr className="flex-grow border-t border-gray-300" />
        <p className="pl-3">HWH - Howrah</p>
      </Typography>
    </Box>
      <Button variant="outlined">Change the Boarding station</Button>
  </Box>
  )
}

export default TrainSelected