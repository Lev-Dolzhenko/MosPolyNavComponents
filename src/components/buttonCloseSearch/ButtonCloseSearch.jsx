import React from "react";

import closeIcon from "./closeIcon.svg";

export const ButtonCloseSearch = () => {
  return (
    <>
      <button className="button buttom_close">
        <img src={closeIcon} alt="close icon" />
      </button>
    </>
  );
};
