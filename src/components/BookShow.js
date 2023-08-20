import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleDelete() {
    onDelete(book.id);
  }

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  // This will pass parameters of onEdit and close form given by BookEdit.js at once
  function handleSubmit(id, newTitle) {
    setIsEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3> {book.title} </h3>;

  if (isEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img
        alt="book-img"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          {" "}
          Edit{" "}
        </button>
        <button className="delete" onClick={handleDelete}>
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}

export default BookShow;
