//Button JS

function CreateButton({ button }) {
  return (
    <button
      class="card__button-answer"
      type="button"
    >
      {button}
    </button>
  );
}

export default CreateButton;
