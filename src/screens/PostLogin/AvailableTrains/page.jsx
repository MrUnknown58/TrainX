import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TrainDetails from "./components/TrainDetails";
import { useDispatch, useSelector } from "react-redux";
import TuneIcon from "@mui/icons-material/Tune";
import data from "../../../../trainInfo.json";
import { setBookingStn } from "../../../../redux/features/StationsInfo/StationsInfoSlice";

const AvailableTrains = () => {
  const { stations } = useSelector((state) => state.stationInfo);
  console.log(stations);
  const dispatch = useDispatch();
  const [trainDetails, setTrainDetails] = useState([]);
  useEffect(() => {
    setTrainDetails(
      data.trains.filter(
        (train) =>
          train.source.toLowerCase().includes(stations.source.toLowerCase()) &&
          train.destination
            .toLowerCase()
            .includes(stations.destination.toLowerCase())
      )
    );
  }, [stations]);

  const [source, setSource] = useState(stations?.source);
  const [destination, setDestination] = useState(stations?.destination);
  const handleStations = (e) => {
    e.preventDefault();
    dispatch(setBookingStn({ source, destination }));
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        paddingY={5}
        paddingX={5}
        bgcolor={"whitesmoke"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"end"}
          sx={{ overflowY: "auto", height: "100%" }}
        >
          <div className="flex items-start flex-col p-4 gap-6">
            <h2 className="text-2xl text-[#0578FF] font-bold">
              Your Search Results
            </h2>
            <div className="flex items-center justify-between gap-20">
              <TextField
                id="standard-basic"
                label="Source"
                variant="standard"
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
              <TextField
                id="standard-basic"
                label="Destination"
                variant="standard"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <Button variant="contained" fullWidth onClick={handleStations}>
              Search for trains
            </Button>
          </div>
        </Box>

        <Box>
          <div className="flex items-center justify-between p-4">
            <h2 className="text-2xl text-slate-700 font-bold border-b-2 border-black">
              Available Trains
            </h2>
            <TuneIcon style={{ fill: "#0578FF" }} />
          </div>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"end"}
            sx={{ overflowY: "auto", height: "100%" }}
          >
            {trainDetails.length > 0 ? (
              trainDetails?.map((details, index) => (
                <TrainDetails key={index} details={details} />
              ))
            ) : (
              <p className="text-3xl">No trains between the given stations</p>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AvailableTrains;
