import BookShow from "./BookShow";
function BookList({ onEdit,books,onDelete}) {
  const rendered = books.map((item) => {
    
    return (
      <div>
        <BookShow onEdit={onEdit} onDelete={onDelete} key={item.id} item={item} />
      </div>
    );
  });

  return <div className="book-list">{rendered}</div>;
}

export default BookList;
