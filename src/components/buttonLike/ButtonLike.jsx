import React from "react";

import heartIcon from './heartIcon.svg'

export const ButtonLike = () => {
  return (
    <>
      <button className="button button_burger">
        <img src={heartIcon} alt="heart icon" />
      </button>
    </>
  );
};
