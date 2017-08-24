import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
class ListBooks extends React.Component{

  static propTypes= {
    books : PropTypes.array.isRequired,
    updateShelf : PropTypes.func.isRequired
  };

  /**
   * @description call parent on change shelf function
   * @param shelf
   * @param book
   */
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
          <Shelf title={'Currently Reading'} books={currentlyReading} onChangeShelf={this.onChangeShelf}></Shelf>
          <Shelf title={'Want to Read'} books={wantToRead} onChangeShelf={this.onChangeShelf}></Shelf>
          <Shelf title={'Read'} books={read} onChangeShelf={this.onChangeShelf}></Shelf>
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
