import { ButtonZoom } from "./components/buttonZoom/ButtonZoom";
import { FloorScroll } from "./components/floorsScroll/FloorScroll";
import { Menu } from "./components/menu/Menu";
import { SearchInput } from "./components/searchInput/SearchInput";
import { SearchFloor } from "./components/searchFloor/SearchFloor";
import { LargeButton } from "./components/largeButton/LargeButton";
import { SmallButton } from "./components/smallButton/SmallButton";

import burgerIcon from "./images/burgerIcon.svg";
import heartIcon from "./images/heartIcon.svg";
import homeIcon from "./images/homeIcon.svg";
import womanIcon from "./images/womanIcon.svg";
import menIcon from "./images/menIcon.svg";
import closeIcon from "./images/closeIcon.svg";

function App() {
  return (
    <div className="app">
      <div className="container continer__app">
        <div className="app__grid">
          <div className="app__item">
            <FloorScroll />
          </div>
          <div className="app__item">
            <ButtonZoom />
          </div>
          <div className="app__item">
            <Menu />
          </div>
          <div className="app__item">
            <SearchInput />
          </div>
          <div className="app__item">
            <SearchFloor />
          </div>
          <div className="app__item">
            <LargeButton icon={burgerIcon} />
          </div>
          <div className="app__item">
            <LargeButton icon={heartIcon} />
          </div>
          <div className="app__item">
            <LargeButton icon={homeIcon} />
          </div>
          <div className="app__item">
            <SmallButton icon={womanIcon} />
          </div>
          <div className="app__item">
            <SmallButton icon={menIcon} />
          </div>
          <div className="app__item">
            <SmallButton icon={closeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
