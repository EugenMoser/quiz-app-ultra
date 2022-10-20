import "./index.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/NavBar";

function App() {
  return (
    <>
      <Header title="Quiz - App" />
      <main>
        <ul className="card-list">
          <Card
            question="In the Kingdom Heart series who provides the english voice for
          Master Eraqus?"
            buttonAnswer="Show answer"
            buttonHide="Hide answer"
            answer="Mark Hamill"
            category="#category"
          />
        </ul>
      </main>
      <Nav />
    </>
  );
}

export default App;
