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
          <Class tier={"SL"} seats={seats?.sl} bgcolor={"greenYellow"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"3AC"} seats={seats?.ac3} bgcolor={"pink"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"2AC"} seats={seats?.ac2} bgcolor={"tan"} />
        </Link>
        <Link to={"/reviewBooking"}>
          <Class tier={"1AC"} seats={seats?.ac1} bgcolor={"tan"} />
        </Link>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Tier;
