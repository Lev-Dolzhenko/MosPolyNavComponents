import React from "react";

import homeIcon from "./homeIcon.svg";

export const ButtonHome = () => {
  return (
    <>
      <button className="button button_burger">
        <img src={homeIcon} alt="home icon" />
      </button>
    </>
  );
};
