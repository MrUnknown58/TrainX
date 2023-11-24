import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Class from "./Class";
import { Link } from "react-router-dom";
const Tier = ({ seats }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to={"/reviewBooking"}>
          <Class tier={"General"} seats={seats?.general_class} bgcolor={"#ACFF9F"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"SL"} seats={seats?.general_class - seats?.first_class - 10} bgcolor={"#FFCDCD"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"3AC"} seats={seats?.first_class} bgcolor={"#FF9C27"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"2AC"} seats={seats?.first_class - 10} bgcolor={"crimson"} />
        </Link>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Tier;
