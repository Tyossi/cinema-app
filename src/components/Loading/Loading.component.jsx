import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import "./Loading.styles.css";

const Loading = ({ loading }) => {
  return (
    <div className="loading-container">
      <ClimbingBoxLoader size={10} color={"#ccc"} loading={loading} />
    </div>
  );
};
export default Loading;
