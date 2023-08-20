import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // This will include closing of form and edit form at once to BookShow.js
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title </label>
        <input value={title} onChange={handleChange} />
        <button className="button is-primary"> Save </button>
      </form>
    </div>
  );
}

export default BookEdit;
