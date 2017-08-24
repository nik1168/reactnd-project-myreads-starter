import React, { Component } from 'react';
import Book from './Books'

function Shelf(props) {
  return(
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              props.books.map((book,index)=>(
                <li key={index}>
                  <Book book={book} onChangeShelf={props.onChangeShelf}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  )
}
export default Shelf
