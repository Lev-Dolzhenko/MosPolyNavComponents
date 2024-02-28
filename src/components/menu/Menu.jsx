import React from "react";

import closeIcon from "./closeIcon.svg";
import serviceIcon from "./serviceIcon.svg";
import problemIcon from "./problemIcon.svg";
import settingsIcon from "./settingsIcon.svg";
import logotype from "./logotype.png";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <>
      <div className="menu__wrapper">
        <div className="menu">
          <button className="menu__button_close">
            <img src={closeIcon} alt="close icon" />
          </button>
          <div className="menu__title">
            <h3 className="title3 title3_menu">
              Путеводитель Московского Политеха
            </h3>
          </div>
          <ul className="menu__list">
            <MenuItem icon={serviceIcon} text={"О сервисе"} />
            <MenuItem icon={problemIcon} text={"Сообщить о проблеме"} />
            <MenuItem icon={settingsIcon} text={"Настройки"} />
          </ul>
        </div>
        <div className="menu__info">
          <div className="menu__logotype">
            <img src={logotype} alt="logotype" />
          </div>
          <span className="menu__text">
            Сделано студентами проекта “Путеводитель по Московскому Политеху”
          </span>
        </div>
      </div>
    </>
  );
};
