import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrainImg from "../../../assets/TrainImg.png";
import SignImg from "../../../assets/sign-img.jpeg";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import data from "../../../../trainInfo.json";
import { Autocomplete } from "@mui/material";
import { setBookingStn } from "../../../../redux/features/StationsInfo/StationsInfoSlice";
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function SignInSide() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sourceStn, setSourceStn] = useState("");
  const [destStn, setDestStn] = useState("");
  const [date, setDate] = useState(dayjs());
  const location = useLocation().pathname;
  const isDashboard = location === "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      setBookingStn({
        source: sourceStn,
        destination: destStn,
        date: date.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          weekday: "short",
        }),
      })
    );
    console.log(
      date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        weekday: "short",
      })
    );
    navigate("/availableTrains");
  };
  const [destination, setDestination] = useState(data.trains);
  const [source, setSource] = useState(data.trains);
  useEffect(() => {
    let result = data.trains.reduce((acc, obj) => {
      const key = obj.destination; // Assuming 'id' is the key you want to make unique
      if (!acc[key]) {
        acc[key] = obj;
      }
      return acc;
    }, {});
    result = Object.values(result);
    setDestination(result);
  }, []);
  useEffect(() => {
    let result = data.trains.reduce((acc, obj) => {
      const key = obj.source; // Assuming 'id' is the key you want to make unique
      if (!acc[key]) {
        acc[key] = obj;
      }
      return acc;
    }, {});
    result = Object.values(result);
    setSource(result);
  }, []);
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      className="overflow-hidden"
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          component={"img"}
          src={isDashboard ? TrainImg : SignImg}
          sx={{ objectFit: "cover", height: "100vh", width: "65vw" }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {isDashboard ? (
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <div className="text-3xl text-[#0578FF]  flex">
                <span className="text-black">Train</span>{" "}
                <span className="italic">X</span>
              </div>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                my: 5,
              }}
            >
              <div className="bg-[#0578FF] text-white px-4 py-2 mb-4 rounded-full hover:bg-sky-600 cursor-pointer">
                Hey Travellers
              </div>
              <Typography variant="h5" className="font-medium">
                Made your Bookings Experience Easy !!
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              gap={3}
              display={"flex"}
              flexDirection={"column"}
              sx={{ mt: 1, width: "80%" }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box width={"100%"}>
                  <Autocomplete
                    onInputChange={(event, value) => {
                      setSourceStn(value);
                    }}
                    id="free-solo-demo"
                    freeSolo
                    fullWidth
                    disableClearable
                    value={sourceStn}
                    options={source?.map((option) => option.source)}
                    renderInput={(params) => (
                      <TextField {...params} label="Source" />
                    )}
                  />
                </Box>
                <Box width={"100%"}>
                  <Autocomplete
                    onInputChange={(event, value) => {
                      setDestStn(value);
                    }}
                    id="free-solo-demo"
                    disableClearable
                    freeSolo
                    fullWidth
                    value={destStn}
                    options={destination?.map((option) => option.destination)}
                    renderInput={(params) => (
                      <TextField {...params} label="Destination" />
                    )}
                  />
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={date}
                    onChange={(e) => {
                      setDate(e.$d);
                      console.log(e.$d);
                    }}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        label="Term Start Date"
                        id="mui-pickers-date"
                        sx={{ mb: 2, width: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "green", color: "white" }}
              >
                Find Trains
              </Button>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        ) : (
          <Box className="flex justify-center py-12 w-full">
            {location === "/sign-in" ? (
              <SignIn routing="path" path="/sign-in" />
            ) : (
              <SignUp routing="path" path="/sign-up" />
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TrainX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
