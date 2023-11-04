import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TrainBg from "../../../assets/TrainBackground.jpg";
import Logo from "../../../assets/logo-no-background.svg";
import TrainImg from "../../../assets/TrainImg.png";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      sourceStation: data.get("sourceStation"),
      destinationStation: data.get("destinationStation"),
      dateoftravel: data.get("dateofTravel"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          src={TrainImg}
          sx={{ objectFit: "cover", height: "100vh", width: "60vw" }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar> */}
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
            <Button variant="contained" color="primary" sx={{ mb: 2 }}>
              Hey, Travellers!
            </Button>
            <Typography variant="h5" sx={{ fontWeight: "light" }}>
              made your bookings experience easy !!
            </Typography>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="sourceStation"
                label="Source Station"
                name="sourceStation"
                autoComplete="sourceStation"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="destinationStation"
                label="Destination Station"
                type="text"
                id="destinationStation"
                autoComplete="destinationStation"
              />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dayjs()}
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
              onClick={() => {
                navigate("/availableTrains");
              }}
            >
              Find Trains
            </Button>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
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
