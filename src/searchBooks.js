import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Books'
class ListBooks extends React.Component{
  onChangeShelf = (shelf,book)=>{
    this.props.updateShelf(shelf,book);
  };

  render(){
    const books = this.props.books;
    let read = books.filter((book)=>(book.shelf === 'read'));
    let wantToRead = books.filter((book)=>(book.shelf === 'wantToRead'));
    let currentlyReading = books.filter((book)=>(book.shelf === 'currentlyReading'));
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  currentlyReading.map((book,index)=>(
                    <li key={index}>
                      <Book book={book} onChangeShelf={this.onChangeShelf}/>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  wantToRead.map((book,index)=>(
                    <li key={index}>
                      <Book book={book} onChangeShelf={this.onChangeShelf}/>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  read.map((book,index)=>(
                    <li key={index}>
                      <Book book={book} onChangeShelf={this.onChangeShelf}/>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="add-contact"
          >Add a book</Link>
        </div>

      </div>
    )
  }
}
export default ListBooks
