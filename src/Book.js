import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Book extends Component{
    render(){
        const {book, updateShelf } = this.props
        const { title, authors, imageLinks, shelf } = book
        const thumbnail = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : ''
        return(
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${thumbnail})`
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select 
                            onChange={e => updateShelf(book, e.target.value)}
                            value={shelf ? shelf : ''}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title?title:null}</div>
                
                <div className="book-authors">{authors ? authors.join(', '):null}</div>
          </div>
        )
    }
}
Book.propType = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func
}
export default Book