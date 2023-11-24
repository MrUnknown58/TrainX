import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tier from "./Tier";

const TrainDetails = ({ details }) => {
  return (
    <Card sx={{ minWidth: 600 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details?.train_name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          justifyContent={'space-between'}
          alignItems={"center"}
        >
          {details?.source}{" "}
          <hr className="flex-grow border-t border-white" />
        {details?.destination}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          alignItems={"center"}
        >
          {details?.arrival_time}{" "}
          <hr className="flex-grow border-t border-gray-300" /> {details?.departure_time}
        </Typography>
      </CardContent>
      <Tier seats={details?.seats} />
    </Card>
  );
};

export default TrainDetails;
