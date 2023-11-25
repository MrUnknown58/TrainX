import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";

const FinalBill = () => {
  const { stations, ticketInfo, billDetails, contactInfo } = useSelector(
    (state) => state.stationInfo
  );
  const trainInfo = ticketInfo.train;
  return (
    <div className="py-4">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        paddingX={5}
      >
        <Card
          sx={{
            marginBottom: 5,
            background: "white",
            width: "100%",
            paddingX: 3,
            paddingY: 2,
          }}
          className="space-y-[55px]"
        >
          <Box className="space-y-4 mb-14 text-center">
            <Box component={"span"} className=" ">
              <VerifiedIcon
                style={{ fill: "#31A91D", width: "50", height: "50" }}
              />
              <Typography className="flex  flex-col ">
                <p className="font-bold text-[#31A91D] text-4xl pb-2">
                  Congratulations! You have successfully booked tickets
                </p>
                <p className="font-light text-lg">
                  please carry ERS / VRM / SMS / Mail sent to your contact
                  details, along with a relavant ID proof while travelling
                </p>
              </Typography>
            </Box>
            <Box
              component={"div"}
              className="font-medium flex justify-between"
            ></Box>
          </Box>
        </Card>

        <Card
          sx={{
            marginBottom: 10,
            background: "white",
            width: "100%",
            paddingX: 3,
            paddingY: 2,
          }}
          className="space-y-[55px]"
        >
          <Box className="space-y-4 mb-14">
            <Box component={"span"} className="">
              <Typography className="flex justify-between pt-2 text-xl font-semibold">
                <p>
                  PNR No: {Math.floor(Math.random() * 9000000000) + 1000000000}
                </p>
                <p>
                  Transaction ID : {Math.random().toFixed(15).split(".")[1]}
                </p>
              </Typography>
            </Box>
            <Box component={"div"} className="font-medium flex justify-between">
              <span>
                {trainInfo?.train_id} - {trainInfo?.train_name}
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
            <Typography className="flex justify-between pt-2 text-xl font-semibold">
              <p>Total Charge:</p>
              <p>
                {parseInt(billDetails.base_fare, 10) *
                  ticketInfo?.passengers?.length +
                  Math.ceil(
                    0.18 *
                      parseInt(billDetails?.base_fare, 10) *
                      ticketInfo?.passengers?.length
                  )}
              </p>
            </Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default FinalBill;
