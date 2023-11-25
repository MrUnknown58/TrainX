import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateBillDetails, updateTrainInfo } from "../../../../../redux/features/StationsInfo/StationsInfoSlice";

const Class = ({ tier, seats, bgcolor, details, price }) => {
  const dispatch = useDispatch();
  return (
    <Box
      component={"div"}
      onClick={()=>{
        dispatch(updateTrainInfo({...details, booking_class : tier}))
        dispatch(updateBillDetails({base_fare : price, tax : Math.ceil(0.18 * price)}))
      }}
      sx={{
        backgroundColor: bgcolor,
        width: "6rem",
        height: "fit-content",
        borderRadius: "10px",
        padding: "2vh",
      }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {tier}
      </Typography>
      <Typography variant="h7" component="div">
        {seats} seats
      </Typography>
      <Typography variant="h8" component="div">
        Available
      </Typography>
    </Box>
  );
};

export default Class;
