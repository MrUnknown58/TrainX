import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrainImg from "../../../assets/TrainImg.png";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFromStationThunk,
  getToStationThunk,
} from "../../../../redux/features/StationsInfo/StationsInfoThunk";
import { Autocomplete } from "@mui/material";
import { setBookingStn } from "../../../../redux/features/StationsInfo/StationsInfoSlice";

export default function SignInSide() {
  const navigate = useNavigate();
  const { from, to } = useSelector((state) => state.stationInfo);
  const dispatch = useDispatch();
  const [sourceStn, setSourceStn] = useState("");
  const [destStn, setDestStn] = useState("");
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  console.log(to);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setBookingStn({ sourceStn, destStn }));
    navigate("/availableTrains");
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
          {/* <img src={Logo} alt="" style={{ width: '200px', height: 'auto',marginBottom:'60px'}} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              my: 5,
            }}
          >
            <div className="bg-[#0578FF] text-white px-4 py-2 mb-4 rounded-full hover:bg-sky-600">
              Hey Travellers
            </div>
            {/* <Button variant="contained" color="primary" sx={{ mb: 2 }}>
    Hey, Travellers!
  </Button> */}
            <Typography variant="h5" sx={{ fontWeight: "semi-bold" }}>
              made your bookings experience easy !!
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
                  id="free-solo-demo"
                  freeSolo
                  fullWidth
                  value={sourceStn}
                  options={from.map((option) => option[1] + " - " + option[0])}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Source"
                      onChange={(e) => {
                        setSourceStn(e.target.value);
                        e.target.value.length >= 2 &&
                          dispatch(
                            getFromStationThunk({ search: e.target.value })
                          );
                      }}
                    />
                  )}
                />
              </Box>
              <Box width={"100%"}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  fullWidth
                  value={destStn}
                  options={to.map((option) => option[1] + " - " + option[0])}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Destination"
                      onChange={(e) => {
                        setDestStn(e.target.value);
                        e.target.value.length >= 2 &&
                          dispatch(
                            getToStationThunk({ search: e.target.value })
                          );
                      }}
                    />
                  )}
                />
              </Box>
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
              // onClick={() => {
              // navigate("/availableTrains");
              // }}
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
