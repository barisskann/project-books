import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };
  
  return (
    <div className="book-create">
      <h3>ADD BOOK</h3>
      <form onSubmit={handleSubmit}>
        <label>KİTAP DEGERİ</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Touch This Button</button>
      </form>
    </div>
  );
}

export default BookCreate;
