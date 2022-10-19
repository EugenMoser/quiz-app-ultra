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
        <CreateCard
          question="In the Kingdom Heart series who provides the english voice for
          Master Eraqus?"
          button="Show answer"
          category="#category"
        />
      </main>
      <CreateNav />
    </div>
  );
}

export default App;
