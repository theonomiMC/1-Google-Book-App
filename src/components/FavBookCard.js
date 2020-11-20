import React from 'react'
import { BookControls } from './BookControls'
import { Link } from 'react-router-dom'

export const FavBookCard = ({ book, type }) => {

    return (
        <div>
            {/* ---book cover----- */}
            <div className="img-content">
                {book.volumeInfo.imageLinks ?
                    (
                        <img
                            className="thumbnail"
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt="cover" />
                    ) :
                    (
                        <div className="no-caver"></div>
                    )}
            </div>
            {/*--- content header---- */}
            <div className="content-header">
                <h3>{book.volumeInfo.title.substring(0, 50)}</h3>
            </div>
            {/*--- book description---- */}
            <div className="content">
                <p>{book.volumeInfo.description.substring(0, 85)} ...
                <Link to="/details">
                        <strong>read more</strong>
                    </Link>
                </p>
            </div>
            {/*---- button section----- */}
            <div className="content">
                <BookControls type={type} book={book} />
            </div>
        </div>

    )
}

