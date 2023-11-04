import React from "react";
import { Box } from "@mui/material";
import TrainDetails from "./components/TrainDetails";

const AvailableTrains = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      paddingY={5}
      paddingX={5}
      sx={{ backgroundColor: "gray" }}
    >
      <TrainDetails
        details={{
          name: "12045 Darjeeling Express",
          arrival: "12:45 am",
          dept: "12:45 pm",
        }}
      />
      <TrainDetails
        details={{
          name: "12045 Darjeeling Express",
          arrival: "12:45 am",
          dept: "12:45 pm",
        }}
      />
    </Box>
  );
};

export default AvailableTrains;
