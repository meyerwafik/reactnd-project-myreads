import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class SearchBooks extends Component{
state={
    search:'',
    bookslist:[]
    
}
updateSearch = (search) => {
    this.setState(() => ({
      search: search
    }))
    if(search!=='') {
        BooksAPI.search(search).then(bookslist => {
          if(!bookslist || bookslist.hasOwnProperty('error')) {
            this.setState({ bookslist: [] })
          } else {
              this.setState({ bookslist: bookslist })
          }  
        })
      } else {
        this.setState( { books: [] })
      }
  }

  clearSearch = () => {
    this.updateSearch('')
  }
  render(){
    const {search,bookslist}=this.state
    const{updateShelf}=this.props;
    const showingBooks= search === ''
    ? []
    : bookslist.filter((b) => (
        b.title.toLowerCase().includes(search.toLowerCase())       
      ))
      const currbooks=showingBooks.map(book => {
        
        if (!('shelf' in book)) {
          book.shelf = 'none'
        }
        return book
      })
      
   
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>  
                <div className='search-books-input-wrapper'>
                    <input               
                        type='text'
                        placeholder='Search Books'
                        value={search}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />
                </div> 
                </div>
                {showingBooks.length>0 &&(
                <ol className="books-grid">
                    {currbooks.map(book => (
                        <Book key={book.id} book={book} updateShelf={updateShelf} />
           
                    ))}
                </ol>
                )}
                 
            </div>
          ) 
    
    

  }


}
export default SearchBooks
