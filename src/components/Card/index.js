//Card JS
import CreateButton from "../Button";

function CreateCard({ question, button, category }) {
  return (
    <ul class="card-list">
      <li class="card-list__item">
        <article class="card">
          {/**question */}
          <h2 class="card__question"> {question} </h2>
          {/**import Card Button */}
          <CreateButton button="Show answer" />

          {/**categories */}
          <ul class="card__tag-list">
            <li class="card__tag-list-item">{category}</li>
          </ul>

          {/**Bookmark Button */}
          <div class="card__button-bookmark">
            <button
              class="bookmark bookmark--active"
              aria-label="bookmark"
              type="button"
            >
              <svg
                class="bookmark__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24"
              >
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
              </svg>
            </button>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default CreateCard;
