import BookShow from "./BookShow"

function BookList({books,deleteBookById,editBookById}) {
  return <div className="book-list">
    {
      books.map(book=>{
        return <BookShow book={book} deleteBookById={deleteBookById} editBookById={editBookById}/>
      })
    }
  </div>;
}

export default BookList;
