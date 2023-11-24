import React from "react";
import { Box, Button, TextField } from "@mui/material";
import TrainDetails from "./components/TrainDetails";
import { useSelector } from "react-redux";
import TuneIcon from '@mui/icons-material/Tune';
import data from "../../../../trainInfo.json";

const AvailableTrains = () => {
  // const trainDetails = [
  //   {
  //     name: "12045 Darjeeling Express",
  //     source: "Kolkata",
  //     destination: "Jalpaiguri",
  //     arrival: "12:45 am",
  //     dept: "12:45 pm",
  //     seats: {
  //       sl: 24,
  //       ac3: 12,
  //       ac2: 32,
  //       ac1: 44,
  //     },
  //   },
  //   {
  //     name: "12049 Jalpaiguri Express",
  //     source: "Kolkata",
  //     destination: "Jalpaiguri",
  //     arrival: "12:45 am",
  //     dept: "12:45 pm",
  //     seats: {
  //       sl: 24,
  //       ac3: 12,
  //       ac2: 32,
  //       ac1: 4,
  //     },
  //   },
  //   {
  //     name: "12050 Siliguri Express",
  //     source : "Kolkata",
  //     destination: "Siliguri",
  //     arrival: "12:45 am",
  //     dept: "12:45 pm",
  //     seats: {
  //       sl: 240,
  //       ac3: 12,
  //       ac2: 32,
  //       ac1: 44,
  //     },
  //   },
  //   {
  //     arrival: "12:45 am",
  //     dept: "12:45 pm",
  //     name: "Chennai-Kolkata Superfast",
  //     source: "Chennai",
  //     destination: "Kolkata",
  //     seats: {
  //       sl: 24,
  //       ac3: 120,
  //       ac2: 32,
  //       ac1: 44,
  //     },
  //   },
  //   {
  //     name: "Delhi-Bangalore Rajdhani",
  //     arrival: "12:45 am",
  //     dept: "12:45 pm",
  //     source: "New Delhi",
  //     destination: "Bangalore",
  //     seats: {
  //       sl: 240,
  //       ac3: 102,
  //       ac2: 32,
  //       ac1: 44,
  //     },
  //   },
  // ];
  const { stations } = useSelector((state) => state.stationInfo);
  console.log(stations)
const trainDetails = data.trains.filter((train)=>(train.source===stations.source && train.destination === stations.destination))
console.log(stations);
  return (
    <>
    <Box display={'flex'} justifyContent={'space-between'}    paddingY={5}
      paddingX={5}
      bgcolor={"whitesmoke"}>
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      sx={{ overflowY: "auto", height: "100%" }}
    >
        <div className="flex items-start flex-col p-4 gap-6">
        <h2 className="text-2xl text-[#0578FF] font-bold">Your Search Results</h2>
        <div className="flex items-center justify-between gap-20">
        <TextField id="standard-basic" label="Source" variant="standard" />
        <TextField id="standard-basic" label="Destination" variant="standard" />
        </div>
        <Button variant="contained" fullWidth>Search for trains</Button>
        </div>
  
    </Box>

   <Box>
          <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl text-slate-700 font-bold border-b-2 border-black">Available Trains</h2>
          <TuneIcon style={{ fill: '#0578FF' }}  />
          </div>
          <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      sx={{ overflowY: "auto", height: "100%" }}
    >
        
      {trainDetails?.map((details, index) => (
        <TrainDetails key={index} details={details} />
      ))}
    </Box>
    </Box>
    </Box>
    </>
  );
};

export default AvailableTrains;
