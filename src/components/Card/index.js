//Card JS
import { useState } from "react";

import "./Card.css";

//function Card({ question, category, answer, buttonAnswer, buttonHide })
function Card({ card }) {
  const [state, setState] = useState(false);
  //console.log(state);
  console.log(card.isBookmarked);

  return (
    <li className="card-list__item">
      <article className="card">
        {/**question */}
        <h2 className="card__question"> {card.question} </h2>
        {/**card button */}
        <button
          className="card__button-answer"
          type="button"
          onClick={() => {
            setState((state) => !state);
          }}
        >
          {state ? card.buttonHide : card.buttonAnswer}
        </button>

        {/**answer */}
        <p
          className={
            state ? "card__answer card__answer--active" : "card__answer"
          }
        >
          {card.answer}
        </p>
        {/**categories */}
        <ul className="card__tag-list">
          {card.category.map((cardCategory) => {
            return <li className="card__tag-list-item">{cardCategory}</li>;
          })}
        </ul>
        {/**Bookmark Button */}
        <div className="card__button-bookmark">
          <button
            className={
              card.isBookmarked ? "bookmark bookmark--active" : "bookmark"
            }
            aria-label="bookmark"
            type="button"
          >
            <svg
              className="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
            </svg>
          </button>
        </div>
      </article>
    </li>
  );
}

export default Card;
