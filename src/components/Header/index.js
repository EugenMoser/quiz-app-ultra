//Header JS

import "./Header.css";

function CreateHeader({ title }) {
  return (
    <header className="header">
      <h1 className="header__title"> {title} </h1>
    </header>
  );
}

export default CreateHeader;
