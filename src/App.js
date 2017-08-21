import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './searchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books : []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log("RESPONSE??");
      console.log(books);
      this.setState({
        books : books
      })
    })
  }

  updateShelf = (shelf,book) => {
    if(shelf!=='none'){
      this.setState((prevState)=>{
        books : prevState.books.map((item)=>(item.shelf=item.id===book.id?shelf:item.shelf))
      })
      BooksAPI.update(book,shelf).then((response)=>{
      })
    }
  };

  addBook = (shelf,book) =>{
    book.shelf = shelf;
    this.setState(prevState=>({
      books : prevState.books.concat([book])
    }));
    BooksAPI.update(book,shelf).then((response)=>{
    })
  };
  render() {
    return (
      <div className="app">
          <div>
            <Route
              path="/search"
              render={({history})=>(
                <SearchBook books={this.state.books} updateShelf={(shelf,book)=>{
                  this.addBook(shelf,book);
                  history.push('/');
              }}/>
              )}
            />
          </div>
          <div>
            <Route
              exact
              path="/"
              render={({history})=>(
                <ListBooks books={this.state.books} updateShelf={this.updateShelf}/>
              )}
            />
          </div>
      </div>
    )
  }
}
export default BooksApp
