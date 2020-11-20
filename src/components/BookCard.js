import React, { useContext } from 'react'
import { BooksContext } from '../context/GlobalState'


export const BookCard = ({ book, type }) => {
    const { addBookToFavorites, favorites } = useContext(BooksContext)
    let storedBook = favorites.find(b => b.id === book.id)
    const disabledButton = storedBook ? true : false

    return (
        <div className="wrapper">

            <div className="img-box" key={book.id}>
                {book.volumeInfo.imageLinks ?
                    (
                        <>
                        <img src={book.volumeInfo.imageLinks.thumbnail}
                            alt="cover" />
                            <button
                    className = "ctr-btn"
                    disabled={disabledButton}
                    onClick={() => addBookToFavorites(book)}
                >
                    <i className="fas fa-star"></i>
                    </button>
                    </>
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
