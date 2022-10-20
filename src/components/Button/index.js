//Button JS
import "./Button.css";

function Button({ button }) {
  return (
    <button
      className="card__button-answer"
      type="button"
    >
      {button}
    </button>
  );
}

export default Button;
