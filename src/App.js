import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log('Need to add book with:', title);
    setBooks([...books,{id:Date.now(),title}])
  };



  const deleteBookById=(id)=>{
    const updatedBooks=books.filter(bk=>bk.id!==id)
    setBooks(updatedBooks);
  }

  const editBookById=(id,newTitle)=>{
    const updatedBooks=books.map(bk=>{
        if(bk.id===id)
        {
          return {...bk,title:newTitle}
        }
        return bk;
    })
    setBooks(updatedBooks);
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} deleteBookById={deleteBookById} editBookById={editBookById}/>
      <BookCreate onCreate={createBook} />  
    </div>
  );
}

export default App;
