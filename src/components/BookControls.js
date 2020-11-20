import React, {useContext} from 'react'
import {BooksContext} from  "../context/GlobalState"

export const BookControls = ({ book, type }) => {
    const { removeBookFromFavorites } = useContext(BooksContext)
    return (
        <div className="inner-card-controls">
            {type === 'favorites' && (
                <>
                <button className='btn'
                onClick={()=>removeBookFromFavorites(book.id)}>
             Remove
                </button>
                </>
            )}
        </div>
    )
}
