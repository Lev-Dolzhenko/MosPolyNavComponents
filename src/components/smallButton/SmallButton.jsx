import React from "react";

export const SmallButton = ({icon}) => {
  return (
    <>
      <button className="button button_small">
        <img src={icon} alt={icon} />
      </button>
    </>
  );
};
