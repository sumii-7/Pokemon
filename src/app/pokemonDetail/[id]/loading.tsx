import React from "react";

const loading = () => {
  return (
    <div className="text-white flex justify-center items-center h-screen">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default loading;
