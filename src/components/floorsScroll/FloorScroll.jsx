import React, { useState } from "react";

export const FloorScroll = () => {
  const [isActive, setIsActive] = useState(null);
  const countFloors = [1, 2, 3, 4, 5, 6, 7];

  const handleIsActive = (index) => {
    setIsActive(index);
  };

  return (
    <>
      <ul className="floors__list">
        {countFloors.map((number, index) => (
          <li
            key={index}
            className={`floors__item ${
              isActive === index ? "floors__item_active" : ""
            }`}
          >
            <button
              onClick={() => handleIsActive(index)}
              className="floors__button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
