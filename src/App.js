import "./index.css";

import Card from "./components/Card";
import CreateHeader from "./components/Header";
import CreateNav from "./components/NavBar";

function App() {
  return (
    <>
      <CreateHeader title="Quiz - App" />
      <main>
        <ul className="card-list">
          <Card
            question="In the Kingdom Heart series who provides the english voice for
          Master Eraqus?"
            button="Show answer"
            category="#category"
          />
        </ul>
      </main>
      <CreateNav />
    </>
  );
}

export default App;
