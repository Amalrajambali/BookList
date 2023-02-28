import { useState } from "react";
import BookEdit from "./BookEdit"

function BookShow({ book, deleteBookById ,editBookById}) {
  const[showEdit,setShowedit]=useState(false)

  function editHandleSubmit(id,newTitle)
  {
    editBookById(id,newTitle)
    setShowedit(false)
  }


  let content=<h3>{book.title}</h3>
  if(showEdit)
  {
    content=<BookEdit book={book} editHandleSubmit={editHandleSubmit} setShowedit={setShowedit}/>
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={()=>setShowedit(!showEdit)}>Edit</button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}  

export default BookShow;
