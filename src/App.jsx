import { BurgerMenu } from "./components/buttonBurgerMenu/ButtonBurgerMenu";
import { ButtonHome } from "./components/buttonHome/ButtonHome";
import { ButtonLike } from "./components/buttonLike/ButtonLike";
import { ButtonZoom } from "./components/buttonZoom/ButtonZoom";
import { FloorScroll } from "./components/floorsScroll/FloorScroll";
import { Menu } from "./components/menu/Menu";
import { SearchInput } from "./components/searchInput/SearchInput";
import { ButtonTouletMen } from "./components/buttonTouletMen/ButtonTouletMen";
import { ButtonTouletWoman } from "./components/buttonTouletWoman/ButtonTouletWoman";
import { SearchFloor } from "./components/searchFloor/SearchFloor";
import { ButtonCloseSearch } from "./components/buttonCloseSearch/ButtonCloseSearch";
function App() {
  return (
    <div className="app">
      <div className="container continer__app">
        <div className="app__grid">
          <div className="app__item">
            <BurgerMenu />
          </div>
          <div className="app__item">
            <ButtonLike />
          </div>
          <div className="app__item">
            <ButtonHome />
          </div>
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
            <ButtonTouletMen />
          </div>
          <div className="app__item">
            <ButtonTouletWoman />
          </div>
          <div className="app__item">
            <SearchFloor />
          </div>
          <div className="app__item">
            <ButtonCloseSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
