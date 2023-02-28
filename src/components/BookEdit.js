import { useState } from "react";

function BookEdit({book,editHandleSubmit}) {
  const [newTitle,setNewTitle]=useState(book.title)

  function handleSubmit(e)
  {
    e.preventDefault();
    editHandleSubmit(book.id,newTitle);
  }


  return <div>
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Edit Title</label>
      <input value={newTitle} className="input" onChange={(e)=>setNewTitle(e.target.value)}></input>
      <button  className="button is-primary">Save</button>
    </form>
  </div>;
}

export default BookEdit;
