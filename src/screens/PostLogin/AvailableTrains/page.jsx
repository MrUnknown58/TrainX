import React from "react";
import { Box } from "@mui/material";
import TrainDetails from "./components/TrainDetails";
import { useSelector } from "react-redux";

const AvailableTrains = () => {
  const trainDetails = [
    {
      name: "12045 Darjeeling Express",
      arrival: "12:45 am",
      dept: "12:45 pm",
      seats: {
        sl: 24,
        ac3: 12,
        ac2: 32,
        ac1: 44,
      },
    },
    {
      name: "12049 Jalpaiguri Express",
      arrival: "12:45 am",
      dept: "12:45 pm",
      seats: {
        sl: 24,
        ac3: 12,
        ac2: 32,
        ac1: 44,
      },
    },
    {
      name: "12050 Siliguri Express",
      arrival: "12:45 am",
      dept: "12:45 pm",
      seats: {
        sl: 24,
        ac3: 12,
        ac2: 32,
        ac1: 44,
      },
    },
    {
      name: "12052 Guda Express",
      arrival: "12:45 am",
      dept: "12:45 pm",
      seats: {
        sl: 24,
        ac3: 12,
        ac2: 32,
        ac1: 44,
      },
    },
    {
      name: "12069 Dwiti Express",
      arrival: "12:45 am",
      dept: "12:45 pm",
      seats: {
        sl: 24,
        ac3: 12,
        ac2: 32,
        ac1: 44,
      },
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      paddingY={5}
      paddingX={5}
      bgcolor={"whitesmoke"}
      sx={{ overflowY: "auto", height: "100%" }}
    >
      {trainDetails?.map((details, index) => (
        <TrainDetails key={index} details={details} />
      ))}
    </Box>
  );
};

export default AvailableTrains;
