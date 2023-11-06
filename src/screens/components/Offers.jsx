import { Box, Card, Typography } from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";

const OfferDetails = () => {
  return (
    <Box className="p-4">
      <Card className="p-4 space-y-6 rounded-md shadow-none border-2">
        <Typography className="text-xl font-normal">Offers</Typography>
        <Box className="space-y-2 text-gray-500 px-2">
          <Typography className="text-sm space-y-3">
            <p className="text-sm">
              <PercentIcon
                style={{
                  background: "#0578FF",
                  color: "white",
                  marginRight: "10px",
                  borderRadius: "25px",
                }}
              />
              50% off up to ₹100 | Use code BOOKNOW
            </p>
            <p>
              <PercentIcon
                style={{
                  background: "#0578FF",
                  color: "white",
                  marginRight: "10px",
                  borderRadius: "25px",
                }}
              />
              20% off | Use code FIRSTTIME
            </p>
          </Typography>
        </Box>{" "}
      </Card>
    </Box>
  );
};

export default OfferDetails;
