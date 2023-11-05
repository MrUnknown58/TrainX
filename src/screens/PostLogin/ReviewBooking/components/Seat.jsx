import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const Seat = ({ seats }) => {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent
          sx={{
            display: "flex",
            gap: "10px",
            bgcolor: "white",
            border: "none"
          }}
        >
          
        </CardContent>
        <CardActions></CardActions>
      </Card>
        );
    };

    export default Seat
