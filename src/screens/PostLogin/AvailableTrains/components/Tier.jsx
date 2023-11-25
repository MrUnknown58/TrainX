import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Class from "./Class";
import { Link } from "react-router-dom";
const Tier = ({ seats , details}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to={"/reviewBooking"}>
          <Class tier={"General"} seats={seats?.general_class} bgcolor={"#ACFF9F"} details={details} price={"500"}/>
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"SL"} seats={seats?.general_class - seats?.first_class - 10} bgcolor={"#FFCDCD"}  details={details} price={"800"}/>
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"3AC"} seats={seats?.first_class} bgcolor={"#FF9C27"} details={details} price={"1200"}/>
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"2AC"} seats={seats?.first_class - 10} bgcolor={"crimson"} details={details} price={"1500"}/>
        </Link>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Tier;
