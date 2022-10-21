import "./index.css";
import { useState } from "react";

//import Card from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/NavBar";

import Cards from "./Pages/Cards.js";
import Create from "./Pages/Create.js";
import Profile from "./Pages/Profile.js";

//margin-top for pages 150 px
import "./Pages/Pages.css";

function App() {
  const [state, setState] = useState("home");
  //const [page, setPage] = useState("home"); laut Aufgabe!!
  return (
    <>
      <Header title="Quiz - App" />
      <main>
        <ul className="card-list">
          {state === "home" ? <Cards /*cards={cards}*/ /> : null}
          {state === "bookmark" && <Cards /*cards={cards}*/ />}
          {state === "create" && <Create />}
          {state === "profile" && <Profile />}

          {/*<CreateCard
          question="In the Kingdom Heart series who provides the english voice for
            queston="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          Master Eraqus?"
            button="Show answer"
          button="Show answer"
            category="#category"
          category="#category"
          /> */}
        </ul>
      </main>
      <Nav
        state={state}
        setState={setState}
      />
    </>
  );
}

export default App;
