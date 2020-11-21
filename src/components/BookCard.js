import React from 'react'
export const BookCard = ({ book }) => {

    return (
        <div className="wrapper">

            <div className="img-box" key={book.id}>
                {book.volumeInfo.imageLinks ?
                    (
                        <img src={book.volumeInfo.imageLinks.thumbnail}
                            alt="cover" />
                    ) : (
                        <div></div>
                    )}
            </div>
            <article>
                <p><h3>{book.volumeInfo.title}</h3>
                <h4>Author: {book.volumeInfo.authors}</h4>
                <h5>Category: {book.volumeInfo.categories}</h5>
                {book.volumeInfo.description}</p>
            </article>
        </div>

    )
}
