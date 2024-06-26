import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import BillDetails from "../../components/BillDetails";
import OfferDetails from "../../components/Offers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
const PaymentPortal = () => {
  const { stations, ticketInfo, billDetails, contactInfo } = useSelector(
    (state) => state.stationInfo
  );
  const trainInfo = ticketInfo.train;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const details = [
    {
      name: "Base Ticket Fare",
      price: billDetails.base_fare,
    },
    {
      name: "Total Travellers",
      price: ticketInfo.passengers.length,
    },
    {
      name: "CGST & SGST",
      price: billDetails.tax,
    },
  ];

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            flexDirection: "column",
          }}
          className="space-y-4"
        >
          <Box sx={{ width: "30%" }}>
            <LinearProgress />
          </Box>
          <p className="text-white text-xl">
            Please wait, while we get your bills...
          </p>
        </div>
      )}
      <Box className="space-y-4">
        <h2 className="text-3xl text-[#0578FF] font-bold bg-[whitesmoke] px-12 py-6">
          Pay{" "}
          <span className="text-[#FF6060]">
            {" "}
            {parseInt(details[0].price, 10) * parseInt(details[1].price, 10) +
              Math.ceil(
                0.18 *
                  parseInt(details[0].price, 10) *
                  parseInt(details[1].price, 10)
              )}{" "}
          </span>
          to confirm Booking
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
                <span>
                  {trainInfo.train_id} - {trainInfo.train_name}
                </span>
                <span className="text-[#0578FF]">
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
            </Box>
            <Box className="space-y-4">
              <Typography className="font-semibold text-lg">
                Traveller Details
              </Typography>

              {ticketInfo.passengers.map((passenger, i) => (
                <div className="flex justify-between p-2 items-center space-x-1">
                  <p>{i + 1}.</p>
                  <p>{passenger.name}</p>
                  <p>{passenger.age}</p>
                  <p>{passenger.gender}</p>
                  <p>{passenger.nationality}</p>
                </div>
              ))}
            </Box>
            <Box className="space-y-4">
              <Box className="flex justify-between text-gray-600">
                <Typography>E-Tickets will be sent to:</Typography>
                <Box className="flex flex-col">
                  <Typography>{contactInfo?.phone} (Primary)</Typography>
                  <Typography>{contactInfo?.email}</Typography>
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
            <BillDetails details={details} total={billDetails} />
            <div className="flex space-x-4">
              <Button
                fullWidth
                color="success"
                variant="contained"
                onClick={() => {
                  console.log("Submitting...");
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    navigate("/finalBill");
                  }, 5000);
                }}
              >
                Pay Now
              </Button>
              <Button
                fullWidth
                color="error"
                variant="contained"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentPortal;
