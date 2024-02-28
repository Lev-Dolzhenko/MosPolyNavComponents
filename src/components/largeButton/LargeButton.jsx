import React from "react";

export const LargeButton = ({ icon }) => {
  return (
    <>
      <button className="button button_large">
        <img src={icon} alt={icon} />
      </button>
    </>
  );
};
