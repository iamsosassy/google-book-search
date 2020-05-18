import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {


  const [state, setState] = useState({
    searchTerm: '',
    apiBooks: []
  });


  const handleTyping = (event) => {
    console.log('we r typign!!', event.target.value)
    //var newstate = state
    //newstate.searchTerm = eve
    setState({ ...state, searchTerm: event.target.value })
  }

  const handleClick = () => {
    Axios.get('https://www.googleapis.com/books/v1/volumes?q=' + state.searchTerm + '&download=epub&key=AIzaSyAgITQ56Hp5iZIxTIjCWTHIpC3Hcu53tDc').then(function (data) {
      console.log('data', data)
      var cleanedBooks = []
      for (let i = 0; i < data.data.items.length; i++) {
        var newBook = {
          title: data.data.items[i].volumeInfo.title,
          desription: '' // for real put data.data.items[i].descriptiopn
        }
        cleanedBooks.push(newBook)
      }
      console.log('newBook', cleanedBooks)
      setState({ ...state, apiBooks: cleanedBooks })
      // declae empty arrey var books = []
      //for loop thru data and pick off just waht we want
      //set state with just the good cleaned up array
    })
  }

  console.log('this is our state', state)

  return (
    <div className="App">

      <p>Search a book</p>
      <input onChange={handleTyping}></input>
      <button onClick={handleClick}>Serach</button>
      {state.apiBooks.map(function (singleBook) {
        return (
          <div>
            <h1>{singleBook.title}</h1>
            <button>Save</button>

          </div>
        )
      })}
    </div>
  );
}

export default App;
