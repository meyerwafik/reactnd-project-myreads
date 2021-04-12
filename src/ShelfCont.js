import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
class ShelfCont extends Component{
    render(){
        const{shelf_title,bookslist,updateShelf}=this.props;
        return(
            <div className='shelf-cont'>
                <h2 className="shelf-cont-title">{shelf_title}</h2>
                <div className='shelf-cont-books'>
                    <ol className="books-grid">
                        {bookslist.map((book) => (
                            <Book
                                key={book.id} 
                                book={book} 
                                updateShelf={updateShelf} 
                            />
                        ))}
                    </ol>

                </div>
            </div>
        )
    }
}
ShelfCont.propTypes = {
    shelf_title: PropTypes.string.isRequired,
    bookslist: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}
export default ShelfCont