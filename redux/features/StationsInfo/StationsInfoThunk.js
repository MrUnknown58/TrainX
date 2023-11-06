import callAPI from "../../../utils/apiHandler";
import { setFromStation, setToStation } from "./StationsInfoSlice";
const headers = {
  "content-type": "application/json",
  "Content-Type": "application/json",
  "X-RapidAPI-Key": "c315392f60mshc9c59c2b40cbc9cp128af6jsn31b94472cf73",
  "X-RapidAPI-Host": "rstations.p.rapidapi.com",
};
export const getFromStationThunk = (payload) => (dispatch) => {
  console.log("calling callAPI");
  callAPI({
    payload,
    dispatch,
    headers: headers,
    method: "POST",
    url: "https://rstations.p.rapidapi.com/",
    dataAction: setFromStation, //dataAction is the action creator that will return the action object to be dispatched
  });
};
export const getToStationThunk = (payload) => (dispatch) => {
  console.log("calling callAPI");
  callAPI({
    payload,
    dispatch,
    headers: headers,
    method: "POST",
    url: "https://rstations.p.rapidapi.com/",
    dataAction: setToStation, //dataAction is the action creator that will return the action object to be dispatched
  });
};
