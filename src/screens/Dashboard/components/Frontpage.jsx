import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TrainBg from "../../../assets/TrainBackground.jpg";
import Logo from "../../../assets/logo-no-background.svg";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TrainX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      sourceStation: data.get('sourceStation'),
      destinationStation: data.get('destinationStation'),
      dateoftravel:data.get('dateofTravel'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1580442374555-3def8fb41738?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbHxlbnwwfHwwfHx8MA%3D%3D)',
            objectFit:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  <Box
    sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar> */}
    {/* <Typography component="h1" variant="h5">
      TrainX
    </Typography> */}
    <img src={Logo} alt="" style={{ width: '200px', height: 'auto',marginBottom:'60px'}} />

    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  <Box sx={{ display: 'flex', gap: 2 }}>
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
  <TextField
    margin="normal"
    required
    fullWidth
    name="dateOfTravel"
    label=""
    type="date"
    id="dateOfTravel"
    autoComplete="dateOfTravel"
  />
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2, backgroundColor: 'green', color: 'white' }}
  >
    Find Trains
  </Button>
</Box>
<Copyright sx={{ mt: 5 }} />

  </Box>
</Grid>
      </Grid>
    </ThemeProvider>
  );
}