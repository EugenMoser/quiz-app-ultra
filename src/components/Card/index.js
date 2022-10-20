//Card JS
import CreateButton from "../Button";

import "./Card.css";
import "../Bookmark/Bookmark.css";

function Card({ question, button, category }) {
  return (
    <li className="card-list__item">
      <article className="card">
        {/**question */}
        <h2 className="card__question"> {question} </h2>
        {/**import Card Button */}
        <CreateButton button="Show answer" />

        {/**categories */}
        <ul className="card__tag-list">
          <li className="card__tag-list-item">{category}</li>
        </ul>

        {/**Bookmark Button */}
        <div className="card__button-bookmark">
          <button
            className="bookmark bookmark--active"
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
