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
          {details?.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          alignItems={"center"}
        >
          {details?.arrival}{" "}
          <hr className="flex-grow border-t border-gray-300" /> {details?.dept}
        </Typography>
      </CardContent>
      <Tier />
    </Card>
  );
};

export default TrainDetails;
