import React from "react";
const EmptyState = ({ message }) => {
  return (
    <div className=" gap-5 text-center mt-52">
      <p className="text-red-600 text-xl text-center lg:text-3xl">{message}</p>
    </div>
  );
};

export default EmptyState;
