import React, { useState } from 'react'
import {BookCard} from './BookCard'

const Details = () => {
    const [books] = useState(localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) :[])
   
    return (
        <div className="container">
            {books.map(book =>
                <div key={book.id}>
                    <BookCard book={book} />
                </div>
            )}
            
        </div>
    )
}

export default Details