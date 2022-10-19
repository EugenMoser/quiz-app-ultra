//import logo from "./logo.svg";
import "./index.css";

import CreateCard from "./components/Card";
import CreateHeader from "./components/Header";
import CreateNav from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <CreateHeader title="Quiz - App" />
      <main>
        <ul class="card-list">
          <CreateCard
            queston="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            button="Show answer"
            category="#category"
          />
        </ul>
      </main>
      <CreateNav />
    </div>
  );
}

export default App;
