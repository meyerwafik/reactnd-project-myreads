import React,{Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import { getAll, update} from './BooksAPI'
import BooksPage from './BooksPage'
import SearchBooks from './SearchBooks'
class BooksApp extends Component {
  state = {
    bookslist:[]
    
  }
  
  
   componentDidMount(){
    getAll().then(bookslist => {
      this.setState({
          bookslist: bookslist
          
      })
      


  })
  }
  updateShelf = (book, updatedShelf) => {
    
    update(book, updatedShelf)
    const { bookslist } = this.state
    book.shelf = updatedShelf
    const updatedBooks = [...bookslist.filter(({ id }) => id !== book.id), book]
    this.setState(() => ({
      bookslist: updatedBooks
    }))
  }
  render() {
    const {bookslist}=this.state;
    
    
    return (
    
      <div>
         <Route exact path='/' render={() => (
          <BooksPage
            updateShelf={this.updateShelf}
            bookslist={bookslist}
           
          />
        )}
        />
        <Route  path='/search' render={() => (
          <SearchBooks
            updateShelf={this.updateShelf}
            bookslist={bookslist}
          />
        )}
        />
      </div>

   
    )
    }}
export default BooksApp