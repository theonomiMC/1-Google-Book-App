import React, { useState, useEffect } from 'react'
import {BookCard} from './BookCard'
import axios from 'axios'

const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en"

const Details = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(GOOGLE_API)
            .then(response => {
                setBooks(response.data.items)
            })

    }, [])

    return (
        <div className="container">
            {/* <h1>Book Details</h1> */}
            {books.map(book =>
                <div key={book.id}>
                    <BookCard book={book} />
                </div>
            )}
            
        </div>
    )
}

export default Details