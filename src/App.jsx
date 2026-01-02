// import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import { pokemonPortfolio, ipsoPortfolio } from "./data.js";
import AOS from 'aos';
import 'aos/dist/aos.css';         // This brings in the styles (CSS)
AOS.init({
    once: true  // Optional: makes ALL animations happen only once
  });
function App() {
  return (
    <div className="app">
      <div className="sections">
        <Intro />
        <Portfolio
          initialData={pokemonPortfolio}
          list={[{ id: "pokemon", title: "Pokedex" }]}
        />
        <Portfolio
          initialData={ipsoPortfolio}
          list={[{ id: "ipso", title: "IPSO Email bot" }]}
        />
      </div>
    </div>
  );
}

export default App;
