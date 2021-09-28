import React from "react";
import "./Loader.scss";

const SpinLoader: React.FC = () => {
  return (
    <div className="spin-loader">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default SpinLoader;
