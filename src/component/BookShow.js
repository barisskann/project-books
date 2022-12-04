import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => onDelete(item.id);
  const [edit, setEdit] = useState(false);
  const handleEditClick = (title, index) => {
    setEdit(!edit);
    onEdit(title, index);
  };
  let content = <h3>{item.title}</h3>
  if (edit) {
    content = (
      <BookEdit handleEditClick={handleEditClick} item={item}></BookEdit>
    );
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
