import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";

const TrainSelected = ({ ticketInfo }) => {
  const trainInfo = ticketInfo.train;
  const { stations } = useSelector((state) => state.stationInfo);
  return (
    <Box className="space-y-4 mb-2">
      <Box component={"span"} className="font-semibold text-xl underline">
        Boarding Details
      </Box>
      <Box component={"div"} className="font-medium flex justify-between">
        <span>
          {trainInfo.train_id} - {trainInfo.train_name}
        </span>
        <span className="text-[#0578FF] uppercase">
          {trainInfo.booking_class} & Tatkal Quota
        </span>
      </Box>
      <Box marginBottom={55}>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <p>{stations.date}</p>
          <p>{stations.date}</p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <p>{trainInfo.arrival_time}</p>
          <p>{trainInfo.departure_time}</p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          alignItems={"center"}
          className="space-x-2"
        >
          <p className="pr-3">{trainInfo.source}</p>{" "}
          <hr className="flex-grow border-t border-gray-300" />
          <p className="pl-3">{trainInfo.destination}</p>
        </Typography>
      </Box>
      <Button variant="outlined">Change the Boarding station</Button>
    </Box>
  );
};

export default TrainSelected;
