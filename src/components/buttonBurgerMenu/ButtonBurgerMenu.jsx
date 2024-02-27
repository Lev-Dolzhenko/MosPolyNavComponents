import React from "react";

import burgerIcon from "./burgerIcon.svg";
export const BurgerMenu = () => {
  return (
    <>
      <button className="button button_burger">
        <img src={burgerIcon} alt="burger icon" />
      </button>
    </>
  );
};
