import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
// import { usePromiseTracker } from "react-promise-tracker";
// import { Loader } from "react-loader-spinner";
//import "./spinner.css";

export const Spinner = (props) => {
  //   const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {/* <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /> */}
      {/* <p>Loading ..</p> */}
      <BeatLoader color="#22c55e" size={20}/>
    </div>
  );
};
