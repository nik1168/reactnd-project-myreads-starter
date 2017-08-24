import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Books'
class searchBook extends React.Component{

  static propTypes= {
    books : PropTypes.array.isRequired,
    updateShelf : PropTypes.func.isRequired
  };

  state = {
    query : '',
    books : []
  };

  /**
   * @description Updates query state
   * @param query
   */
  updateQuery = (query) => {
    BooksAPI.search(query).then((response)=>{
      let booksArray = [];
      if(response){
        booksArray = !response.error ?response:response.items;
      }
      this.setState({
        books: booksArray
      })
    })
  };

  /**
   * @description call parent update shelf function
   * @param shelf
   * @param book
   */
  onChangeShelf = (shelf,book)=>{
    this.props.updateShelf(shelf,book);
  };

  /**
   * @description Check if a specific book is in a list of books.
   * @param books
   * @param book
   * @returns Index of found book
   */
  isInList = (books,book)=>{
    let indexBook = null;
    books.map((itemBook,index)=>{
      if(itemBook.id===book.id){
        indexBook = index;
      }
    });
    return indexBook;
  };
render(){
  const {books} = this.state;
  books.map((book)=>{
    let index = this.isInList(this.props.books,book);
    if(index){
      book.shelf = this.props.books[index].shelf
    }
  });
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(event)=>this.updateQuery(event.target.value)}
            placeholder="Search by title or author"/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map((book,index)=>(
              <li key={index}>
                <Book book={book} onChangeShelf={this.onChangeShelf}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
}
export default searchBook
