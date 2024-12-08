// import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import { pokemonPortfolio, ipsoPortfolio } from "./data.js";

function App() {
  return (
    <div className="app">
      {/* <Topbar /> */}
      <div className="sections">
        <Intro />
        {/* Portfolio 1 */}
        <Portfolio
          initialData={pokemonPortfolio}
          list={[{ id: "pokemon", title: "Pokedex" }]}
        />
        {/* Portfolio 2 */}
        <Portfolio
          initialData={ipsoPortfolio}
          list={[{ id: "ipso", title: "IPSO Email bot" }]}
        />
      </div>
    </div>
  );
}

export default App;
