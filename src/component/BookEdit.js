import { useState } from "react";

function BookEdit({item,handleEditClick}) {
  const [title, setTitle] = useState(item.title);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => setTitle(e.target.value);
  const onSubmitClick = () => {
    handleEditClick(item.id,title)
  }
  
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>TİTLE</label>
      <input onChange={handleChange} value={title} className="input"></input>
      <div>
        <button onClick={onSubmitClick} className="button is-primary">Güncelle</button>
      </div>
    </form>
  )
}

export default BookEdit;
