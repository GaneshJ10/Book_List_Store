import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-purple-700"></div>
    </div>
  );
};

export default Spinner;
