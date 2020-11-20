import React, {useContext} from 'react'
import { BooksContext } from '../context/GlobalState'
import { FavBookCard } from './FavBookCard'

 const Favorites = () => {
  const { favorites } = useContext(BooksContext)
  return (
    //   <div>
          <div className="container">
              {favorites.length > 0 ?
                  (
                      <div>
                          <div>
                              <h1>
                                  My Favorite Books
                              </h1>
                          </div>
                          <div className="container">
                              {favorites.map(book =>
                                  (
                                      <FavBookCard book={book} type="favorites" />
                                  )
                              )}
                          </div>
                      </div>
                  ) : <h1 className="no-books">No Favorite Books</h1>
              }

          </div>
    //   </div>


  )
}
export default Favorites