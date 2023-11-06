import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import TrainSelected from "../ReviewBooking/components/BoardingDetails";
import BillDetails from "../../components/BillDetails";
import OfferDetails from "../../components/Offers";

const PaymentPortal = () => {
  const details = [
    {
      name: "Base Ticket Fare",
      price: "Rs. 3000",
    },
    {
      name: "Total Travellers",
      price: "4",
    },
    {
      name: "CGST & SGST",
      price: "Rs. 500",
    },
  ];
  return (
    <>
      <Box className="space-y-4">
        <h2 className="text-3xl text-[#0578FF] font-bold bg-[whitesmoke] px-12 py-6">
          Pay <span className="text-[#FF6060]"> Rs.3500 </span>to confirm
          Booking
        </h2>
        <Box
          display={"flex"}
          gap={10}
          justifyContent={"space-between"}
          paddingX={5}
        >
          <Card
            sx={{
              marginBottom: 10,
              background: "rgba(5, 120, 255, 0.1)",
              width: "100%",
              paddingX: 3,
              paddingY: 2,
            }}
            className="space-y-[55px]"
          >
            <Box className="space-y-4 mb-14">
              <Box component={"span"} className="font-semibold text-xl">
                Boarding Details
              </Box>
              <Box
                component={"div"}
                className="font-medium flex justify-between"
              >
                <span>12430 - NDLS LKO AC SF</span>
                <span className="text-[#0578FF]">Class 2A & Tatkal Quota</span>
              </Box>
              <Box marginBottom={55}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <p>Nov 16</p>
                  <p>Nov 17</p>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <p>11:25 pm</p>
                  <p>7:25 am</p>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display={"flex"}
                  alignItems={"center"}
                  className="space-x-2"
                >
                  <p className="pr-3">NDLS - New Delhi</p>{" "}
                  <hr className="flex-grow border-t border-gray-300" />
                  <p className="pl-3">HWH - Howrah</p>
                </Typography>
              </Box>
            </Box>
            <Box className="space-y-4">
              <Typography className="font-semibold text-lg">
                Traveller Details
              </Typography>
              <Box className="flex justify-between text-gray-600">
                <Typography>Saswat Sharma</Typography>
                <Typography>21 yrs</Typography>
                <Typography>Prefer Not to Say</Typography>
                <Typography>Lower Berth</Typography>
              </Box>
            </Box>
            <Box className="space-y-4">
              <Box className="flex justify-between text-gray-600">
                <Typography>E-Tickets will be sent to:</Typography>
                <Box className="flex flex-col">
                  <Typography>Saswat Sharma (Primary)</Typography>
                  <Typography>saswattickettoMaljn@gmail.com</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
          <Box
            sx={{
              marginBottom: 10,
              width: "80%",
            }}
            className="flex flex-col justify-center"
          >
            <OfferDetails />
            <BillDetails details={details} total={"Rs.3500"} />
            <Button color="error">Cancel</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentPortal;
