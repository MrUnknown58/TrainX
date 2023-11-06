import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from "@mui/material/Card";
import VerifiedIcon from '@mui/icons-material/Verified';



const FinalBill = () => {
  return (
    <div className='py-4'>
    <Box
    display={"flex"}
    flexDirection={'column'}
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
              <Box component={"span"} 
              className=" ">
            <VerifiedIcon style={{fill: '#31A91D', width: "50",height: "50" }}/>
              <Typography className="flex  flex-col ">
            <p className='font-bold text-[#31A91D] text-4xl pb-2'>Congratulations! You have successfully booked tickets</p>
            <p className='font-light text-lg'>please carry ERS / VRM / SMS / Mail sent to your contact details, along with a relavant ID proof while travelling</p>
          </Typography>
              </Box>
              <Box
                component={"div"}
                className="font-medium flex justify-between"
              >
            </Box>
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
            <p>PNR No: 1234567890</p>
            <p>Transaction ID : 351511859256378</p>
          </Typography>
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
              <Typography className="flex justify-between pt-2 text-xl font-semibold">
            <p>Total Charge:</p>
            <p>3500</p>
          </Typography>
            </Box>
            </Card>
  </Box>
  </div>
  );
};

export default FinalBill