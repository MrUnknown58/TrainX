import { Box, Card, Typography } from "@mui/material";
import React from "react";
const Bill = ({ details, total }) => {
  return (
    <Box className="p-4">
      <Card
        className="p-4 space-y-6 rounded-md shadow-none border-2
      "
        sx={{
          width: 700,
          minHeight: 100,
        }}
      >
        <Typography className="text-xl font-normal">Bill Details</Typography>
        <Box className="space-y-2 text-gray-500 px-2">
          {details?.map((item) => (
            <Typography className="flex justify-between text-sm">
              <p>{item?.name}</p>
              <p>{item?.price}</p>
            </Typography>
          ))}
        </Box>
        <Box className="space-y-6">
          <Typography className="text-sm text-gray-600">
            After applying discounts and offers
          </Typography>
          <Typography className="flex justify-between">
            <p>Total Charge:</p>
            <p>
              {parseInt(details[0].price, 10) * parseInt(details[1].price, 10) +
                Math.ceil(
                  0.18 *
                    parseInt(details[0].price, 10) *
                    parseInt(details[1].price, 10)
                )}
            </p>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Bill;
