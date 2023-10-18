import callAPI from "../../../utils/apiHandler";
import { setDummyValue } from "./dummySlice";

export const getFeedThunk = (payload) => (dispatch) => {
  console.log("calling callAPI");
  callAPI({
    payload,
    dispatch,
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataAction: setDummyValue, //dataAction is the action creator that will return the action object to be dispatched
  });
};
