import React, { Component } from 'react'
import ShelfCont from './ShelfCont'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class BooksPage extends Component{
    render() {
    const{updateShelf,bookslist}=this.props;
    console.log(bookslist)
    return(
    <div className="books-page">
        <div className="books-page-title">
            <h1>MyReads</h1>
        </div>
        <div className="books-page-shelves">
            
            <ShelfCont 
                shelf_title="Reading now"
                
                bookslist={bookslist.filter(book => book.shelf === 'currentlyReading')}
                updateShelf={updateShelf}
            />
            <ShelfCont 
                shelf_title="On List"
                bookslist={bookslist.filter(book => book.shelf === 'wantToRead')}
                updateShelf={updateShelf}
             />
            <ShelfCont 
                shelf_title="Read"
                bookslist={bookslist.filter(book => book.shelf === 'read')}
                updateShelf={updateShelf}       
            />
        </div>
        <div className="open-search">
             <Link to="/search">
                 <button>Add a new book</button>
             </Link>
      </div> 
    </div>
    )}
}
BooksPage.propTypes = {
    bookslist: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
   
  }
export default BooksPage