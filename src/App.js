import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const onEdit = (index, newTitle) => {
    const render = books.map((item) => {
      if (item.id === index) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setBooks(render);
  };

  const onDelete = (id) => {
    const render = books.filter((item) => {
      return item.id !== id;
    });
    setBooks(render);
  };
  const createBook = (title) => {
    const render = [
      ...books,
      {
        id: Math.floor(Math.random() * 9999),title
        
      },
    ];
    setBooks(render);
  };

  return (
    <div className="app">
      <BookList onEdit={onEdit} books={books} onDelete={onDelete} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
