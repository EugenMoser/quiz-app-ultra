import "./index.css";
import { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/NavBar";

import Cards from "./Pages/Cards.js";
import Create from "./Pages/Create.js";
import Profile from "./Pages/Profile.js";

import { cards } from "./Pages/Data.js";

function App() {
  const [state, setState] = useState("home");
  //const [page, setPage] = useState("home"); laut Aufgabe!!
  return (
    <>
      <Header title="Quiz - App" />
      <main>
        <ul className="card-list">
          {state === "home" && (
            <Cards
              key={cards.id}
              cards={cards}
            />
          )}

          {/* ????????????????????????? push bookmarked Cards to Bookmark page--Part 5c - Bookmarked cards*/}
          {cards.isBookmarked
            ? state === "bookmark" && (
                <Cards
                  key={cards.id}
                  cards={cards}
                />
              )
            : ""}

          {/* {cards.isBookmarked && state === "bookmark" ? (
            <Cards
              key={cards.id}
              cards={cards}
            />
          ) : (
            ""
          )} */}
          {state === "create" && (
            <Create
              key={cards.id}
              cards={cards}
            />
          )}
          {state === "profile" && <Profile key={cards.id} />}
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
