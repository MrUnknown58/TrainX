import axios from "axios";
// import { loadingSucceeded } from "../redux/apiStatus/apiStatusSlice";
// import { loadingFailed } from "../redux/apiStatus/apiStatusSlice";
import {
  startLoading,
  loadingSucceeded,
  loadingFailed,
} from "../redux/features/apiStatus/apiStatusSlice";

const debugMode = true;

async function callAPI({ payload, dispatch, method, url, dataAction }) {
  console.log("URL: " + url);
  var response;
  try {
    const config = {
      method: method,
      // url: process.env.REACT_APP_BASE_URL + apiEndpoint,
      url: url,
      data: payload,
    };
    console.log(config);
    dispatch(startLoading({ apiEndpoint: url.split("/").pop() }));
    response = await axios(config);
    if (debugMode) {
      //   console.log("%c API Success", "color: green; font-weight: bold", {
      //     requestData: payload,
      //     responseData: response.data,
      //     method,
      //     // url: process.env.REACT_APP_BASE_URL + apiEndpoint,
      //     url: url,
      //   });
      console.log(
        "\n😛API Success  =>  ",
        response.config.url,
        "\n",
        " 🅿️ API Parameters => ",
        payload,
        "\n",
        " ⚡ Action Name => ",
        method,
        "\n",
        " ✅API Response => ",
        response.data
      );
    }
    dispatch(
      loadingSucceeded({
        apiEndpoint: url.split("/").pop(),
        message: response.data.Message,
      })
    );
    return dispatch(dataAction({ data: response.data }));
  } catch (error) {
    if (debugMode) {
      console.log("%c API Failed", "color: red; font-weight: bold", {
        requestData: payload,
        method,
        response: response,
        // url: process.env.REACT_APP_BASE_URL + apiEndpoint,
        url: url,
        error: error,
      });
    }
    return dispatch(
      loadingFailed({
        apiEndpoint: url.split("/").pop(),
        error: error.message,
        message: error.response.statusText,
      })
    );
  }
}

export default callAPI;
