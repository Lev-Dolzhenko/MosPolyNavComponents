import { BurgerMenu } from "./components/buttonBurgerMenu/ButtonBurgerMenu";
import { ButtonHome } from "./components/buttonHome/ButtonHome";
import { ButtonLike } from "./components/buttonLike/ButtonLike";
import { ButtonZoom } from "./components/buttonZoom/ButtonZoom";
import { FloorScroll } from "./components/floorsScroll/FloorScroll";

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
        </div>
      </div>
    </div>
  );
}

export default App;
