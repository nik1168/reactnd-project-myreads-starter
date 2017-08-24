import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Book extends React.Component{

  static propTypes= {
    book : PropTypes.object.isRequired,
    onChangeShelf : PropTypes.func.isRequired
  };

  onSelectChange = (event)=>{
    this.setState({value: event.target.value});
    this.props.onChangeShelf(event.target.value,this.props.book);
  };
  render(){
    const title = this.props.book.title;
    const authors = this.props.book.authors;
    const backgroundUrl = this.props.book.imageLinks.thumbnail;
    const shelf = this.props.book.shelf || 'none';
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("'+backgroundUrl+'")'}}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.onSelectChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}
export default Book
