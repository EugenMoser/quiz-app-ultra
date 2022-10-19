//Card JS

function CreateCard({ question, button, category }) {
  return (
    <li class="card-list__item">
      <article class="card">
        <h2 class="card__question">{question}</h2>
        <button
          class="card__button-answer"
          type="button"
        >
          {button}
        </button>
        <ul>
          <li class="card__tag-list-item">{category}</li>
        </ul>
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
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </article>
    </li>
  );
}

export default CreateCard;
