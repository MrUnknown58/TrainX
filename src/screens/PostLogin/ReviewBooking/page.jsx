import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TrainSelected from "./components/BoardingDetails";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Link } from "react-router-dom";
import Bill from "./components/BilDetails";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import {
  deletePassengerInfo,
  editPassengerInfo,
  saveContactInfo,
  setPassengerInfo,
} from "../../../../redux/features/StationsInfo/StationsInfoSlice";

const ReviewBooking = () => {
  const { ticketInfo } = useSelector((state) => state.stationInfo);
  const { billDetails } = useSelector((state) => state.stationInfo);
  const details = [
    {
      name: "Base Ticket Fare",
      price: billDetails.base_fare,
    },
    {
      name: "Total Travellers",
      price: ticketInfo.passengers.length,
    },
    {
      name: "Base CGST & SGST",
      price: Math.ceil(
        0.18 * (billDetails.base_fare * ticketInfo.passengers.length)
      ),
    },
  ];
  console.log(billDetails);
  console.log(ticketInfo);
  const [add, setAdd] = useState("");
  const [contactInfo, setContactInfo] = useState({ phone: "", email: "" });
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-3xl text-[#0578FF] font-bold bg-[whitesmoke] px-12 py-4">
        Review your booking
      </h2>
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
          <Card sx={{ width: 700, minHeight: 200 }}>
            <CardContent>
              <div className="flex justify-between pb-4">
                <h4 className="font-semibold text-xl">Traveller Details</h4>
                <IconButton
                  aria-label="add"
                  color="#0578FF"
                  onClick={() => {
                    setAdd("add");
                  }}
                >
                  <AddBoxOutlinedIcon style={{ fill: "#0578FF" }} />
                </IconButton>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-bold items-center space-x-1">
                  <h5>No.</h5>
                  <h5>Name</h5>
                  <h5>Age</h5>
                  <h5>Gender</h5>
                  <h5>Nationality</h5>
                  <div className="space-x-3">
                    <p className="px-2">Actions</p>
                  </div>
                </div>
                {ticketInfo?.passengers.length === 0 && (
                  <div className="flex justify-center py-6 text-gray-400 rounded-xl p-2 items-center space-x-1">
                    Please add passengers to get started
                  </div>
                )}
                {ticketInfo?.passengers?.map((passenger, i) => (
                  <div className="flex justify-between bg-sky-300 rounded-xl p-2 items-center space-x-1">
                    <p>{i + 1}.</p>
                    <p>{passenger.name}</p>
                    <p>{passenger.age}</p>
                    <p>{passenger.gender}</p>
                    <p>{passenger.nationality}</p>
                    <div className="space-x-3">
                      <IconButton
                        aria-label="add"
                        color="#0578FF"
                        onClick={() => {
                          setAdd(i + 1);
                        }}
                      >
                        <CreateIcon style={{ fill: "#0578FF" }} />
                      </IconButton>
                      <IconButton
                        aria-label="add"
                        color="#0578FF"
                        onClick={() => {
                          dispatch(deletePassengerInfo({ id: passenger.id }));
                        }}
                      >
                        <DeleteIcon style={{ fill: "red" }} />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
              {add !== "" && (
                <AddOrEditPassenger
                  state={add}
                  ticketInfo={ticketInfo}
                  setAdd={setAdd}
                />
              )}
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 700, minHeight: 100 }}>
            <CardContent>
              <div className="flex gap-8 items-center pb-4">
                <h4 className="font-semibold text-xl">IRCTC login</h4>
                <p className="opacity-50 text-sm">
                  Password is required later to complete booking
                </p>
              </div>
              <div className=" flex flex-col">
                <TextField
                  id="standard-basic"
                  label="Enter IRCTC user id"
                  variant="standard"
                  sx={{ width: "100%", paddingBottom: "2vh" }}
                />
                <Button variant="contained" fullWidth>
                  verfiy
                </Button>
                <div className="pt-4">
                  <Button variant="text">Create IRCTC Id</Button>
                  <Button variant="text">Forget Id ?</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 700, minHeight: 100 }}>
            <CardContent>
              <div className="flex items-center gap-4">
                <h4 className="font-semibold text-xl">Contact Details</h4>
                <p className="opacity-50 text-sm">
                  Your ticket info will be sent here
                </p>
              </div>
              <div className=" flex justify-between pt-4">
                <TextField
                  id="standard-basic"
                  label="Phone no"
                  variant="standard"
                  sx={{ width: "45%" }}
                  required
                  value={contactInfo.phone}
                  onChange={(e) => {
                    setContactInfo({
                      phone: e.target.value,
                      email: contactInfo.email,
                    });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  sx={{ width: "45%" }}
                  required
                  value={contactInfo.email}
                  onChange={(e) => {
                    setContactInfo({
                      phone: contactInfo.phone,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <div className="px-4 pb-4">
            <Card
              sx={{
                background: "rgba(5, 120, 255, 0.1)",
                padding: 2,
                width: 700,
              }}
              className="space-y-4"
            >
              <TrainSelected ticketInfo={ticketInfo} />
            </Card>
          </div>
          <Bill details={details} total={billDetails} />
          <div className="w-full pb-1">
            <Link to={"/paymentportal"}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => dispatch(saveContactInfo(contactInfo))}
              >
                Book Now
              </Button>
            </Link>
          </div>
          <div className="w-full text-center">
            <Button variant="text" color="error">
              Cancel
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

const AddOrEditPassenger = ({ state, ticketInfo, setAdd }) => {
  const dispatch = useDispatch();
  const isEdit = typeof state === "number";
  const [formData, setFormData] = useState({
    name:
      isEdit && ticketInfo.passengers.length > state
        ? ticketInfo.passengers[state - 1].name
        : "",
    age:
      isEdit && ticketInfo.passengers.length > state
        ? ticketInfo.passengers[state - 1].age
        : "",
    gender:
      isEdit && ticketInfo.passengers.length > state
        ? ticketInfo.passengers[state - 1].gender
        : "",
    nationality:
      isEdit && ticketInfo.passengers.length > state
        ? ticketInfo.passengers[state - 1].nationality
        : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof state === "number") {
      dispatch(
        editPassengerInfo({
          ...formData,
          id: state - 1,
        })
      );
    } else {
      dispatch(
        setPassengerInfo({
          name: e.target.name.value,
          age: e.target.age.value,
          gender: e.target.gender.value,
          nationality: e.target.nation.value,
        })
      );
    }
    setAdd("add");
    setFormData({ name: "", age: "", gender: "", nationality: "" });
  };
  useEffect(() => {
    setFormData({
      name: isEdit ? ticketInfo.passengers[state - 1].name : "",
      age: isEdit ? ticketInfo.passengers[state - 1].age : "",
      gender: isEdit ? ticketInfo.passengers[state - 1].gender : "",
      nationality: isEdit ? ticketInfo.passengers[state - 1].nationality : "",
    });
  }, [state]);
  const ValidateFormData = () => {
    if (
      formData.name !== "" &&
      formData.age !== "" &&
      formData.gender !== "" &&
      formData.nationality !== ""
    )
      return true;
    return false;
  };
  return (
    <>
      <div className=" py-4">
        <h5 className="font-semibold">Traveller Details</h5>
        <form onSubmit={handleSubmit} className="flex justify-evenly  gap-10">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            name="age"
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Gender"
            variant="standard"
            name="gender"
            value={formData.gender}
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Nationality"
            variant="standard"
            name="nation"
            value={formData.nationality}
            onChange={(e) => {
              setFormData({ ...formData, nationality: e.target.value });
            }}
          />
          <button
            className="px-8 rounded-2xl bg-[#0578FF] text-white"
            type={ValidateFormData() ? "submit" : "button"}
          >
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewBooking;
