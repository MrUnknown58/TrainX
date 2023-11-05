import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import TrainSelected from './components/BoardingDetails';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const ReviewBooking = () => {
  return (
    <>
    <h2 className="text-3xl text-[#0578FF] font-bold bg-[whitesmoke] px-12 py-6">Review your booking</h2>
    <Box display={'flex'} justifyContent={'space-between'}    paddingY={5}
      paddingX={5}
      bgcolor={"whitesmoke"}>
   
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      sx={{ overflowY: "auto", height: "100%" }}
    >
      <Card sx={{ maxWidth: 650, minHeight: 200 }}>
      <CardContent>
      <div className='flex justify-between pb-4'>
        <h4 className='font-semibold text-xl'>Traveller Details</h4>
        <LocalHospitalIcon  style={{ fill: '#0578FF' }}/>
      </div>
      <div className='flex justify-between bg-sky-300 rounded-xl p-2 '>
        <p>1. Saswat Sharma</p>
        <div className='space-x-3'>
        <CreateIcon  style={{ fill: '#0578FF' }} />
       <DeleteIcon style={{fill: 'red'}}/>
        </div>
      </div>
      <div className=' py-4'>
      <h7 className='font-semibold'>Traveller Details</h7>
      <div className='flex justify-evenly  gap-10'>
      <TextField id="standard-basic" label="Name" variant="standard"  />
      <TextField id="standard-basic" label="Age" variant="standard" />
      <TextField id="standard-basic" label="Gender" variant="standard" />
      <TextField id="standard-basic" label="Nationality" variant="standard" />
      <button className='px-8 rounded-2xl bg-[#0578FF] text-white'>save</button>
      </div>
      </div>
      </CardContent>
    </Card>
      <Card sx={{ minWidth: 650, minHeight: 100 }}>
      <CardContent>
      <div className='flex gap-8 items-center pb-4'>
        <h4 className='font-semibold text-xl'>IRCTC login</h4>
        <p className='opacity-50 text-sm'>Password is required later to complete booking</p>
      </div>
      <div className=' flex flex-col'>
      <TextField id="standard-basic" label="Enter IRCTC user id" variant="standard" sx={{width:'100%', paddingBottom: '2vh'}} />
      <button className='px-8 py-2 rounded-2xl bg-[#0578FF] text-white'>verify</button>
      <div className='pt-4'>
      <Button variant="text">Create IRCTC Id</Button>
      <Button variant="text">Forget Id ?</Button>
      </div>
      </div>
      </CardContent>
    </Card>
      <Card sx={{ minWidth: 650, minHeight: 100 }}>
      <CardContent>
        <div className='flex items-center gap-4'>
        <h4 className='font-semibold text-xl'>Contact Details</h4>
          <p className='opacity-50 text-sm'>Your ticket info will be sent here</p>
        </div>
      <div className=' flex justify-between pt-4'>
      <TextField id="standard-basic" label="Phone no" variant="standard" sx={{width:'45%'}} />
      <TextField id="standard-basic" label="Email" variant="standard" sx={{width: '45%'}}  />
      </div>
      </CardContent>
    </Card>
    </Box>
          <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"end"}
      sx={{ overflowY: "auto", height: "100%" }}
    >
     <TrainSelected name={"Delhi-Bangalore Rajdhani"}   arrival={"12:45 am"}
      dept={"12:45 pm"}
      source = {"New Delhi"}
      destination = {"Bangalore"}/>
    </Box>
    </Box>
    </>
  )
}

export default ReviewBooking